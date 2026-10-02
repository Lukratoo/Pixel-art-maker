const grade = document.querySelector(".grade");
const cor = document.querySelector(".cor");
const borracha = document.querySelector(".borracha");

for(let i = 0; i < 100; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.addEventListener("click", function(){
    pixel.style.backgroundColor= cor.value;
    });
    grade.appendChild(pixel);

};

function limparGrade(){
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(function(pixel) {
        pixel.style.backgroundColor = "#edf1f0";

    });

};
borracha.addEventListener("click", limparGrade);