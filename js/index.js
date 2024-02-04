document.addEventListener("DOMContentLoaded", function () {

	const dropdown = document.getElementById("countryDropdown");
	const selectedOption = dropdown.querySelector(".modal-selected-option");
	const optionsList = dropdown.querySelector(".modal-options-list");

	selectedOption.addEventListener("click", function () {
		optionsList.style.display = optionsList.style.display === "block" ? "none" : "block";
	});

	optionsList.addEventListener("click", function (e) {
		if (e.target.tagName === "LI") {
			let selectedValue = e.target.getAttribute("data-value");
			selectedOption.textContent = e.target.textContent;
			optionsList.style.display = "none";
			// Обновление значения телефона
			updatePhoneNumber(selectedValue);
		}
	});

	function updatePhoneNumber(value) {
		// Логика обновления значения телефона (если требуется)
		console.log("Выбран код страны: " + value);
	}

	document.addEventListener("click", function (e) {
		if (!dropdown.contains(e.target)) {
			optionsList.style.display = "none";
		}
	});

	// Открытие и закрытие модального окна

	const promoBtn = document.querySelector('.promo-btn');
	const layer = document.querySelector('.layer');
	const btnExit = document.querySelector('.modal-button-exit');
	const body = document.body;

	promoBtn.addEventListener('click', function () {
		openModal();
	});

	btnExit.addEventListener('click', function () {
		closeModal();
	});

	function openModal() {
		layer.classList.add('layer-open');
		body.style.overflow = 'hidden';
	}

	function closeModal() {
		layer.classList.remove('layer-open');
		body.style.overflow = '';
	}

	/* 	setTimeout(function () {
			openModal();
		}, 7000);
	 */
});

$(document).ready(function () {
	$('.reasons-inner-carousel').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><img class="slick-arrow-img" src="../resources/icons/prev-slick.png" alt="button prev slider" /></button>',
		nextArrow: '<button type="button" class="slick-next"><img class="slick-arrow-img" src="../resources/icons/next-slick.png" alt="button next slider" /></button>'
	});
});


