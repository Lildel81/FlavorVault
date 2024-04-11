
const axios = require('axios');


function makeApiCall(){


let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.spoonacular.com/recipes/complexSearch?apiKey=e7ec260d55134d24ae88a19b2ae182a2&number=1&query=pasta',
  headers: { }
};

axios.request(config)
.then((response) => {
  
 let results = (JSON.stringify(response.data));
 document.getElementById("output").innerText=results;
})
.catch((error) => {
  console.log(error);
});


}
document.getElementById('search').addEventListener('click', makeApiCall);
