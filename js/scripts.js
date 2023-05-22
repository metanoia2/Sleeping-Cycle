/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 
function add_to_table(hour, minute, period, i) {
	var table = document.getElementById("times");
	var row = table.insertRow();
	var cell = row.insertCell(0);
	var text1 = hour + ":" + ("00" + minute).slice(-2) + " " + period;
	if (i + 1 == 6) {
		text1 += " (suggested)";
		cell.style.backgroundColor = "gold";
	}
	var text2 = (i + 1) * 1.5 + " hrs of sleep";
	var text3 = (i + 1) + " sleep cycles";
	cell.innerHTML = text1 + "<br><div class='small_text'>" + text2 + ', ' + text3 + "</div>";
}

function calculate() {
	var hour = parseInt(document.getElementById("hour").value);
	var minute = parseInt(document.getElementById("minute").value);
	var period = document.getElementById("period").value;

	if (isNaN(hour) || isNaN(minute) || period == "") {
		document.getElementById("instruction").innerHTML = "Please fill in all values";
		return;
	}

	document.getElementById("times").innerHTML = "";


	if (document.getElementById("choice").value == "I want to wake up at:") {
		document.getElementById("instruction").innerHTML = "Go to sleep at one of these times:";

		for (var i = 0; i < 16; i++) {
			var pastHour = hour

			if (minute < 30) {
				hour -= 2;
				minute += 30
			} else {
				hour -= 1;
				minute -= 30;
			}

			if (hour < 1 && pastHour > 0) {
				period = (period == "AM") ? "PM" : "AM";
			}

			if (hour < 1) {
				hour += 12;
			}

			add_to_table(hour, minute, period, i);
		}
	} else {
		document.getElementById("instruction").innerHTML = "Set your alarm to one of these times:";

		for (var i = 0; i < 16; i++) {
			var pastHour = hour;

			if (minute < 30) {
				hour += 1;
				minute += 30;
			} else {
				hour += 2;
				minute -= 30
			}

			if (hour > 11 && pastHour < 12) {
				period = (period == "AM") ? "PM" : "AM";
			}

			if (hour > 12) {
				hour -= 12;
			}

			add_to_table(hour, minute, period, i);
		}
	}
}

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
function add_to_table(hour, minute, period, i) {
	var table = document.getElementById("times");
	var row = table.insertRow();
	var cell = row.insertCell(0);
	var text1 = hour + ":" + ("00" + minute).slice(-2) + " " + period;
	if (i + 1 == 6) {
		text1 += " (suggested)";
		cell.style.backgroundColor = "gold";
	}
	var text2 = (i + 1) * 1.5 + " hrs of sleep";
	var text3 = (i + 1) + " sleep cycles";
	cell.innerHTML = text1 + "<br><div class='small_text'>" + text2 + ', ' + text3 + "</div>";
}

