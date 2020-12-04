require("dotenv").config();

const axios = require("axios");

const SEARCH_KEYWORD = "joker";
const MOVIES_BASE_URL = "http://www.omdbapi.com/";

axios
  .get(
    `${MOVIES_BASE_URL}?apikey=${process.env.MOVIES_API_KEY}&s=${SEARCH_KEYWORD}`
  )
  .then((res) => {
    const movies = res.data.Search;

    movies.map((movie) => {
      console.log(movie.Poster);
    });
  })
  .catch(function (error) {
    //handle error
    console.log("Error!");
  });
