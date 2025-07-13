// Oracle functionality
document.addEventListener('DOMContentLoaded', function() {
    const oracleButton = document.getElementById('oracle-button');
    const questionInput = document.getElementById('question');
    const answerDiv = document.getElementById('answer');
    const questionLinks = document.querySelectorAll('.question-link');

    // Oracle answers
    const yesAnswers = [
        'Yes', 'Yes，Absolutely', 'Yes，Definitely', 'Yes，Of course', 'Yes，Without a doubt',
        'Yes, follow your heart', 'Yes，The stars align in your favor', 'Yes, the time is right'
    ];

    const noAnswers = [
        'No', 'No，Not now', 'No，The path is unclear', 'No，Wait for a better time', 'No, reconsider',
        'No，The universe suggests otherwise', 'No, seek another way', 'No，Not the right moment'
    ];

    // Generate or get user ID
    function getUserId() {
        let userId = localStorage.getItem('oracle_user_id');
        if (!userId) {
            userId = 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
            localStorage.setItem('oracle_user_id', userId);
        }
        return userId;
    }

    // Simple hash function for questions
    function hashQuestion(question) {
        let hash = 0;
        for (let i = 0; i < question.length; i++) {
            const char = question.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return Math.abs(hash);
    }

    // Cache management
    function getCachedAnswer(userId, question) {
        const cacheKey = `oracle_${userId}_${hashQuestion(question.toLowerCase().trim())}`;
        const cached = localStorage.getItem(cacheKey);
        
        if (cached) {
            const data = JSON.parse(cached);
            const now = Date.now();
            const cacheExpiry = 1 * 60 * 60 * 1000; // 1 hours
            
            if (now - data.timestamp < cacheExpiry) {
                return data.answer;
            } else {
                localStorage.removeItem(cacheKey);
            }
        }
        
        return null;
    }

    function setCachedAnswer(userId, question, answer) {
        const cacheKey = `oracle_${userId}_${hashQuestion(question.toLowerCase().trim())}`;
        const data = {
            answer: answer,
            timestamp: Date.now()
        };
        localStorage.setItem(cacheKey, JSON.stringify(data));
    }

    // Oracle function
    function askOracle() {
        const question = questionInput.value.trim();
        
        if (!question) {
            alert('Please enter a question first.');
            return;
        }

        const userId = getUserId();
        
        // Check for cached answer
        const cachedAnswer = getCachedAnswer(userId, question);
        
        // Add crystal ball animation (for both cached and new answers)
        const crystalBall = document.querySelector('.crystal-ball');
        if (crystalBall) {
            crystalBall.classList.add('consulting');
            crystalBall.style.animation = 'float 3s ease-in-out infinite, glow 2s ease-in-out infinite';
        }

        // Add loading effect (for both cached and new answers)
        oracleButton.textContent = 'Consulting the Oracle...';
        oracleButton.disabled = true;
        answerDiv.classList.add('hidden');

        if (cachedAnswer) {
            // Use cached answer with same animation timing
            setTimeout(() => {
                answerDiv.textContent = cachedAnswer;
                const isYes = cachedAnswer.startsWith('Yes');
                answerDiv.className = `mt-6 text-2xl font-cinzel ${isYes ? 'text-green-400' : 'text-red-400'}`;
                answerDiv.classList.remove('hidden');
                
                // Add to history for cached answers too
                addToHistory(question, cachedAnswer);
                
                // Show share section for cached answers too
                const shareSection = document.getElementById('share-section');
                if (shareSection) {
                    shareSection.classList.remove('hidden');
                }
                
                // Reset crystal ball animation
                if (crystalBall) {
                    crystalBall.classList.remove('consulting');
                    crystalBall.style.animation = 'float 3s ease-in-out infinite';
                }
                
                // Trigger confetti for positive answers
                if (isYes && typeof confetti === 'function') {
                    confetti({
                        particleCount: 50,
                        spread: 60,
                        origin: { y: 0.8 }
                    });
                }
                
                // Reset button
                oracleButton.textContent = 'Get Oracle Answer';
                oracleButton.disabled = false;
            }, 2000);
            
            return;
        }

        // Simulate oracle consultation delay for new answers
        setTimeout(() => {
            const isYes = Math.random() > 0.5;
            const answers = isYes ? yesAnswers : noAnswers;
            const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
            
            // Cache the answer
            setCachedAnswer(userId, question, randomAnswer);
            
            // Add to history
            addToHistory(question, randomAnswer);
            
            answerDiv.textContent = randomAnswer;
            answerDiv.className = `mt-6 text-2xl font-cinzel ${isYes ? 'text-green-400' : 'text-red-400'}`;
            answerDiv.classList.remove('hidden');
            
            // Show share section
            const shareSection = document.getElementById('share-section');
            if (shareSection) {
                shareSection.classList.remove('hidden');
            }
            
            // Reset crystal ball animation
            if (crystalBall) {
                crystalBall.classList.remove('consulting');
                crystalBall.style.animation = 'float 3s ease-in-out infinite';
            }
            
            // Trigger confetti for positive answers
            if (isYes && typeof confetti === 'function') {
                confetti({
                    particleCount: 50,
                    spread: 60,
                    origin: { y: 0.8 }
                });
            }
            
            // Reset button
            oracleButton.textContent = 'Get Oracle Answer';
            oracleButton.disabled = false;
        }, 2000);
    }

    // Statistics functions
    function updateStatistics(answer) {
        let stats = JSON.parse(localStorage.getItem('oracle_stats') || '{"total": 0, "yes": 0, "no": 0}');
        stats.total++;
        if (answer === 'Yes') {
            stats.yes++;
        } else {
            stats.no++;
        }
        localStorage.setItem('oracle_stats', JSON.stringify(stats));
        displayStatistics();
    }

    function displayStatistics() {
        const stats = JSON.parse(localStorage.getItem('oracle_stats') || '{"total": 0, "yes": 0, "no": 0}');
        const questionsCount = document.getElementById('questions-count');
        const yesCount = document.getElementById('yes-count');
        const noCount = document.getElementById('no-count');
        
        if (questionsCount) questionsCount.textContent = stats.total;
        if (yesCount) yesCount.textContent = stats.yes;
        if (noCount) noCount.textContent = stats.no;
    }

    // History functions
    function addToHistory(question, answer) {
        let history = JSON.parse(localStorage.getItem('oracle_history') || '[]');
        history.unshift({
            question: question,
            answer: answer,
            timestamp: new Date().toLocaleString()
        });
        // Keep only last 10 questions
        if (history.length > 10) {
            history = history.slice(0, 10);
        }
        localStorage.setItem('oracle_history', JSON.stringify(history));
        displayHistory();
    }

    function displayHistory() {
        const history = JSON.parse(localStorage.getItem('oracle_history') || '[]');
        const historyContainer = document.getElementById('question-history');
        
        if (!historyContainer) return;
        
        if (history.length === 0) {
            historyContainer.innerHTML = '<p class="text-gray-400 text-center text-sm">No questions asked yet. Ask your first question above!</p>';
            return;
        }
        
        historyContainer.innerHTML = history.map(item => `
            <div class="bg-white/5 rounded-lg p-3 cursor-pointer hover:bg-white/10 transition" onclick="reuseQuestion('${item.question.replace(/'/g, "\\'")}')">
                <div class="flex justify-between items-start">
                    <div class="flex-1">
                        <p class="text-white text-sm font-medium">${item.question}</p>
                        <div class="flex items-center gap-2 mt-1">
                            <span class="text-xs ${item.answer === 'Yes' ? 'text-green-400' : 'text-red-400'}">${item.answer}</span>
                            <span class="text-xs text-gray-500">${item.timestamp}</span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    function reuseQuestion(question) {
        if (questionInput) {
            questionInput.value = question;
            questionInput.focus();
        }
    }

    // Daily question functionality
    function loadDailyQuestion() {
        const dailyQuestions = [
            // 原有的反思性问题
            "Should I take more risks in my life?",
            "Is it time to let go of something that no longer serves me?",
            "Should I trust my intuition more?",
            "Is today a good day to start something new?",
            "Should I reach out to someone I've been thinking about?",
            "Is it time to make a change in my routine?",
            "Should I be more patient with myself?",
            "Is there something I need to forgive?",
            "Should I focus more on my personal growth?",
            "Is it time to step out of my comfort zone?",
            "Should I listen to my heart over my head today?",
            "Is there an opportunity I should consider?",
            "Should I be more grateful for what I have?",
            "Is it time to set new goals?",
            "Should I trust the process more?",
            // 新增的流行问题
            "Does he love me?",
            "Will I get the job?",
            "Is this the right time to invest?",
            "Should I move to a new city?",
            "Am I on the right path?",
            "Will I find love soon?",
            "Is now a good time to travel?",
            "Should I start a new hobby?",
            "Will I be successful?",
            "Is my friend trustworthy?",
            "Should I take that risk?",
            "Will I pass my exams?",
            "Is this a good relationship?",
            "Should I buy that item?",
            "Will I achieve my goals?",
            "Is it time to change jobs?",
            "Should I reach out to them?",
            "Will I get a promotion?",
            "Is my health improving?",
            "Should I marry him?"
        ];
        
        const today = new Date().toDateString();
        const savedDate = localStorage.getItem('daily_question_date');
        const savedQuestion = localStorage.getItem('daily_question');
        
        if (savedDate === today && savedQuestion) {
            document.getElementById('daily-question').textContent = savedQuestion;
        } else {
            const randomIndex = Math.floor(Math.random() * dailyQuestions.length);
            const question = dailyQuestions[randomIndex];
            localStorage.setItem('daily_question', question);
            localStorage.setItem('daily_question_date', today);
            document.getElementById('daily-question').textContent = question;
        }
    }

    // Social sharing functions
    function shareToTwitter() {
        const question = questionInput.value.trim();
        const answer = answerDiv.textContent;
        const text = question ? 
            `I asked the Oracle: "${question}" and got "${answer}". What would you ask? Try it yourself!` :
            'I just discovered this amazing Yes/No Oracle! Get instant guidance for your decisions.';
        const url = 'https://yesnooracle.dev/';
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    }

    function shareToFacebook() {
        const url = 'https://yesnooracle.dev/';
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    }

    function copyToClipboard() {
        const question = questionInput.value.trim();
        const answer = answerDiv.textContent;
        const text = question ? 
            `I asked the Oracle: "${question}" and got "${answer}". Check out this amazing Yes/No Oracle: https://yesnooracle.dev/` :
            'Check out this amazing Yes/No Oracle for instant decision guidance: https://yesnooracle.dev/';
        
        navigator.clipboard.writeText(text).then(() => {
            const copyBtn = document.getElementById('share-copy');
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Copied!';
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        });
    }

    // Initialize new features
    function initializeNewFeatures() {
        displayHistory();
        loadDailyQuestion();
        
        // Social sharing event listeners
        const shareTwitter = document.getElementById('share-twitter');
        const shareFacebook = document.getElementById('share-facebook');
        const shareCopy = document.getElementById('share-copy');
        const useDailyQuestion = document.getElementById('use-daily-question');
        const clearHistory = document.getElementById('clear-history');
        
        if (shareTwitter) shareTwitter.addEventListener('click', shareToTwitter);
        if (shareFacebook) shareFacebook.addEventListener('click', shareToFacebook);
        if (shareCopy) shareCopy.addEventListener('click', copyToClipboard);
        
        if (useDailyQuestion) {
            useDailyQuestion.addEventListener('click', () => {
                const dailyQuestion = document.getElementById('daily-question').textContent;
                if (questionInput && dailyQuestion) {
                    questionInput.value = dailyQuestion;
                    questionInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    questionInput.focus();
                }
            });
        }
        
        if (clearHistory) {
            clearHistory.addEventListener('click', () => {
                if (confirm('Are you sure you want to clear your question history?')) {
                    localStorage.removeItem('oracle_history');
                    displayHistory();
                }
            });
        }
    }

    // Initialize all features when DOM is loaded
    initializeNewFeatures();

    // Event listeners
    if (oracleButton) {
        oracleButton.addEventListener('click', askOracle);
    }

    if (questionInput) {
        questionInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                askOracle();
            }
        });
    }

    // Preset question functionality
    questionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const question = this.getAttribute('data-question');
            if (questionInput && question) {
                questionInput.value = question;
                // Scroll to the oracle section
                questionInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                questionInput.focus();
            }
        });
    });

    // Language selector functionality
const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            const selectedLang = this.value;
            // For now, just store the preference
            localStorage.setItem('preferred-language', selectedLang);
            // You can add actual translation functionality here later
            console.log('Language changed to:', selectedLang);
        });

        // Load saved language preference
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang) {
            languageSelect.value = savedLang;
        }
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add mobile menu functionality if needed
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// Export for use in other files if needed
window.YesNoOracle = {
    askQuestion: function(question) {
        const questionInput = document.getElementById('question');
        const oracleButton = document.getElementById('oracle-button');
        
        if (questionInput && oracleButton) {
            questionInput.value = question;
            oracleButton.click();
        }
    }
};