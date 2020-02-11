// Gets the input from the html input field.
function getInput(){
    var input2 = document.getElementById("filmInput").value;
    document.getElementById("filmInput").value = '';
    return input2;
  }

// Resets some of the poster style
function styleReset(){
    document.getElementById("poster").style.width = null;
    document.getElementById("poster").style.height = null;
    document.getElementById("poster").style.marginLeft = null;
}

// Adds some of the poster style. If noCatch is true it adjusts the style for the movie poster, else it will adjust the style for gear the image
function changePosterStyle(noCatch){
    if (noCatch){
        document.getElementById("poster").style.width = "27,5%";
        document.getElementById("poster").style.height = "80%";
        document.getElementById("poster").style.marginLeft = "78px";
    }
    else{
        document.getElementById("poster").style.marginLeft = "100px";
        document.getElementById("poster").style.width = "40%";
        document.getElementById("poster").style.height = "40%";
    }
}

// Finds the movie information from the API and inserts it to the HTML.
function callApiInfo(){
    var movie = getInput();
    var nocatch = true;
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
        document.getElementById("theMovieTitle").innerHTML = data["Title"];
        document.getElementById("rating").innerHTML = scoreOutput;
        styleReset();
        changePosterStyle(nocatch);
        document.getElementById("poster").src = moviePoster;
        document.getElementById("poster").alt = "Movie Poster";
        }
        catch(err){
            nocatch = false;
            document.getElementById("theMovieTitle").innerHTML = "";
            document.getElementById("rating").innerHTML = "Could not find " +'"'+ movie + '"'+".<br/>Try typing the correct movie title.";
            styleReset();
            changePosterStyle(nocatch);
            document.getElementById("poster").src = "errorImage2.png";
            document.getElementById("poster").alt = "Gears";
            console.log(err);
        }
        
    })
}

// Make it so the user can press enter instead of using the button to call the callApiInfo.
let input = document.querySelector('input');
input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        callApiInfo();
    }
})

