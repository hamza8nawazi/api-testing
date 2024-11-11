const apiUrl = "https://jsonplaceholder.typicode.com/posts";


fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  })
  .then((data) => {
   const outputdisplay = document.getElementById("output");
   outputdisplay.innerHTML=""

    for (let item of data) {
      outputdisplay.innerHTML += `
      
<h2>${item.id}</h2>
<h2>${item.title}</h2>
<p>${item.body}</p>
`;
    }
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
