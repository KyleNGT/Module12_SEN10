const toggleButton = document.querySelector('#toggle-ideas');
const extraIdeas = document.querySelector('#more-ideas');

function toggleIdeas() {
  if (!toggleButton || !extraIdeas) {
    return;
  }

  const willShow = extraIdeas.hasAttribute('hidden');
  extraIdeas.toggleAttribute('hidden', !willShow);
  toggleButton.textContent = willShow ? 'Hide extra improvement ideas' : 'Show extra improvement ideas';
}

// For the lint demo described in README, remove the semicolon on the next line to trigger ESLint's `semi` rule.
toggleButton?.addEventListener('click', toggleIdeas)
