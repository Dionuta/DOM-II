// Your code goes here

//clown style 

//things being selected 
const allButtonsOnPage = document.querySelectorAll('.btn');
const allImage = document.querySelectorAll('img');
const body = document.querySelector('body');



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


  //load

  window.addEventListener('load', function(){
      const loader = document.querySelector('.loader'); 
      loader.className += " hidden"
  })

  //keydown and key =up
  window.addEventListener('keydown', checkKeyPress, false);
  console.log('Press: A')
  console.log('Press: B')
  function checkKeyPress(key) {
      if(key.keyCode == '65'){
        allImage[2].setAttribute('src', 'https://cdn.vox-cdn.com/thumbor/-IA4Vhrr5q7FGmmjWW23k1wfU9s=/0x0:1920x1440/1200x800/filters:focal(807x567:1113x873)/cdn.vox-cdn.com/uploads/chorus_image/image/51321121/poltergeist_clown-2040.0.0.jpg')  
      }
      key.stopPropagation;
       window.addEventListener('keyup', checkKeyUp, false);
       function checkKeyUp(key) {
       if(key.keyCode == '66'){
       allImage[3].setAttribute('src', 'https://thumbs.gfycat.com/HeavenlyAdvancedApatosaur-max-1mb.gif')  
    }
  }
}
  


//resize
   window.addEventListener('resize', () => {
    let j =  document.querySelector('h1');
    j.textContent = `Height ${innerHeight}px and Width ${innerWidth}px`
})

//scroll 

window.addEventListener('scroll', () =>{
    let scrollable = document.documentElement.scrollHeight - window.innerHeight;
    let scrolled = window.scrollY;
    if(Math.ceil(scrolled) === scrollable){
        alert('The End Is Here...')
    }
})