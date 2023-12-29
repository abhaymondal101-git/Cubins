
const hamImg = document.querySelector(".ham-img");
const bar1 = document.querySelectorAll(".bar:nth-child(1)")[0];
console.log(bar1);
const bar2 = document.querySelectorAll(".bar:nth-child(2)")[0];
const bar3 = document.querySelectorAll(".bar:nth-child(3)")[0];
const navUlitem = document.querySelector(".nav-mobile-lower");
hamImg.addEventListener("click",()=>{
  navUlitem.classList.toggle("translateCss");
});
let val =0;
hamImg.addEventListener("click",()=>{
    if(val==0){
    bar1.style.transform="rotate(45deg) translateY(7px)";
    bar2.style.display="none";
    bar3.style.transform="rotate(-45deg) translateY(-7px)";
    val++;
    }
    else{
        bar1.style.transform="rotate(0deg)";
        bar2.style.display="block";
        bar3.style.transform="rotate(0deg)";
        val--;
    }
});


//==============*** tooltipList area start***=====================
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
//==============*** /tooltipList area end***=====================






