const fetch = require('node-fetch');
//import fetch from 'node-fetch';

const getJoke = () => {
  fetch('https://geek-jokes.sameerkumar.website/api?format=json')
  .then((response) => {
    return response.json();
  })
  .then((joke) => {
    console.log(joke);
  });
}

getJoke();

// other possibility
//const getJoke = async () => {
  // response = await fetch('https://geek-jokes.sameerkumar.website/api?format=json');
  //const joke = await response.json(); // Décodage JSON de la réponse
  //console.log(joke); // Utilisation des données décodées
//};