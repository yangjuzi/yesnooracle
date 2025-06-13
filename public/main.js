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

// Decision Matrix functionality
if (document.getElementById('decision-matrix')) {
  const matrix = {
    options: [],
    criteria: [],
    weights: {},
    ratings: {}
  };

  function addOption() {
    const option = prompt('Enter option name:');
    if (!option) return;
    
    matrix.options.push(option);
    updateMatrix();
  }

  function addCriterion() {
    const criterion = prompt('Enter criterion name:');
    if (!criterion) return;
    
    matrix.criteria.push(criterion);
    matrix.weights[criterion] = 1;
    updateMatrix();
  }

  function updateMatrix() {
    const table = document.getElementById('decision-matrix');
    const thead = table.querySelector('thead tr');
    const tbody = table.querySelector('tbody');
    const tfoot = table.querySelector('tfoot');
    
    // Update header
    thead.innerHTML = '<th class="p-2 border border-white/20">Options/Criteria</th>';
    matrix.criteria.forEach(criterion => {
      thead.innerHTML += `<th class="p-2 border border-white/20">${criterion}</th>`;
    });
    
    // Update body
    tbody.innerHTML = '';
    matrix.options.forEach(option => {
      const row = document.createElement('tr');
      row.innerHTML = `<td class="p-2 border border-white/20">${option}</td>`;
      
      matrix.criteria.forEach(criterion => {
        const rating = matrix.ratings[`${option}-${criterion}`] || '';
        row.innerHTML += `
          <td class="p-2 border border-white/20">
            <input type="number" min="1" max="10" value="${rating}" 
                   class="matrix-cell bg-white/10 rounded px-2 py-1"
                   data-option="${option}" data-criterion="${criterion}"
                   onchange="updateRating(this)">
          </td>
        `;
      });
      
      tbody.appendChild(row);
    });
    
    // Update weights row
    const weightsRow = tfoot.querySelector('tr:first-child');
    weightsRow.innerHTML = '<th class="p-2 border border-white/20">Weights</th>';
    matrix.criteria.forEach(criterion => {
      weightsRow.innerHTML += `
        <td class="p-2 border border-white/20">
          <input type="number" min="1" max="10" value="${matrix.weights[criterion]}"
                 class="weight-input bg-white/10 rounded px-2 py-1"
                 data-criterion="${criterion}"
                 onchange="updateWeight(this)">
        </td>
      `;
    });
    
    // Update total scores row
    const scoresRow = tfoot.querySelector('tr:last-child');
    scoresRow.innerHTML = '<th class="p-2 border border-white/20">Total Score</th>';
    matrix.options.forEach(option => {
      const score = calculateScore(option);
      scoresRow.innerHTML += `
        <td class="p-2 border border-white/20 text-center">
          ${score.toFixed(1)}
        </td>
      `;
    });
    
    updateResults();
  }

  function updateRating(input) {
    const option = input.dataset.option;
    const criterion = input.dataset.criterion;
    const value = parseInt(input.value);
    
    if (value >= 1 && value <= 10) {
      matrix.ratings[`${option}-${criterion}`] = value;
      updateMatrix();
    }
  }

  function updateWeight(input) {
    const criterion = input.dataset.criterion;
    const value = parseInt(input.value);
    
    if (value >= 1 && value <= 10) {
      matrix.weights[criterion] = value;
      updateMatrix();
    }
  }

  function calculateScore(option) {
    let totalScore = 0;
    let totalWeight = 0;
    
    matrix.criteria.forEach(criterion => {
      const rating = matrix.ratings[`${option}-${criterion}`] || 0;
      const weight = matrix.weights[criterion];
      totalScore += rating * weight;
      totalWeight += weight;
    });
    
    return totalWeight > 0 ? totalScore / totalWeight : 0;
  }

  function updateResults() {
    const resultsDiv = document.getElementById('results');
    
    if (matrix.options.length === 0 || matrix.criteria.length === 0) {
      resultsDiv.innerHTML = '<p>Add options and criteria to see results.</p>';
      return;
    }
    
    const scores = matrix.options.map(option => ({
      option,
      score: calculateScore(option)
    }));
    
    scores.sort((a, b) => b.score - a.score);
    
    let html = '<div class="space-y-4">';
    html += '<h3 class="text-xl font-semibold">Recommendation</h3>';
    html += `<p>The best option is: <span class="text-purple-400 font-semibold">${scores[0].option}</span></p>`;
    
    html += '<h3 class="text-xl font-semibold mt-6">All Options Ranked</h3>';
    html += '<ol class="list-decimal pl-6 space-y-2">';
    scores.forEach(({option, score}) => {
      html += `<li>${option} - Score: ${score.toFixed(1)}</li>`;
    });
    html += '</ol>';
    
    html += '</div>';
    resultsDiv.innerHTML = html;
  }

  // Add event listeners
  document.getElementById('add-option').addEventListener('click', addOption);
  document.getElementById('add-criterion').addEventListener('click', addCriterion);
}

