// setting theme
const setTheme = theme => document.documentElement.className = theme;

document.getElementById('theme-toggle').addEventListener('change', function() {
  setTheme(this.checked ? 'dark' : 'yellow');
});

