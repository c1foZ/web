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

document.getElementById('getCars').addEventListener('click', getCars);

function getCars() {
	fetch("/cars")
		.then((res) => res.json())
		.then((data) => {
			let output = '<h2>Cars: </h2>';
			data.forEach(function (car) {
				output += `
               <ul>
                  <li>ID: ${car.id}</li>
                  <li>name: ${car.name}</li>
                </ul>
              `;
			});
			document.getElementById('output').innerHTML = output;
		});
}
