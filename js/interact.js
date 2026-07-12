//For Image Interaction
const images = document.querySelectorAll(".kal-Img");
const imageViewer = document.getElementById("kal-Img-Viewer");
const imageToView = document.getElementById("img-ToView");

images.forEach(image => {
    //This retrieves if the object at hand is interacted with
    image.addEventListener("click", ()=>{
        //The event itself will "expand" upon initial requirement
        imageToView.src = image.src;
        imageToView.classList.remove("zoomed");

        imageViewer.classList.add("show");
    });
});

imageViewer.addEventListener("click", (e)=>{
    if(e.target === imageViewer){
        imageViewer.classList.remove("show");
        imageToView.classList.remove("zoomed");
    }
});

imageToView.addEventListener("click", (e)=>{
    e.stopPropagation();
    console.log("Clicked.");
    imageToView.classList.toggle("zoomed");
    console.log(imageToView.classList);
});

document.addEventListener("keydown", (e) => {
    if(e.key === "Escape"){
        imageViewer.classList.remove("show");
        imageToView.classList.remove("zoomed");
    }
});