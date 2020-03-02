## agMovieRank

Page: https://arneger.github.io/agMovieRank/

Movie Rank is a website where you can search for a movie and get the average rating from IMDB, Rotten Tomatoes and Metacritic.

## How to use the website
1. Click on the input field and type a movie title.
2. Press enter or click on the search button (magnifying glass icon) to search for a movie.
3. If the input is valid the average score, poster and the title of the movie will be displayed.
   If the input is not valid you'll get a message that the movie couldn't be found.
   
## Important notes about the site
- The javascript takes the input and searches for it in an API (OMDB API)
- The API doesn't include TV-Shows/series and does not include every movie that exists in the IMDB database, so you may get a message that 
  it can't find the movie, even though it is in the IMDB database. This applies mainly to small indie movies and foreign language movies.

## Why did I make this?
Because there's so many movie-streaming services it's very hard for me to pick a movie, and when I pick a movie I want to watch a movie
with a good rating from critics and users. Therefore I often check IMDBs user ratings, Rotten Tomatoes critic ratings and 
Metacritic critc ratings. Since I have this habit of checking all these websites I figured out a good idea would be to create a website
that let me see the average rating of a movie from all the 3 sites.



The searches are not interpreted well.
for instance, if you are searching for the movie "Star Wars: Episode V - The Empire Strikes Back", it won't find every version of the title.

Examples of some titles that won't work:
* Star Wars 5
* Star Wars episode 5
* Star Wars V
* Star Wars The Empire Strikes Back

Examples of some titles that work:
* Star Wars: Episode V - The Empire Strikes Back
* Star Wars: Episode V
* Star Wars Episode V
* The Empire Strikes Back
* Empire Strikes Back

## JavaScript

getInput() gathers the input from the HMTL input field followed by clearing the search field.

changePosterStyle(noCatch) changes the image style. If noCatch is true it means it'll be changing/adding the movie poster css style,
and if noCatch is false it's changing/adding the error image css style.

styleReset() changes the styles that are set in changePosterStyle(noCatch) to null.

callApiInfo() is activated when pressing the search button or pressing enter in the input field.
callApiInfo() connects to the OMDB API and give it as a JSON. There's a try/catch block in case it can't find the movie
Inside the try block the average rating of Rotten Tomatoes, Metacritic and IMDB gets calculated from the API data.
Finally it displays the movie information p tags and the poster in a img tag.
Inside the catch block it'll display a message that it couldn't find the movie in the p tags. 
The error message is displayed in the p rating tag since that tag is below the search bar. 

At the end of the script file there's code that lets the user press enter to activate the apiCall function (search)

## CSS

I've mainly just played around in the CSS, so it's a little bit unstructured. There's also some things done that may 
not be considered best practice, but I'm planning to do some changes to it when I got the time. 
Note that I temporarily removed doctype in the html because it caused an issue with the style on the input field

