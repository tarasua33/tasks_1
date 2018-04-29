var content = document.querySelector(".content"),
    overlay = document.querySelector(".overlay"),
    close = document.querySelector(".overlay-close"),
    pictures = document.querySelector(".overlay-img-pic")
;

clickPic();


function clickPic() {
    content.addEventListener("click", function (e) {
        if (e.target.tagName === "IMG" || e.target.classList.contains("triangle")) {
            overlay.style.display = "block";
            content.style.display = "none";
            if (e.target.classList.contains("circle")) {
                pictures.setAttribute("src", "img/new-zealand-circleFull.jpg");
            } else if (e.target.classList.contains("rect")) {
                pictures.setAttribute("src", "img/new-zealand-rectFull.jpg");
            } else if (e.target.classList.contains("square")) {
                pictures.setAttribute("src", "img/new-zealand-squareFull.jpg");
            } else if (e.target.classList.contains("triangle")) {
                pictures.setAttribute("src", "img/new-zealand-triangleFull.jpg");
            }
        }
    });
    close.addEventListener("click", function (e) {
        content.style.display = "block";
        overlay.style.display = "none";
    });
};