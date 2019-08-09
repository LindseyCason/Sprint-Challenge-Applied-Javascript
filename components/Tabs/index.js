// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
let globalTopic = [];
let topics = document.querySelector('.topics');
axios.get("https://lambda-times-backend.herokuapp.com/topics")
 .then(response=>{
// console.log(response.data.topics) //figure out how to access topics // loop through topics and appeand to .topics
let topicArray = response.data.topics;
 
topicArray.forEach(topic =>{
   globalTopic.push(topic);
 let newTopic = newTab(topic);
 topics.appendChild(newTopic);
}  )
 
})
 .catch(error =>{
   console.log(error);
 })
 
 function newTab(topic){
   const tab = document.createElement('div');
   tab.classList.add('tab');
   tab.textContent = topic;
   return tab;
}
