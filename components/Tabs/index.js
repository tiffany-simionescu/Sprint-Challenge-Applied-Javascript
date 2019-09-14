// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsDiv = document.querySelector(".topics");

// Asynchronous Function
myTopics = async url => {
  try {
    let response = await axios.get(url);
    response.data.topics.forEach(item => {
      topicsDiv.appendChild(topicTabs(item));
    });
  } catch (err) {
    console.log(err);
  }
};

myTopics("https://lambda-times-backend.herokuapp.com/topics");

// HTTP GET request
//
// axios
//   .get("https://lambda-times-backend.herokuapp.com/topics")

//   .then(response => {
//     console.log(response);

//     response.data.topics.forEach(item => {
//       topicsDiv.appendChild(topicTabs(item));
//     });
//   })
//   .catch(function(err) {
//     console.log(err, "There Is An Error");
//   });

function topicTabs(obj) {
  // Create all elements
  const tab = document.createElement("div");

  // Apply Style
  tab.classList.add("tab");

  // Add Content
  tab.textContent = obj;

  return tab;
}
