const header = document.querySelector(".header-bottom");

if (header) {
  const popupMenu = document.querySelector(".popup-menu");
  function checkСoordinatesElem(elem) {
    // запуск функции по движению скролла
    window.addEventListener("scroll", function () {
      // инициализируем координаты окна по Y
      const coordWindow = window.scrollY;
      // если координаты окна больше 80, то добавляем класс, иначе - нет
      if (coordWindow > 101) {
        elem.classList.add("active");
        popupMenu.classList.add("top");
      } else {
        elem.classList.remove("active");
        popupMenu.classList.remove("top");
      }
    });
  }

  checkСoordinatesElem(header);
}