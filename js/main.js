

var swiper = new Swiper(".mySwiper", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
    },
    navigation: {
        nextEl: ".sw-next",
        prevEl: ".sw-back",
    },
});

let clickBtn = false
let hoverMouse = false
const btnForShowFooter = document.getElementById('footer-show-btn')
const nonameClass = document.getElementsByClassName("First-diamond-footer")[0]
const nonameClassTwo = document.getElementsByClassName("Secend-diamond-footer")[0]
const containerSection = document.querySelectorAll('.container-section')
const miniContainerSection = document.querySelectorAll('.mini-container-section')


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function ConvertBigContainerSection() {
    sleep(200, this, ConvertMedContainerSection).then(() => {
        if(this.matches(':hover') === true) {
            this.classList.add("container-section-big")
        }
    })

}

function ConvertMedContainerSection() {
    sleep(100, this, ConvertMedContainerSection).then(() => {
        this.classList.remove("container-section-big")
    })
}

function ShowDiamond() {
    if (clickBtn == false) {
        clickBtn = true
        sleep(100).then(() => {
            nonameClass.classList.add("First-diamond-footer-show")
        })
        sleep(250).then(() => {
            nonameClassTwo.classList.add("Secend-diamond-footer-show")
        })
    } else {
        clickBtn = false
        sleep(100).then(() => {
            nonameClassTwo.classList.remove("Secend-diamond-footer-show")
        })
        sleep(250).then(() => {
            nonameClass.classList.remove("First-diamond-footer-show")
        })
    }
}


btnForShowFooter.addEventListener('click', ShowDiamond)

for (i = 0; i < containerSection.length; i++) {
    containerSection[i].addEventListener('mouseover', ConvertBigContainerSection)
    containerSection[i].addEventListener('mouseout', ConvertMedContainerSection)
}
for(i = 0; i<miniContainerSection.length; i++){
    miniContainerSection[i].addEventListener('mouseover', ConvertBigContainerSection)
    miniContainerSection[i].addEventListener('mouseout', ConvertMedContainerSection)
}