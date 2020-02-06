function getInput(){
    var input2 = document.getElementById("filmInput").value;
    document.getElementById("filmInput").value = '';
    return input2;
  }


function apiCall(){
    movie = getInput();
    const postsPromise = fetch('https://www.omdbapi.com/?apikey=ea9f22bf&t=' + encodeURI(movie));
    postsPromise
    .then(data => data.json())
    .then(data => {
        try {
        var imdbRating = parseFloat(data["Ratings"][0]["Value"].split("/10")[0])*10;
        var rTomatoesRating = parseFloat(data["Ratings"][1]["Value"].split("%")[0]);
        var mCriticRating = parseFloat(data["Ratings"][2]["Value"].split("/100")[0]);
        var averageRating = Math.round((imdbRating+rTomatoesRating+mCriticRating)/3);
        var scoreOutput = averageRating.toString() + "/100";
        var moviePoster = data["Poster"]
        document.getElementById("someText").innerHTML = data["Title"];
        document.getElementById("rating").innerHTML = scoreOutput;
        document.getElementById("poster").style.boxShadow= "0 0 10px 0 rgba(0, 0, 0, 0.5), 0 5px 15px 0 rgba(0, 0, 0, 0.70)";
        document.getElementById("poster").src = moviePoster;
        }
        catch(err){
            document.getElementById("someText").innerHTML = "";
            document.getElementById("rating").innerHTML = "Could not find " +'"'+ movie + '"'+".<br/>Try typing the correct movie title.";
            document.getElementById("poster").style.boxShadow= null;
            document.getElementById("poster").src = "errorImage2.png";
            console.log(err);
        }
        
    })
}

let input = document.querySelector('input');
input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        apiCall();
    }
})

