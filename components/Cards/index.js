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

const cardsContainer = document.querySelector(".cards-container");

// Asynchronous Function - try / catch
myCards = async url => {
  try {
    let response = await axios.get(url);

    const javascript = response.data.articles.javascript;
    const bootstrap = response.data.articles.bootstrap;
    const technology = response.data.articles.technology;
    const jquery = response.data.articles.jquery;
    const node = response.data.articles.node;

    javascript.forEach(item => {
      cardsContainer.appendChild(cardCreator(item));
    });
    bootstrap.forEach(item => {
      cardsContainer.appendChild(cardCreator(item));
    });
    technology.forEach(item => {
      cardsContainer.appendChild(cardCreator(item));
    });
    jquery.forEach(item => {
      cardsContainer.appendChild(cardCreator(item));
    });
    node.forEach(item => {
      cardsContainer.appendChild(cardCreator(item));
    });
  } catch (err) {
    console.log(err);
  }
};

myCards("https://lambda-times-backend.herokuapp.com/articles");

// HTTP GET request
//
// axios
//   .get("https://lambda-times-backend.herokuapp.com/articles")

//   .then(response => {
//     console.log(response);
//     const javascript = response.data.articles.javascript;
//     const bootstrap = response.data.articles.bootstrap;
//     const technology = response.data.articles.technology;
//     const jquery = response.data.articles.jquery;
//     const node = response.data.articles.node;

//     javascript.forEach(item => {
//       cardsContainer.appendChild(cardCreator(item));
//     });
//     bootstrap.forEach(item => {
//       cardsContainer.appendChild(cardCreator(item));
//     });
//     technology.forEach(item => {
//       cardsContainer.appendChild(cardCreator(item));
//     });
//     jquery.forEach(item => {
//       cardsContainer.appendChild(cardCreator(item));
//     });
//     node.forEach(item => {
//       cardsContainer.appendChild(cardCreator(item));
//     });
//   });

function cardCreator(obj) {
  // Create all elements
  const card = document.createElement("div");
  const cardHeadline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const authorImg = document.createElement("img");
  const authorSpan = document.createElement("span");

  // Append Children to Parents
  card.appendChild(cardHeadline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(authorImg);
  author.appendChild(authorSpan);

  // Apply Styles
  card.classList.add("card");
  cardHeadline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  // Add Content
  cardHeadline.textContent = obj.headline;
  authorImg.setAttribute("src", obj.authorPhoto);
  authorSpan.textContent = "By " + obj.authorName;

  return card;
}
