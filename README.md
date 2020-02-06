# agMovieRank

Page: https://arneger.github.io/agMovieRank/

Movie Rank is a website where you can search for a movie and get the average rating from IMDB, Rotten Tomatoes and Metacritic.

How to use the website:
1. Click on the input field and type a movie title.
2. Press enter or click on the search button (magnifying glass icon) to search for a movie.
3. If the input is valid the average score, poster and the title of the movie will be displayed.
   If the input is not valid you'll get a message that the movie couldn't be found.
   
Important notes about the site:
- The javascript takes the input and searches for it in an API (OMDB API)
- The API doesn't include TV-Shows/series and does not include every movie that exists in the IMDB database, so you may get a message that 
  it can't find the movie, even though it is in the IMDB database. This applies mainly to small indie movies and foreign language movies.

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

JavaScript:
the function "getInput" gathers the input from the HMTL input field followed by clearing the search field.
the function "apiCall" is activated when pressing the search button or pressing enter in the input field.
apiCall connects to the OMDB API and give it as a JSON. There's a try/catch block in case it can't find the movie
Inside the try block the average rating of Rotten Tomatoes, Metacritic and IMDB gets calculated from the API data.
In the end it displays the movie information p tags and the poster in a img tag. The img style is also changed so
the poster gets a shadow.
Inside the catch block it'll display a message that it couldn't find the movie in the p tags. The img shadow style
is also set to null since a transparent png file of gears is displayed in the img tag. 
The error message is displayed in the p rating tag since that tag is below the search bar. 
At the end of the script file there's code that lets the user press enter to activate the apiCall function (search)

CSS:
I've mainly just played around in the CSS, so it's a little bit unstructured. There's also some things done that may 
not be considered best practice, but I'm planning to do some changes to it when I got the time. 


