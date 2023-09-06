// setting theme
const setTheme = theme => document.documentElement.className = theme;

document.getElementById('theme-toggle').addEventListener('change', function() {
	setTheme(this.checked ? 'dark' : 'yellow');
});

const menuItems = document.querySelectorAll('#menu-items a');
menuItems.forEach(item => {
	item.addEventListener('click', () => {
    	document.getElementById('menu-toggle').checked = false;
	});
});

