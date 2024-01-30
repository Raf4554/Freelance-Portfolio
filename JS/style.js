const btnDarkMode = document.querySelector(".dark-mode-btn");

//1.
if(window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches ) {
    btnDarkMode.classList.add("dark-mode-btn--active")
    document.body.classList.add("dark");
}

//2
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active")
    document.body.classList.add("dark");
}

// ===================click========================
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
      localStorage.setItem('darkMode' , 'dark')
    }
    else {
        localStorage.setItem('darkMode' , 'light')
    }
}
// ===================click========================

