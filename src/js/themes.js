document.addEventListener("DOMContentLoaded", () => {
  const themeButtons = document.querySelectorAll('.theme[data-theme]');
  const body = document.body;

  function applyTheme(themeName) {
    body.className = body.className
      .split(' ')
      .filter(c => !c.startsWith('theme-'))
      .join(' ')
      .trim();
    body.classList.add(`theme-${themeName}`);
  }

  const savedTheme = localStorage.getItem('preferred-theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  }
  else {
    applyTheme("catppuccin");
  }

  themeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const theme = button.dataset.theme;
      localStorage.setItem('preferred-theme', theme);
      applyTheme(theme);
    });
  });
});
