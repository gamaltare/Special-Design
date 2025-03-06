// Toggle spin Class On Icon
document.querySelector(".toggel-setting .fa-gear").onclick = function () {
  // toogel Class Fa-spin For Rotation On self
  // this.classLists.toggle("fa-spin");
  // Toggle Class Open On Main Setting Box
  document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach(li => {

  // Click On Every List Items
  li.addEventListener("click", (e) => {

    // Set Color On Root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color)

  });

});

// SWitch
const randomBackEl = document.querySelectorAll(".active").forEach(Element => {

  Element.classList.remove(".active");

});

//  Create Poupe With The Image
let ourGallery = document.querySelectorAll(".gallery img")

ourGallery.forEach(img => {

  img.addEventListener('click', (e) => {

    // Create Overlay Elmintes 

    let Overlay = document.createElement("div");

    // Add Class To Overlay

    Overlay.className = 'popup-overlay';

    // Appned Overlay To The Body

    document.body.appendChild(Overlay);

    //  Create The poup box

    let popupBox = document.createElement("div");

    // Add Class To The Popup Box 

    popupBox.className = 'popup-box';

    if (img.alt !== null) {

      // Create Headig
      let imgHeaging = document.createElement("h3");

      // Creat text for Heading
      let imgText = document.createTextNode(img.alt);


      // Append The Text To The Heading 
      imgHeaging.appendChild(imgText);

      //Append The Heading To The popup Box
      popupBox.appendChild(imgHeaging);

    }

    // create The Image 

    let popupImage = document.createElement("img");

    //  Set image Source

    popupImage.src = img.src;

    // Add image TO Poupe Box

    popupBox.appendChild(popupImage);

    //  Append The Poupe Box To Body

    document.body.appendChild(popupBox);

    // Create The Close span

    let CloseButton = document.createElement("span");

    // create The Close Button Text 

    let CloseButtonText = document.createTextNode("X");

    // Append Text TO Close Butoon

    CloseButton.appendChild(CloseButtonText);

    // Add Class to Close Button
    CloseButton.className = 'close-button';

    // Add close Button To The popup Box
    popupBox.appendChild(CloseButton);

  });

});

// close popup
document.addEventListener("click", function (e) {

  if (e.target.className == 'close-button') {
    // Remove The Current Popup 
    e.target.parentNode.remove();


    // Remove overlay
    document.querySelector(".popup-overlay").remove();

  }

});
// Select All Bullets
const allLinks = document.querySelectorAll(".link a");

allLinks.forEach(link => {

  link.addEventListener('click', (e) => {

    document.querySelector(e.target.dataset.section).scrollIntoView({

      behavior: 'smooth'

    });

  });

});
//  Scroolbar
let el = document.querySelector(".scroll");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight

console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
console.log(height);

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop
  el.style.width = `${(scrollTop / height) * 100}%`;
});

// Up
let span = document.querySelector(".up")

window.onscroll = function () {
  // this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

