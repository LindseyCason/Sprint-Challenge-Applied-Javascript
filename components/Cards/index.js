// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
 
let cardContainer = document.querySelector('.cards-container');
let authorNames = [];
let imageURLs = [];
let headlines = [];
 
 
 
 
 
 //get axios data
 
axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response=>{ 
 let art = response.data.articles
 console.log(response); //Obj
 console.log(art); //Obj containing 4 topic arrays, each array containing all 3 items needed //LOOP THIS
 globalTopic.forEach(topic =>{ //globalTopic is an array created on the header page//using here to save space
       let topicArr = art[topic]; //might not need this variable but makes it easier to read for me
       for(let i=0; i<topicArr.length; i++){
       let auth = topicArr[i]["authorName"]
       let pic = topicArr[i]["authorPhoto"];
       let head = topicArr[i]["headline"]
       cardContainer.appendChild(createCard(auth, pic, head))
 
       }
})
})
.catch(error =>{
 console.log(error);
})
 
 
function createCard(auth, pic, head){
   const card = document.createElement('div')       
   const headline = document.createElement('div')
   const author = document.createElement('div');
   const imageContainer = document.createElement('div');
   const image = document.createElement('img');
   const authorSpan = document.createElement('span');
 
   card.appendChild(headline);
   card.appendChild(author);
   author.appendChild(imageContainer);
   imageContainer.appendChild(image)
   image.src = pic;
   card.appendChild(authorSpan);
 
   card.classList.add('card');
   headline.classList.add('headline');       
   author.classList.add('author');
   imageContainer.classList.add('img-container');
 
   headline.textContent = head;
   authorSpan.textContent = "By: " + auth;
 
return card;
 
}
 
 
 
// console.log(globalTopic);