// 随机数生成器功能
if (document.getElementById('random-number-tool')) {
  const toolDiv = document.getElementById('random-number-tool');
  const resultDiv = document.getElementById('random-number-result');

  toolDiv.innerHTML = `
    <div class="flex flex-col md:flex-row items-center gap-4">
      <label class="flex items-center gap-2">最小值
        <input id="rand-min" type="number" value="1" class="bg-white/10 rounded px-2 py-1 w-24 text-center" />
      </label>
      <label class="flex items-center gap-2">最大值
        <input id="rand-max" type="number" value="100" class="bg-white/10 rounded px-2 py-1 w-24 text-center" />
      </label>
      <button id="rand-generate" class="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition font-semibold">生成</button>
    </div>
  `;
  resultDiv.innerHTML = '<div class="text-center text-2xl text-purple-400 mt-4">请设置范围并点击生成</div>';

  document.getElementById('rand-generate').onclick = function() {
    const min = parseInt(document.getElementById('rand-min').value);
    const max = parseInt(document.getElementById('rand-max').value);
    if (isNaN(min) || isNaN(max) || min > max) {
      resultDiv.innerHTML = '<div class="text-red-400 text-center mt-4">请输入有效的最小值和最大值</div>';
      return;
    }
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    resultDiv.innerHTML = `<div class="text-center text-5xl font-bold text-purple-300 animate-pulse">${rand}</div>`;
  };
}

// Coin Flip with 3D animation
if (document.getElementById('coin-flip-tool')) {
  const toolDiv = document.getElementById('coin-flip-tool');
  const resultDiv = document.getElementById('coin-flip-result');

  toolDiv.innerHTML = `
    <div class="flex flex-col items-center gap-4">
      <button id="coin-flip-btn" class="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-xl font-bold transition">Flip Coin</button>
      <div id="coin-flip-coin" class="mt-8" style="height:120px;"></div>
    </div>
  `;
  resultDiv.innerHTML = '<div class="text-center text-2xl text-purple-400 mt-4">Click the button to flip the coin</div>';

  const coinDiv = document.getElementById('coin-flip-coin');
  let flipping = false;

  function createCoinSVG(face) {
    const isHeads = face === 'heads';
    return `
      <svg width="200" height="200" viewBox="0 0 100 100" class="coin-svg">
        <defs>
          <linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#FFA500;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#FFD700;stop-opacity:1" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="2" dy="2" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        <!-- Coin body -->
        <circle cx="50" cy="50" r="45" fill="url(#coinGradient)" filter="url(#shadow)" />
        
        <!-- Coin edge -->
        <circle cx="50" cy="50" r="45" fill="none" stroke="#B8860B" stroke-width="2" />
        
        <!-- Coin face -->
        <g transform="translate(50,50)">
          ${isHeads ? `
            <!-- Heads side -->
            <circle cx="0" cy="0" r="35" fill="#FFD700" />
            <text x="0" y="0" text-anchor="middle" dominant-baseline="middle" font-size="80">H</text>
          ` : `
            <!-- Tails side -->
            <circle cx="0" cy="0" r="35" fill="#FFD700" />
            <text x="0" y="0" text-anchor="middle" dominant-baseline="middle" font-size="80">T</text>
          `}
        </g>
      </svg>
    `;
  }

  function showCoin(face) {
    coinDiv.innerHTML = `
      <div class="relative mx-auto" style="width:200px;height:200px;">
        ${createCoinSVG(face)}
      </div>`;
  }

  showCoin('heads');

  document.getElementById('coin-flip-btn').onclick = function() {
    if (flipping) return;
    flipping = true;
    resultDiv.innerHTML = '';
    
    const isHeads = Math.random() < 0.5;
    const finalFace = isHeads ? 'heads' : 'tails';
    
    coinDiv.innerHTML = `
      <div class="relative mx-auto coin-3d" style="width:200px;height:200px;">
        <div class="coin-container" style="transform-style: preserve-3d; perspective: 1000px;">
          ${createCoinSVG('heads')}
        </div>
      </div>`;
    
    const coinContainer = coinDiv.querySelector('.coin-container');
    
    // Add 3D flip animation with faster speed
    coinContainer.style.animation = 'flip 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)';
    
    setTimeout(() => {
      showCoin(finalFace);
      resultDiv.innerHTML = `<div class="text-center text-4xl font-bold text-purple-300 mt-4 coin-result">${finalFace === 'heads' ? 'Heads' : 'Tails'}</div>`;
      flipping = false;
    }, 600);
  };
}

