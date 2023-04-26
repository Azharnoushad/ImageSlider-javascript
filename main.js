// DOM ELEMENTS

const sliderEl=document.getElementById("slider")
const slidesEl=document.querySelectorAll(".slide")
const prevBtnEl=document.querySelector(".prevButton")
const nextBtnEl=document.querySelector(".nextButton")
const navigationEl=document.querySelector(".navigation")





let slideCount=slidesEl.length;
let activeSlide=0;
slidesEl[activeSlide].classList.add("active")

// NAVIGATION RADIO BUTTON---------------------------------

for(let i = 0 ; i < slideCount;i++){
    let bullet=`<input class="bullet" type="radio" name="nav" data-id=${i}>`
    navigationEl.innerHTML+=bullet
}

const bulletEl=document.querySelectorAll(".bullet")
bulletEl[activeSlide].checked=true

// bullet add event-----------------------------
const bulletImage = (event) =>{
    removeActiveClass()
    activeSlide=event.target.dataset.id
    slidesEl[activeSlide].classList.add("active")

}


bulletEl.forEach((bullet)=>{
    bullet.addEventListener("change",bulletImage)
})











// FUNCTION BODY----------------------------------
const removeActiveClass= () =>{
    slidesEl[activeSlide].classList.remove("active")
}

const changeImage = () =>{
    removeActiveClass()
    activeSlide++
    if(activeSlide > slideCount -1){
        activeSlide=0
    }
    bulletEl[activeSlide].checked=true
    slidesEl[activeSlide].classList.add("active")
}


const imageChange= () =>{
    removeActiveClass()
    activeSlide--
    if(activeSlide <0){
        activeSlide=slideCount-1
    }
    bulletEl[activeSlide].checked=true
    slidesEl[activeSlide].classList.add("active")
}














// ADD EVENT LISTENERS-----------------------
nextBtnEl.addEventListener("click",changeImage)
prevBtnEl.addEventListener("click",imageChange)
bulletEl.a
