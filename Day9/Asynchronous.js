let heading=document.querySelector("h1");
heading.addEventListener("click",()=>{

    setInterval(() => {
        let randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                               ${Math.floor(Math.random() * 256)}, 
                               ${Math.floor(Math.random() * 256)})`;
        heading.style.color = randomColor;
    }, 2000); 
});