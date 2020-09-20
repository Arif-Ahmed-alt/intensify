
let bar=document.querySelector(".fa-bars");
let slide=document.querySelector(".slide");
let remove=document.querySelector(".fa-times");

bar.addEventListener("click",function(){
    if(slide.classList.contains('show')==false){
        slide.classList="slide show"
    }
    remove.style.display="inline-block"
    document.querySelector("ul").style.display="block"
   
});

remove.addEventListener("click",function(){
    slide.classList="slide hide"
})


