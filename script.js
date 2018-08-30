const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button").children[0];
menu.classList.add("menu-transition");
console.log(menuButton);

const toggleMenu = () => {
  if (menu.classList.contains("menu-closed")) {
    menu.classList.remove("menu-closed");
    menuButton.src = "./assets/burger-close.svg";
  } else {
    menu.classList.add("menu-closed");
    menuButton.src = "./assets/burger.svg";
  }
};

// setInterval(toggleMenu, 1000);

// console.log(menu);