// Add coin flip animation
const style = document.createElement('style');
style.textContent = `
  @keyframes flip {
    0% { 
      transform: translateY(0) rotateX(0) rotateY(0) rotateZ(0);
      filter: brightness(1);
    }
    8% { 
      transform: translateY(-60px) rotateX(360deg) rotateY(360deg) rotateZ(180deg);
      filter: brightness(1.2);
    }
    16% { 
      transform: translateY(-120px) rotateX(720deg) rotateY(720deg) rotateZ(360deg);
      filter: brightness(1.4);
    }
    24% { 
      transform: translateY(-160px) rotateX(1080deg) rotateY(1080deg) rotateZ(540deg);
      filter: brightness(1.2);
    }
    32% { 
      transform: translateY(-200px) rotateX(1440deg) rotateY(1440deg) rotateZ(720deg);
      filter: brightness(1);
    }
    40% { 
      transform: translateY(-160px) rotateX(1800deg) rotateY(1800deg) rotateZ(900deg);
      filter: brightness(0.8);
    }
    48% { 
      transform: translateY(-120px) rotateX(2160deg) rotateY(2160deg) rotateZ(1080deg);
      filter: brightness(0.9);
    }
    56% { 
      transform: translateY(-80px) rotateX(2520deg) rotateY(2520deg) rotateZ(1260deg);
      filter: brightness(1);
    }
    64% { 
      transform: translateY(-40px) rotateX(2880deg) rotateY(2880deg) rotateZ(1440deg);
      filter: brightness(1.1);
    }
    72% { 
      transform: translateY(-20px) rotateX(3240deg) rotateY(3240deg) rotateZ(1620deg);
      filter: brightness(1);
    }
    80% { 
      transform: translateY(-10px) rotateX(3600deg) rotateY(3600deg) rotateZ(1800deg);
      filter: brightness(0.9);
    }
    88% { 
      transform: translateY(-4px) rotateX(3960deg) rotateY(3960deg) rotateZ(1980deg);
      filter: brightness(0.95);
    }
    100% { 
      transform: translateY(0) rotateX(4320deg) rotateY(4320deg) rotateZ(2160deg);
      filter: brightness(1);
    }
  }
  
  .coin-svg {
    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
    transform-style: preserve-3d;
    perspective: 1000px;
  }

  .coin-container {
    transform-style: preserve-3d;
    perspective: 1000px;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  .coin-result {
    animation: bounce 0.5s ease-in-out;
  }
`;
document.head.appendChild(style);

// 骰子功能
if (document.getElementById('dice-roller-tool')) {
  const toolDiv = document.getElementById('dice-roller-tool');
  const resultDiv = document.getElementById('dice-roller-result');

  toolDiv.innerHTML = `
    <div class="flex flex-col md:flex-row items-center gap-4">
      <label class="flex items-center gap-2">骰子面数
        <select id="dice-sides" class="bg-white/10 rounded px-2 py-1 w-24 text-center">
          <option value="6">6面</option>
          <option value="4">4面</option>
          <option value="8">8面</option>
          <option value="10">10面</option>
          <option value="12">12面</option>
          <option value="20">20面</option>
        </select>
      </label>
      <button id="dice-roll-btn" class="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition font-semibold">掷骰子</button>
    </div>
  `;
  resultDiv.innerHTML = '<div class="text-center text-2xl text-purple-400 mt-4">请选择面数并点击掷骰子</div>';

  document.getElementById('dice-roll-btn').onclick = function() {
    const sides = parseInt(document.getElementById('dice-sides').value);
    const roll = Math.floor(Math.random() * sides) + 1;
    resultDiv.innerHTML = `<div class="text-center text-5xl font-bold text-purple-300 animate-pulse">${roll}</div><div class="text-center text-lg mt-2">${sides}面骰子</div>`;
  };
}

// 抽签功能
if (document.getElementById('draw-lots-tool')) {
  const toolDiv = document.getElementById('draw-lots-tool');
  const resultDiv = document.getElementById('draw-lots-result');

  toolDiv.innerHTML = `
    <div class="flex flex-col gap-4">
      <textarea id="lots-input" rows="5" placeholder="每行输入一个候选项" class="bg-white/10 rounded px-3 py-2 w-full text-white"></textarea>
      <button id="draw-lots-btn" class="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition font-semibold">抽签</button>
    </div>
  `;
  resultDiv.innerHTML = '<div class="text-center text-2xl text-purple-400 mt-4">输入候选项后点击抽签</div>';

  document.getElementById('draw-lots-btn').onclick = function() {
    const input = document.getElementById('lots-input').value;
    const options = input.split('\n').map(s => s.trim()).filter(Boolean);
    if (options.length < 2) {
      resultDiv.innerHTML = '<div class="text-red-400 text-center mt-4">请至少输入两个候选项</div>';
      return;
    }
    const idx = Math.floor(Math.random() * options.length);
    const chosen = options[idx];
    resultDiv.innerHTML = `<div class="text-center text-4xl font-bold text-purple-300 animate-bounce">${chosen}</div><div class="text-center text-lg mt-2">共${options.length}个候选项</div>`;
  };
} 