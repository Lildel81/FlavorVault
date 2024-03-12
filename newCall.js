function makeApiCall(q){


//document.getElementById('output').innerText = ("works")
const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=e7ec260d55134d24ae88a19b2ae182a2", requestOptions)
    .then((response) => response.text())
    //.then((result) => document.getElementById("output").innerHTML="<h1>"+result[0].title+"</h1><br><img src = "+result[0].image+'"width=400/>')
    //.then((result) => console.log(result))
    .then((result) => document.getElementById("output").innerHTML=(result))
    .catch((error) => console.error(error));
    
    



}



