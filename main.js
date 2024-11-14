// Language translations
import confetti from 'canvas-confetti';
const translations = {
  en: {
    title: "Discover Your Destiny",
    subtitle: "Ancient wisdom meets modern technology. Our oracle combines Eastern mysticism, Western astrology, and advanced algorithms to guide your path.",
    placeholder: "Ask your question...",
    button: "Consult the Oracle",
  },
  zh: {
    title: "探索你的命运",
    subtitle: "古老智慧与现代科技的完美结合。我们的神谕系统融合东方玄学、西方占星术和先进算法，为您指明方向。",
    placeholder: "请输入您的问题...",
    button: "咨询神谕",
  },
  es: {
    title: "Descubre Tu Destino",
    subtitle: "La sabiduría antigua se encuentra con la tecnología moderna. Nuestro oráculo combina el misticismo oriental, la astrología occidental y algoritmos avanzados para guiar tu camino.",
    placeholder: "Haz tu pregunta...",
    button: "Consulta al Oráculo",
  }
};

// Oracle logic
function getOracleAnswer() {
  const mysticalFactors = {
    time: new Date().getTime(),
    moonPhase: Math.sin(new Date().getDate() / 30 * Math.PI),
    cosmicEnergy: Math.random(),
  };
  
  const combinedEnergy = Object.values(mysticalFactors).reduce((a, b) => a + b, 0);
  return combinedEnergy % 1 > 0.5 ? "Oracle Yes" : "Oracle No";
}

// DOM Elements
const questionInput = document.getElementById('question');
const oracleButton = document.getElementById('oracle-button');
const answerDiv = document.getElementById('answer');
const languageSelect = document.getElementById('language-select');

// Event Listeners
oracleButton.addEventListener('click', () => {
  if (!questionInput.value.trim()) return;
  
  answerDiv.classList.remove('hidden');
  answerDiv.textContent = '';
  
  // Dramatic reveal
  setTimeout(() => {
    const answer = getOracleAnswer();
    answerDiv.textContent = answer;
    
    // Add a class for styling the answer
    answerDiv.classList.add('animate-fade-in', answer === "Oracle Yes" ? 'text-green-500' : 'text-red-500');
    
    // 撒花特效
    if (answer === "Oracle Yes") {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
    // Clear the answer after a few seconds
    setTimeout(() => {
      answerDiv.textContent = '';
      answerDiv.classList.remove('animate-fade-in', 'text-green-500', 'text-red-500');
    }, 3000); // Clear after 3 seconds
  }, 1000);
});
// Language switching
languageSelect.addEventListener('change', (e) => {
  const lang = e.target.value;
  const t = translations[lang];
  
  // Update content
  document.querySelector('h1').textContent = t.title;
  document.querySelector('p').textContent = t.subtitle;
  questionInput.placeholder = t.placeholder;
  oracleButton.textContent = t.button;
});