const toggleButton = document.querySelector('#toggle-ideas');
const extraIdeas = document.querySelector('#more-ideas');

// Creates a short-lived floating banner of UX wins on load to grab attention.
function launchIdeaSparkShow() {
  const phrases = ['Flow first', 'Clarity wins', 'Calm UI', 'Focus here'];
  const sparkStage = document.createElement('div');
  sparkStage.className = 'idea-spark-stage';
  document.body.appendChild(sparkStage);

  const sparkCount = 12;
  for (let i = 0; i < sparkCount; i += 1) {
    window.setTimeout(() => {
      const spark = document.createElement('span');
      spark.className = 'idea-spark';
      spark.textContent = phrases[i % phrases.length];
      spark.style.setProperty('--spark-x', `${10 + Math.random() * 80}vw`);
      spark.style.setProperty('--spark-y', `${15 + Math.random() * 60}vh`);
      spark.style.setProperty('--spark-delay', `${Math.random() * 0.4}s`);
      spark.style.setProperty('--spark-hue', `${180 + Math.random() * 60}`);
      sparkStage.appendChild(spark);

      window.setTimeout(() => {
        spark.remove();
      }, 2600);
    }, i * 120);
  }

  window.setTimeout(() => {
    sparkStage.remove();
  }, sparkCount * 120 + 2800);
}

function toggleIdeas() {
  if (!toggleButton || !extraIdeas) {
    return;
  }

  const willShow = extraIdeas.hasAttribute('hidden');
  extraIdeas.toggleAttribute('hidden', !willShow);
  toggleButton.textContent = willShow ? 'Hide extra improvement ideas' : 'Show extra improvement ideas';
}

// For the lint demo described in README, remove the semicolon on the next line to trigger ESLint's `semi` rule.
toggleButton?.addEventListener('click', toggleIdeas);

window.addEventListener('DOMContentLoaded', launchIdeaSparkShow);
