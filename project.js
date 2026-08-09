

let slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide() {
    current++;

    if (current >= slides.length) {
        current = 0;
    }

    showSlide(current);
}

function prevSlide() {
    current--;

    if (current < 0) {
        current = slides.length - 1;
    }

    showSlide(current);
}


// Box Slider 1

const images = document.querySelectorAll(".box-img");
let currentBox = 0;

function nextImg() {
    images[currentBox].classList.remove("active");
    currentBox++;

    if (currentBox >= images.length) {
        currentBox = 0;
    }
    images[currentBox].classList.add("active");
}

function prevImg() {
    images[currentBox].classList.remove("active");
    currentBox--;

    if (currentBox < 0) {
        currentBox = images.length - 1;
    }
    images[currentBox].classList.add("active");
}

// Box Slider 2

let images2 = document.querySelectorAll(".box2 .box-img2");
let current2 = 0;

function showImg2(index){
    images2.forEach((img)=>{
        img.classList.remove("active");
    });

    images2[index].classList.add("active");
}

function nextImg2(){
    current2++;

    if(current2 >= images2.length){
        current2 = 0;
    }

    showImg2(current2);
}

function prevImg2(){
    current2--;

    if(current2 < 0){
        current2 = images2.length - 1;
    }
    showImg2(current2);
}

// Box Slider 3

let images3 = document.querySelectorAll(".box3 .box-img3"); 
let current3 = 0;

function showImg3(index){
    images3.forEach((img)=>{
        img.classList.remove("active");
    });

    images3[index].classList.add("active");
}

function nextImg3(){
    current3++;

    if(current3 >= images3.length){
        current3 = 0;
    }

    showImg3(current3);
}

function prevImg3(){
    current3--;

    if(current3 < 0){
        current3 = images3.length - 1;
    }

    showImg3(current3);
}
// Box Slider 4

let images4 = document.querySelectorAll(".box4 .box-img4"); 
let current4 = 0;

function showImg4(index){
    images4.forEach((img)=>{
        img.classList.remove("active");
    });

    images4[index].classList.add("active");
}

function nextImg4(){
    current4++;

    if(current4 >= images4.length){
        current4 = 0;
    }

    showImg4(current4);
}

function prevImg4(){
    current4--;

    if(current4 < 0){
        current4 = images4.length - 1;
    }

    showImg4(current4);
}
// Box Slider 5

let images5 = document.querySelectorAll(".box5 .box-img5"); 
let current5 = 0;

function showImg5(index){
    images5.forEach((img)=>{
        img.classList.remove("active");
    });

    images5[index].classList.add("active");
}

function nextImg5(){
    current5++;

    if(current5 >= images5.length){
        current5 = 0;
    }

    showImg5(current5);
}

function prevImg5(){
    current5--;

    if(current5 < 0){
        current5 = images5.length - 1;
    }

    showImg5(current5);
}
// Box Slider 6

let images6 = document.querySelectorAll(".box6 .box-img6"); 
let current6 = 0;

function showImg6(index){
    images6.forEach((img)=>{
        img.classList.remove("active");
    });

    images6[index].classList.add("active");
}

function nextImg6(){
    current6++;

    if(current5 >= images6.length){
        current5 = 0;
    }

    showImg6(current6);
}

function prevImg6(){
    current6--;

    if(current6 < 0){
        current6 = images6.length - 1;
    }

    showImg6(current6);
}
// Box Slider 8

    let images8 = document.querySelectorAll(".box8 .box-img8");
    let current8 = 0;

    function showImg8(index) {
        images8.forEach(img => {
            img.classList.remove("active");
        });

        images8[index].classList.add("active");
    }

    window.nextImg8 = function () {
        current8++;

        if (current8 >= images8.length) {
            current8 = 0;
        }

        showImg8(current8);
    };

    window.prevImg8 = function () {
        current8--;

        if (current8 < 0) {
            current8 = images8.length - 1;
        }

        showImg8(current8);
    };
    // Box Slider 9

    let images9 = document.querySelectorAll(".box9 .box-img9");
let current9 = 0;

function showImg9(index){
    images9.forEach(img => {
        img.classList.remove("active");
    });

    images9[index].classList.add("active");
}

function nextImg9(){
    current9++;

    if(current9 >= images9.length){
        current9 = 0;
    }

    showImg9(current9);
}

function prevImg9(){
    current9--;

    if(current9 < 0){
        current9 = images9.length - 1;
    }

    showImg9(current9);
}

// Box Slider 10

let images10 = document.querySelectorAll(".box10 .box-img10");
let current10 = 0;

function showImg10(index){
    images10.forEach(img => {
        img.classList.remove("active");
    });

    images10[index].classList.add("active");
}

function nextImg10(){
    current10++;

    if(current10 >= images10.length){
        current10 = 0;
    }

    showImg10(current10);
}

function prevImg10(){
    current10--;

    if(current10 < 0){
        current10 = images10.length - 1;
    }

    showImg10(current10);
}
