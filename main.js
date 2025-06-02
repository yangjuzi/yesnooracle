// Language translations
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
if (oracleButton) {
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
      if (answer === "Oracle Yes" && window.confetti) {
        window.confetti({
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
}

// Language switching
if (languageSelect) {
  languageSelect.addEventListener('change', (e) => {
    const lang = e.target.value;
    const t = translations[lang];
    
    // Update content
    const titleElement = document.querySelector('h1');
    const subtitleElement = document.querySelector('p');
    
    if (titleElement) titleElement.textContent = t.title;
    if (subtitleElement) subtitleElement.textContent = t.subtitle;
    if (questionInput) questionInput.placeholder = t.placeholder;
    if (oracleButton) oracleButton.textContent = t.button;
  });
}

// Blog detail page handling
if (window.location.pathname.includes('blog-detail.html')) {
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get('id');
  
  // Mock blog data - in a real application, this would come from a database or API
  const blogPosts = {
    '1': {
      title: 'Understanding the Power of Yes/No Questions',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: 'https://source.unsplash.com/random/1200x800?mystic',
      content: `
        <p class="text-lg mb-6">
          In the realm of decision-making and personal growth, the power of yes/no questions often goes underestimated. These seemingly simple queries can unlock profound insights and guide us toward better choices in life.
        </p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">The Simplicity of Yes/No Questions</h2>
        <p class="text-lg mb-6">
          Yes/no questions force us to make clear decisions and avoid the gray areas that often cloud our judgment. When we're faced with a binary choice, we're compelled to examine our true feelings and intentions more deeply.
        </p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">The Power of Clarity</h2>
        <p class="text-lg mb-6">
          By breaking down complex decisions into simple yes/no questions, we can gain clarity and confidence in our choices. This approach helps us cut through the noise and focus on what truly matters.
        </p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">Practical Applications</h2>
        <p class="text-lg mb-6">
          Whether you're making career decisions, relationship choices, or personal growth commitments, yes/no questions can serve as powerful tools for self-discovery and decision-making.
        </p>
        
        <div class="bg-white/5 p-6 rounded-lg my-8">
          <h3 class="text-xl font-semibold mb-4">Key Takeaways</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>Yes/no questions promote clarity and decisiveness</li>
            <li>They help us avoid analysis paralysis</li>
            <li>They can reveal our true intentions</li>
            <li>They're powerful tools for personal growth</li>
          </ul>
        </div>
      `
    },
    '2': {
      title: 'The Art of Divination: A Modern Perspective',
      date: 'March 10, 2024',
      readTime: '7 min read',
      image: 'https://source.unsplash.com/random/1200x800?spiritual',
      content: `
        <p class="text-lg mb-6">
          Divination has been practiced for thousands of years across different cultures. In this modern age, we're rediscovering its value as a tool for self-reflection and guidance.
        </p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">Ancient Wisdom in Modern Times</h2>
        <p class="text-lg mb-6">
          The principles of divination remain relevant today, offering us a way to tap into our intuition and gain insights into our lives.
        </p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">The Science Behind Divination</h2>
        <p class="text-lg mb-6">
          Modern psychology and neuroscience are beginning to understand how divination practices can help us access deeper levels of consciousness and decision-making.
        </p>
        
        <div class="bg-white/5 p-6 rounded-lg my-8">
          <h3 class="text-xl font-semibold mb-4">Key Insights</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>Divination as a tool for self-reflection</li>
            <li>Bridging ancient wisdom with modern understanding</li>
            <li>The role of intuition in decision-making</li>
            <li>Practical applications in daily life</li>
          </ul>
        </div>
      `
    },
    '3': {
      title: 'Finding Clarity Through Oracle Guidance',
      date: 'March 5, 2024',
      readTime: '6 min read',
      image: 'https://source.unsplash.com/random/1200x800?meditation',
      content: `
        <p class="text-lg mb-6">
          Oracle guidance can be a powerful tool for finding clarity in life's most challenging decisions. This article explores how to use oracle guidance effectively.
        </p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">The Role of Oracle Guidance</h2>
        <p class="text-lg mb-6">
          Oracle guidance serves as a mirror, reflecting our inner wisdom and helping us see situations from new perspectives.
        </p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">Practical Applications</h2>
        <p class="text-lg mb-6">
          Learn how to incorporate oracle guidance into your daily decision-making process and personal growth journey.
        </p>
        
        <div class="bg-white/5 p-6 rounded-lg my-8">
          <h3 class="text-xl font-semibold mb-4">Key Benefits</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>Enhanced self-awareness</li>
            <li>Clearer decision-making</li>
            <li>Deeper personal insights</li>
            <li>Greater confidence in choices</li>
          </ul>
        </div>
      `
    }
  };

  // Update page content based on blog ID
  if (blogId && blogPosts[blogId]) {
    const post = blogPosts[blogId];
    document.title = `${post.title} - Yes No Oracle`;
    document.querySelector('h1').textContent = post.title;
    document.querySelector('.flex.items-center.text-gray-400').innerHTML = `
      <span>${post.date}</span>
      <span class="mx-2">•</span>
      <span>${post.readTime}</span>
    `;
    document.querySelector('img').src = post.image;
    document.querySelector('.prose').innerHTML = post.content;
  } else {
    // Handle invalid blog ID
    window.location.href = '/blog.html';
  }
}