const ToggleButton=document.getElementsByClassName("Toggle-Button")[0];
const popDownList=document.getElementsByClassName("NavItems")[0];

ToggleButton.addEventListener(onclick,()=>{
    popDownList.classList.toggle('active')
    console.log("clicked")
})
