const dropDown=document.querySelector(".tech span");

const process=document.querySelector(".process")
const OptIn=document.querySelector(".optIn");
const tech=document.querySelector(".tech-Wrapper");
const footer=document.querySelector(".footer-Container")

const dropdownItems=[process,OptIn,tech,footer];


dropDown.addEventListener("click",()=>{
    for(item of dropdownItems){
            item.classList.toggle("dropdown");
    }
});
