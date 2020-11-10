const name = document.getElementById('name');
console.log(name);
document.addEventListener('DOMContentLoaded', (event) => {
	document.querySelector('button').onclick = function (e) {
		e.preventDefault();
		var inputVal = document.getElementById('name').value;
		document.getElementById('name1').innerHTML = inputVal;
		var inputVal = document.getElementById('password').value;
		document.getElementById('pass').innerHTML = inputVal;
	};
});
