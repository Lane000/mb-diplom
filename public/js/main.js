function initMap() {
  var map = new ymaps.Map("map", {
    center: [51.765334, 55.124147], // Координаты центра карты (Москва)
    zoom: 10,
  });

  var placemark = new ymaps.Placemark([51.765334, 55.124147], {
    hintContent: "Мы здесь!",
    balloonContent: "Наш офис находится здесь.",
  });

  map.geoObjects.add(placemark);
}

ymaps.ready(initMap);
initMap();

function openForm(formId) {
  const form = document.getElementById(formId);
  form.style.display = "block";


  form.style.position = "fixed";
  form.style.top = "50%";
  form.style.left = "50%";
  form.style.transform = "translate(-50%, -50%)";


  setTimeout(() => {
    document.addEventListener('click', closeFormOnClickOutside);
  }, 0);
}

function closeForm(formId) {
  const form = document.getElementById(formId);
  form.style.display = "none";
  document.removeEventListener('click', closeFormOnClickOutside);
}

function closeFormOnClickOutside(e) {
  const forms = document.querySelectorAll('.form-popup');

  forms.forEach((form) => {
    if (form.style.display === "block" && !form.contains(e.target) && !e.target.closest('.btn-gast')) {
      form.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Это отменяет отправку формы
    console.log("Форма не отправляется!"); // Можно выводить сообщение в консоль или выполнить другое действие
  });
});




