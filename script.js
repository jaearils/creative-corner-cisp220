// DATE STUFF
const currentDate = new Date();

function updateDate(locale) {
    const formattedDate = new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(currentDate);
    const dateElement = document.getElementById("date");
    if (dateElement) {
        dateElement.textContent = formattedDate;
    }
}

    // default (eng)
document.addEventListener("DOMContentLoaded", () => {
    updateDate('en-US');
});

// DARK MODE
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    let btn = document.querySelector(".dark-mode-btn");

    if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "light mode";
    } else {
        btn.textContent = "dark mode";
    }
}