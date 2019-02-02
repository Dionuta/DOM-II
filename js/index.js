// Your code goes here

//mouseover
let homeContainer = document.querySelector('.text-content');

homeContainer.addEventListener("mouseover", ( event ) => {  
    event.target.style.color= "orange";
});

homeContainer.addEventListener("mouseout", ( event ) => {  
    event.target.style.color = "black";
});


//keydown