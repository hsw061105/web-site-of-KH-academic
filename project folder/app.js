const ham = document.getElementById("ham")
const button = document.getElementById("hamham")

const span1 = document.getElementById("span1")
const span2 = document.getElementById("span2")
const span3 = document.getElementById("span3")


let isOpen = false

function hamopen(){

    if(isOpen) {
        ham.style.left = '-350px';
        span1.style.animation = 'topbarclose 0.75s forwards'
        span2.style.animation = 'middlebarclose 0.75s forwards'
        span3.style.animation = 'bottombarclose 0.75s forwards'
        isOpen = false
    } else {
        ham.style.left = '0px';
        span1.style.animation = 'topbar 0.75s forwards'
        span2.style.animation = 'middlebar 0.75s forwards'
        span3.style.animation = 'bottombar 0.75s forwards'
        isOpen = true
    }
}
function hamopened(){
    if(isOpen == true){
        button.style.animation = 'bottombar 0.75s forwards'
    }


}

button.addEventListener('click',hamopen);





const two = document.getElementById("two")
let slideWidth = two.clientWidth;

const left = document.getElementById("left")
const right = document.getElementById("right")

let slideItems = document.querySelectorAll('.slide_items')

let currentpage = 0

function rightmove(){
    currentpage++

    let offset = slideWidth * currentpage
    slideItems.forEach((item) => {
        item.setAttribute("style", `left: ${-offset}px`);
    })
}

function leftmove(){
    currentpage--

    let offset = slideWidth * currentpage

    slideItems.forEach((item) => {
        item.setAttribute("style", `left: ${-offset}px`);
    })
}

const startslide = slideItems[0]
const endslide = slideItems[2]
const startElement = document.createElement('img')
const endElement = document.createElement('img')


right.addEventListener('click', rightmove)
left.addEventListener('click',leftmove)
