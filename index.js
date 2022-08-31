// const rocket1 = document.getElementById('rocket1')
// const rocket2 = document.getElementById('rocket2')
// const ship1 = document.getElementById('ship1')
// const ship2 = document.getElementById('ship2')

// const ship1FromBottom = 10
// const ship2FromBottom = 10
// const rocket1FromBottom = 40
// const rocket2FromBottom = 40

// ship1.style.bottom = ship1FromBottom + '%'
// ship2.style.bottom = ship2FromBottom + '%'
// rocket1.style.bottom = rocket1FromBottom + '%'
// rocket2.style.bottom = rocket2FromBottom + '%'

// function move() {
//     const count = window.scrollY
//     ship1.style.bottom = ship1FromBottom + count * 0.05 + '%'
//     ship2.style.bottom = ship2FromBottom + count * 0.05 + '%'
//     rocket1.style.bottom = rocket1FromBottom + count * 0.05 + '%'
//     rocket2.style.bottom = rocket2FromBottom + count * 0.05 + '%'
// }

// window.addEventListener('scroll', move)



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}