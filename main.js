function toggleleftsidebar(){
    document.getElementById('leftSidebar').classList.toggle('active');
}

window.addEventListener("load", ()=>{
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend",()=>{
        document.body.removeChild("loader");
    })
})


//MUSTAFA ÖZVARDAR 2020507053