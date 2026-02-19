document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-icon");
    const closeBtn = document.querySelector(".close-menu");
    const categoryNav = document.querySelector(".category-nav");

    menuBtn.addEventListener("click", () => {
        if (window.innerWidth < 1024) {
            categoryNav.classList.add("active");
            document.body.style.overflow = "hidden";
        }
    });

    closeBtn.addEventListener("click", () => {
        categoryNav.classList.remove("active");
        document.body.style.overflow = "";
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 1024) {
            categoryNav.classList.remove("active");
            document.body.style.overflow = "";
        }
    });

    /*USER-MENU*/
    const userMenu = document.querySelector(".user-menu");
    const userDropdown = document.querySelector(".user-dropdown"); 

    userMenu.addEventListener("click", (e) => {
        userDropdown.classList.toggle("active");
    });

    /* BUSCADOR */
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.getElementById('search-input');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            searchInput.classList.toggle('active');
            if (searchInput.classList.contains('active')) {
                searchInput.focus();
            }
        });
    }
});
