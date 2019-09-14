/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselCreator(image) {
  // Create all elements
  const carousel = document.createElement("div");
  const leftButton = document.createElement("div");
  const mountainsImg = document.createElement("img");
  const computerImg = document.createElement("img");
  const treesImg = document.createElement("img");
  const turntableImg = document.createElement("img");
  const rightButton = document.createElement("div");
  const images = [mountainsImg, computerImg, treesImg, turntableImg];

  // Append Children to Parents
  carousel.appendChild(leftButton);
  carousel.appendChild(mountainsImg);
  carousel.appendChild(computerImg);
  carousel.appendChild(treesImg);
  carousel.appendChild(turntableImg);
  carousel.appendChild(rightButton);

  // Apply Styling
  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");

  // Add Content
  leftButton.textContent = "<";
  rightButton.textContent = ">";
  mountainsImg.setAttribute("src", "./assets/carousel/mountains.jpeg");
  computerImg.setAttribute("src", "./assets/carousel/computer.jpeg");
  treesImg.setAttribute("src", "./assets/carousel/trees.jpeg");
  turntableImg.setAttribute("src", "./assets/carousel/turntable.jpeg");

  // Add Event Listeners

  rightButton.addEventListener("click", e => {
    let slideIndex = 1;
    // if (e > images.length) {
    //   slideIndex = 1;
    // }
    // if (e < 1) {
    //   slideIndex = images.length;
    // }
    // for (i = 0; i < images.length; i++) {
    //   images[i].style.display = "none";
    // }
    images[slideIndex - 1].style.display = "block";
  });

  // leftButton.addEventListener("click", e => {
  //   let slideIndex = 1;
  // });

  return carousel;
}
const mountainsImg = document.createElement("img");
const carouselContainer = document.querySelector(".carousel-container");

carouselContainer.appendChild(carouselCreator(mountainsImg));
