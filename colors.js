var rgb = document.querySelector('#rgbcolors');
var colors = document.getElementsByClassName('txtColor');
var message = document.querySelector('#message');
var header = document.querySelector('.header');
var easy = document.querySelector('#easy');
var hard = document.querySelector('#hard');

var newcolors = document.querySelector('#newcolors');
newcolors.addEventListener('click', txtReset);

txtReset();
txtEasy();
txtHard();

function txtEasy() {
	easy.addEventListener('click', function() {
		if (easy) {
			if (colors.length === 3) {
			}else {
				for (var i = colors.length - 1; i >= 3; i--) {
					colors[i].className = 'col-3 m-2 txtNone';
				}
			}
			txtReset();
		}
	});
}

function txtHard() {
	hard.addEventListener('click', function() {
		if (hard) {
			var txtNone = document.querySelectorAll('.txtNone');
			if(txtNone.length === 3) {
				for (var i = 0; i < txtNone.length; i++) {
					txtNone[i].className = 'col-3 m-2 txtColor';
				}				
			}
			txtReset();
		}
	});
}



function txtReset() {
	rgb.textContent = rgbcolors();
	header.style.backgroundColor = '#2692eb';
	var txtradom = Math.floor(Math.random() * (colors.length - 1));
	for (var i = 0; i < colors.length; i++) {
		if (txtradom === i) {
			colors[i].style.backgroundColor = rgb.textContent;
		} else {
		   	colors[i].style.backgroundColor = rgbcolors();
		}

		colors[i].addEventListener('click', function() {

			// Listener click and compare colors
			var clickColor = this.style.backgroundColor;
			if (clickColor === (rgb.textContent).toLowerCase()) {
				message.textContent = 'Correct!';
				header.style.background = rgb.textContent;			
			} else {
				this.style.backgroundColor = "black";
				message.textContent = 'Try againt!';
			}
		});
	}
} 

function rgbcolors() {
	var rgb = 'RGB(' + Math.floor(Math.random() * 266) + ', ' + Math.floor(Math.random() * 266) + ', ' + Math.floor(Math.random() * 266) + ')';
    return rgb;
}
