let allRecipes = []
let httpReq = new XMLHttpRequest()
httpReq.open("GET", "https://forkify-api.herokuapp.com/api/search?q=pizza")
httpReq.send()
    
  httpReq.addEventListener("readystatechange", function(){
    if( httpReq.readyState == 4 && httpReq.status == 200 ){
      allRecipes = JSON.parse(httpReq.response).recipes 
      displayAllRecipes()
      localStorage.setItem("avatar" , JSON.stringify(allRecipes))
    }
  })

  if(localStorage.getItem("avatar") == null){
        allRecipes = []
    }else{
        allRecipes = JSON.parse(localStorage.getItem("avatar"))
        displayAllRecipes()
    }


  function displayAllRecipes(){
    let allRecipesBox = ""

    for(let i = 0 ; i < allRecipes.length ; i++){

      allRecipesBox += `
      <div class="col-md-4">
            <div class="card">
              <img src="${allRecipes[i].image_url}" class="card-img-top img-fluid" alt="...">
              <div class="card-body">
                <h5 class="card-title"> ${allRecipes[i].title}</h5>
                <p class="card-text">${allRecipes[i].publisher} </p>
                <a href="${allRecipes[i].publisher_url}" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
      `
    }
    document.getElementById("row_pizza").innerHTML = allRecipesBox
  }

function search(term){
    let allRecipesBox2 = ""
    for(let i = 0 ; i < allRecipes.length ; i++){
        if( allRecipes[i].title.includes(term)){
            allRecipesBox2 += `
                <div class="col-md-4">
                        <div class="card">
                        <img src="${allRecipes[i].image_url}" class="card-img-top img-fluid" alt="...">
                        <div class="card-body">
                            <h5 class="card-title"> ${allRecipes[i].title}</h5>
                            <p class="card-text">${allRecipes[i].publisher} </p>
                            <a href="${allRecipes[i].publisher_url}" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    </div>
                `
        }
    }
    document.getElementById("row_pizza").innerHTML = allRecipesBox2

}

