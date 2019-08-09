// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp"></span>
//  </div >
// And add it to the DOM in the .header-container component //fixed spelling error
 
 
const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header("March 28, 2019", "98°", "Lambda Times"));
 
 
function Header(date, temp, title) {
   let headerDiv = document.createElement('div');
   let dateSpan = document.createElement('span');//pin to headerDiv
   let h1 = document.createElement('h1');//pin to headerDiv
   let tempSpan = document.createElement('span');//pin to headerDiv
 
   headerDiv.appendChild(dateSpan);
   headerDiv.appendChild(h1);
   headerDiv.appendChild(tempSpan);
 
   headerDiv.classList.add('header');
   dateSpan.classList.add('date');
   tempSpan.classList.add('temp');
 
   dateSpan.textContent = date;
   tempSpan.textContent = temp;
   h1.textContent = title;
 
   return headerDiv;
 
}
 
 
 
//END OF HEADER FILE
