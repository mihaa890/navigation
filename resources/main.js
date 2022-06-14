document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.getElementsByClassName("menu-item");

    for (let i = 0; i < menuItems.length; i++) {
        const menuItem = menuItems[i];

        menuItem.addEventListener("click", function () {
            for (let j = 0; j < menuItems.length; j++) {
                menuItems[j].classList.remove("selected");
            }
            this.classList.add("selected");
            // ced ca aici ai adaugat de 2 ori din greseala, nu impacteaza grav performanta dar e important pt clean code
            this.classList.add("selected");

            const dataContent = this.dataset.content;
            const dataLogo = this.dataset.logo;

            const contentElements = document.getElementsByClassName("content");
            for (let k = 0; k < contentElements.length; k++) {
                contentElements[k].classList.add("hidden");
            }
            changeTheLogo(dataLogo);
            document.getElementById(dataContent).classList.remove("hidden");
        });
    }
});

changeTheLogo = (logoType) => {
    const logo = document.getElementById("logo");
    logo.src = `../assets/logo-${logoType}.png`
}