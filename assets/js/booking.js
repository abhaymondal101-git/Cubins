//==============*** What Kind of Junk or Fill Is Going in Your Bin? area start***=====================
const btn = document.querySelector('#bg-01');
const btn2 = document.querySelector('#bg-02');
const btn3 = document.querySelector('#bg-03');

btn.addEventListener('click', function() {
    btn.style.backgroundColor = '#98131a';
    btn.style.color = '#ffffff';
    btn.style.border = "none";

    btn2.style.backgroundColor = '#ffffff';
    btn2.style.color = '#98131a';
    btn2.style.border = "1px solid #98131a";

    btn3.style.backgroundColor = '#ffffff';
    btn3.style.color = '#98131a';
    btn3.style.border = "1px solid #98131a";
});

btn2.addEventListener('click', function() {
    btn2.style.backgroundColor = '#98131a';
    btn2.style.color = '#ffffff';
    btn2.style.border = "none";

    btn.style.backgroundColor = '#ffffff';
    btn.style.color = '#98131a';
    btn.style.border = "1px solid #98131a";

    btn3.style.backgroundColor = '#ffffff';
    btn3.style.color = '#98131a';
    btn3.style.border = "1px solid #98131a";
});

btn3.addEventListener('click', function() {
    btn3.style.backgroundColor = '#98131a';
    btn3.style.color = '#ffffff';
    btn3.style.border = "none";

    btn2.style.backgroundColor = '#ffffff';
    btn2.style.color = '#98131a';
    btn2.style.border = "1px solid #98131a";

    btn.style.backgroundColor = '#ffffff';
    btn.style.color = '#98131a';
    btn.style.border = "1px solid #98131a";
});
//==============*** /What Kind of Junk or Fill Is Going in Your Bin? area end***=====================


const cityName = document.querySelector('.city-name');
const cityName1 = document.querySelectorAll('.abc');
cityName.addEventListener("change",(e)=>{
    console.log(e.target.value);
    if(e.target.value == "Ariss" || e.target.value == "Arthur" || e.target.value == "Baden" || e.target.value == "Burford" || e.target.value == "Corwhin" || e.target.value == "Elora"){
        cityName1.forEach(item=>{
            item.style.display="block";
        })
    }
})

const moreInfo = document.querySelector('.more-info');
const moreInfo1 = document.querySelector('.more-info-101');
const moreInfo2 = document.querySelector('.more-info-102');
const moreInfo3 = document.querySelector('.more-info-103');
const moreInfo4 = document.querySelector('.more-info-104');
const moreInfo5 = document.querySelector('.more-info-105');
moreInfo.addEventListener("change",(e)=>{
    console.log(e.target.value);
    if(e.target.value == "Single Driveway"){
        moreInfo1.style.display="block";
        moreInfo2.style.display="none";
        moreInfo3.style.display="none";
        moreInfo4.style.display="none";
        moreInfo5.style.display="none";
    }
    if(e.target.value == "Double Driveway"){
        moreInfo1.style.display="none";
        moreInfo2.style.display="block";
        moreInfo3.style.display="none";
        moreInfo4.style.display="none";
        moreInfo5.style.display="none";
    }
    if(e.target.value == "Parking Lot"){
        moreInfo1.style.display="none";
        moreInfo2.style.display="none";
        moreInfo3.style.display="block";
        moreInfo4.style.display="none";
        moreInfo5.style.display="none";
    }
    if(e.target.value == "Street"){
        moreInfo1.style.display="none";
        moreInfo2.style.display="none";
        moreInfo3.style.display="none";
        moreInfo4.style.display="block";
        moreInfo5.style.display="none";
    }
    if(e.target.value == "Other"){
        moreInfo1.style.display="none";
        moreInfo2.style.display="none";
        moreInfo3.style.display="none";
        moreInfo4.style.display="none";
        moreInfo5.style.display="block";
    }
})