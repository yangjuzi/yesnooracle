// Oracle functionality
document.addEventListener('DOMContentLoaded', function() {
    const oracleButton = document.getElementById('oracle-button');
    const questionInput = document.getElementById('question');
    const answerDiv = document.getElementById('answer');
    const questionLinks = document.querySelectorAll('.question-link');

    // Oracle answers
    const yesAnswers = [
        'Yes', 'Absolutely', 'Definitely', 'Of course', 'Without a doubt',
        'Yes, follow your heart', 'The stars align in your favor', 'Yes, the time is right'
    ];

    const noAnswers = [
        'No', 'Not now', 'The path is unclear', 'Wait for a better time', 'No, reconsider',
        'The universe suggests otherwise', 'No, seek another way', 'Not the right moment'
    ];

    // Oracle function
    function askOracle() {
        const question = questionInput.value.trim();
        
        if (!question) {
            alert('Please enter a question first.');
            return;
        }

        // Add loading effect
        oracleButton.textContent = 'Consulting the Oracle...';
        oracleButton.disabled = true;
        answerDiv.classList.add('hidden');

        // Simulate oracle consultation delay
        setTimeout(() => {
            const isYes = Math.random() > 0.5;
            const answers = isYes ? yesAnswers : noAnswers;
            const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
            
            answerDiv.textContent = randomAnswer;
            answerDiv.className = `mt-6 text-2xl font-cinzel ${isYes ? 'text-green-400' : 'text-red-400'}`;
            answerDiv.classList.remove('hidden');
            
            // Trigger confetti for positive answers
            if (isYes && typeof confetti === 'function') {
                confetti({
                    particleCount: 50,
                    spread: 60,
                    origin: { y: 0.8 }
                });
            }
            
            // Reset button
            oracleButton.textContent = 'Oracle';
            oracleButton.disabled = false;
        }, 2000);
    }

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