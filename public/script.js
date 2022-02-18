// setting theme
const setTheme = theme => document.documentElement.className = theme;

document.getElementById('theme-select').addEventListener('change', function() {
  setTheme(this.value);
		// if (this.value == "secret"){
		// 	console.log("secret");
		// 	window.location='secret.html';
		// }
});
