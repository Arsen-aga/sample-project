const header = document.querySelector(".header");

if (header) {
  function checkСoordinatesElem(elem) {
    // запуск функции по движению скролла
    window.addEventListener("scroll", function () {
      // инициализируем координаты окна по Y
      const coordWindow = window.scrollY;
      // если координаты окна больше 80, то добавляем класс, иначе - нет
      if (coordWindow > 350) {
        elem.classList.add("active");
      } else {
        elem.classList.remove("active");
      }
    });
  }

  checkСoordinatesElem(header);
}