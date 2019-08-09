// /* If You've gotten this far, you're on your own! Although we will give you some hints:
//     1. You will need to write a function that creates the carousel component, you will find the HTML below.
//     2. You will need to grab a reference to all of the images
//     3. Create a current index
//     4. Those buttons are gonna need some click handlers.
//     5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
//     6. Have fun!
// */

// /* HTML:
//   <div class="carousel">
//     <div class="left-button"> < </div>
//     <img src="./assets/carousel/mountains.jpeg" />
//     <img src="./assets/carousel/computer.jpeg" />
//     <img src="./assets/carousel/trees.jpeg" />
//     <img src="./assets/carousel/turntable.jpeg" />
//     <div class="right-button"> > </div>
//   </div>
// */


// let pictureIndex = {
//   url1: "/assets/carousel/computer.jpeg",
//   url2: "/assets/carousel/trees.jpeg",
//   url3: "/assets/carousel/turntable.jpeg",
//   url4: "/assets/carousel/mountains.jpeg"
// }
// let url1 = pictureIndex.url1;
// let url2 = pictureIndex.url2;
// let url3 = pictureIndex.url3;
// let url4 = pictureIndex.url4;
// let carouselContainer = document.querySelector(".carousel-container")

//     carouselContainer.appendChild(makeCarousel(url1, url2, url3, url4));
  





// function makeCarousel(url1, url2, url3, url4){
// let carousel = document.createElement('div');
//   let leftButton = document.createElement('div');
//   let image1 = document.createElement('img');
//   let image2 = document.createElement('img');
//   let image3 = document.createElement('img');
//   let image4 = document.createElement('img');
//   let rightButton = document.createElement('div');


//   carousel.appendChild(leftButton);
//   carousel.appendChild(image1);
//   carousel.appendChild(image2);
//   carousel.appendChild(image3);
//   carousel.appendChild(image4);
//   carousel.appendChild(rightButton);

//   carousel.classList.add('carousel');
//   leftButton.classList.add('left-button');
//   rightButton.classList.add('right-button');
//   image1.classList.add('image1');
//   image2.classList.add('image2');
//   image3.classList.add('image3');
//   image4.classList.add('image4');

//   image1.src = url1;
//   image2.src = url2;
//   image3.src = url3;
//   image4.src = url4;
//   leftButton.textContent = "<";
//   rightButton.textContent = ">";

//   return carousel;

// }

// let carouselStyle = document.querySelector(".carousel img");
// let rightButton = document.querySelector(".right-button");
// let leftButton = document.querySelector(".left-button");

// let image1 = document.querySelector(".image1");
// let image2 = document.querySelector(".image2");
// let image3 = document.querySelector(".image3");
// let image4 = document.querySelector(".image4");

// let arr = [image1, image2, image3, image4]


// rightButton.addEventListener('click', e=>{
//   //animate to fade out upon click

// })
// leftButton.addEventListener('click', e =>{
//   //animate to fade


// })