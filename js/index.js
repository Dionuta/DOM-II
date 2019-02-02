// Your code goes here

//clown style 

//things being selected 
const allButtonsOnPage = document.querySelectorAll('.btn');
const allImage = document.querySelectorAll('img');
const body = document.querySelector('body');


console.log(body);

//click


for (let i = 0; i < allButtonsOnPage.length; i++) {  //loops every button on page and on click adds background color red 
  allButtonsOnPage[i].addEventListener('click', event => {
    event.target.style.backgroundColor = 'red';
  });
}

//dblclick

for (let i = 0; i < allButtonsOnPage.length; i++) {  
    allButtonsOnPage[i].addEventListener('dblclick', event => {  //loops every button on page and on double click adds background color rebeccapurple
      event.target.style.backgroundColor = 'rebeccapurple';
    });
  }

  //mouseenter
 
    allImage[1].addEventListener('mouseenter', event => {  //loops every img on page and on mouse enter adds image
      event.target.setAttribute('src', 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80');
    });


  //mouseout 
    allImage[1].addEventListener('mouseleave', event => {  
      event.target.setAttribute('src', 'https://i.kym-cdn.com/entries/icons/original/000/000/091/TrollFace.jpg');
    });


 //mousedown


 function getRandomColor() {  //random color
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  body.addEventListener('mousedown' , event => {
     event.target.style.backgroundColor = getRandomColor();
  })