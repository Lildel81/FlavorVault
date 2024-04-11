//const { parsed } = require("yargs");

let res;

async function makeApiCall(q, n){
let info;



//document.getElementById('output').innerText = ("works")
const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  try {
  const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=e7ec260d55134d24ae88a19b2ae182a2&number=1&query="+q, requestOptions)
    const result = await response.json();
    //console.log(result);
    
    return result;
  }
    catch(error){
      console.error(error);
      return null;
    }
  } 
    async function getResult(){
      let q = document.getElementById('search').value;
      res = await makeApiCall(q, 1);
      console.log(res);
      str_res = JSON.stringify(res);
      console.log(str_res);

      try{
        const parsedData = JSON.parse(str_res);
        const imageUrl = parsedData.results[0].image;
        //const recipeName = parsedData.results[0].name;

        console.log(imageUrl);
        document.getElementById('recipeImage').src = imageUrl;
        //document.getElementById('recipeName').innerText = recipeName;
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }

    }
    //return info;
//getResult();




