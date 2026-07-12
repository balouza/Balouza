// تغيير لون شريط التنقل عند النزول

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.1)";

    } else {

        header.style.background = "#ffffffee";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";

    }

});

// ظهور العناصر عند التمرير

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section, .card").forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});

// زر العودة للأعلى

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.classList.add("active");

    } else {

        topBtn.classList.remove("active");

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};