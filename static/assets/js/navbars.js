// navbar 1
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navLinks = document.getElementsByClassName('nav-links-1')[0];

toggleButton.addEventListener("click", (e) => {
    navLinks.classList.toggle("active");
});


// // test to add animation to the background
// let last_known_scroll_position = 0;
// let ticking = false;

// // helpers
// const body = document.querySelector('body');
// const html = document.querySelector('html');

// function doSomething(scroll_pos) {

//  // from https://stackoverflow.com/a/1147768/1891677 :
//  const bodyHeight = Math.max( body.scrollHeight, 
//                               body.offsetHeight, 
//                               html.clientHeight, 
//                               html.scrollHeight, 
//                               html.offsetHeight);
 
//  // from https://stackoverflow.com/a/8876069/1891677 :
//  const viewportHeight = Math.max(document.documentElement.clientHeight,
//                                  window.innerHeight || 0);
 
//  // set scrollPercentage, if we have available scroll (0 otherwise):
//  const availableScroll = bodyHeight - viewportHeight;
//  const percentage = availableScroll > 0 ? scroll_pos * 100/availableScroll : 0;
  
//  // this is what the question is about:
//  const fromPercent = (from,to,current) => ((to - from) * current/100) + from;
//  body.style.backgroundImage = `
//  linear-gradient(${fromPercent(70, 110, percentage)}deg, rgba(30, 120, 70, 0.22872899159663862) 20%, rgba(10, 201, 80, 0.1) 0),
//  linear-gradient(${fromPercent(20, 155, percentage)}deg, rgba(20, 3, 7, 0.2679446778711485) 85%, rgba(10, 33, 17, 0.22872899159663862) 2%)
//  `;
// }

// // rest of example, from MDN:
// window.addEventListener('scroll', function(e) {
//   last_known_scroll_position = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       doSomething(last_known_scroll_position);
//       ticking = false;
//     });

//     ticking = true;
//   }
// });