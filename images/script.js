var collapseElement1 = document.getElementById('collapseExample1');
var collapseIcon1 = document.getElementById('dropdown-icon1');

collapseElement1.addEventListener('show.bs.collapse', function () {
  // Change the icon of the first button to icon-arrow-up.svg when the first collapse is opened
  collapseIcon1.src = 'images/icon-arrow-up.svg';
});

collapseElement1.addEventListener('hide.bs.collapse', function () {
  // Change the icon of the first button back to icon-arrow-down.svg when the first collapse is closed
  collapseIcon1.src = 'images/icon-arrow-down.svg';
});

var collapseElement2 = document.getElementById('collapseExample2');
var collapseIcon2 = document.getElementById('dropdown-icon2');

collapseElement2.addEventListener('show.bs.collapse', function () {
  // Change the icon of the second button to icon-arrow-up.svg when the second collapse is opened
  collapseIcon2.src = 'images/icon-arrow-up.svg';
});

collapseElement2.addEventListener('hide.bs.collapse', function () {
  // Change the icon of the second button back to icon-arrow-down.svg when the second collapse is closed
  collapseIcon2.src = 'images/icon-arrow-down.svg';
});


 // Get a reference to the image element
 var myImage = document.getElementById('mainImage');

 // Add an event listener for the resize event
 window.addEventListener('resize', function() {
   // Check if the screen width is less than or equal to 576px
   if (window.innerWidth < 576) {
     // Change the image URL
     myImage.src = 'images/image-hero-mobile.png';
   } else {
     // Change the image URL back to the original
     myImage.src = 'images/image-hero-desktop.png';
   }
 });