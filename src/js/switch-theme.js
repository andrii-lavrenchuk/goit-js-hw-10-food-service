export const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

export const refs = {
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

refs.checkbox.addEventListener('change', onThemeChange);

function onThemeChange() {
  if (refs.checkbox.checked) {
    localStorage.setItem('theme-color', Theme.DARK);
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  } else {
    localStorage.setItem('theme-color', Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
  }
}
export const currentTheme = localStorage.getItem('theme-color');

function setCurrentTheme() {
  if (currentTheme) {
    refs.body.classList.add(currentTheme);
  }
  if (refs.body.classList.contains(Theme.DARK)) {
    refs.checkbox.checked = true;
  }
}
setCurrentTheme();
