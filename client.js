// window.addEventListener("load", function() {
//  const request = new XMLHttpRequest();
//  request.open('GET', 'https://api.github.com/users/cececlar');
//  request.responseText = 'application/json';
//  request.onload = function() {
//    console.log(request.response);
//  }
//  request.send();
// });
// other example:
//
// const url = 'https://api.github.com/users/cececlar';
//
// fetch(url).then(function(response) {
//   response.text().then(function(text) {
//     console.log(text);
//   });
// });

window.addEventListener("load", function() {
 console.log("I'm ready!")

 const submitButton = document.getElementById('submit-button');
 const responseContainer = document.getElementById('contents')
 let userName = '';

 submitButton.addEventListener('click', function() {
    event.preventDefault();
    userName = document.getElementById('username').value;
    let url = `https://api.github.com/users/${userName}`;

    fetch(url).then(function(response) {
      // response.text().then(function(text) {
      //   textObject = JSON.parse(text);
      //   for(var key in textObject) {
      //     responseContainer.innerHTML += `<p>${key}: ${textObject[key]}</p>`;
      //   }
      // });
      response.text().then(function(text) {
        textObject = JSON.parse(text);
        for(var key in textObject) {
        responseContainer.innerHTML += `<p>${key}: ${textObject[key]}</p>`;
      }
    });
    });
    });
    });
