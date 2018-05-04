var topics = ['Mountain biking', 'Snowboarding', 'Skiing', 'Rock Climbing'];

function renderButtons() {

    $("#buttons-view").empty();

    for (var i = 0; i < topics.length; i++) {
      var a = $("<button>");
      a.addClass("category btn btn-primary");
      a.attr("data-name", topics[i]);
      a.text(topics[i]);
      $("#buttons-view").append(a);
    }
  }

function displayGiphy() {

    var category = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ category +"&api_key=zKbNlUuAkZ7Gxlzay7vvDmszUDcm0AVF";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        for(var i = 0; i < 12; i++) {
        var a = $('<div class=col-lg-4><img class="gif" src="' + response.data[i].images.fixed_height_still.url + '"/>' + '<h7>Rated: ' +response.data[i].rating + '</h7><div>');
        $('#giphy-view').append(a);
        }
    });

  }


$( document ).ready(function() {

    $("#add-category-button").on("click", function(event) {
        event.preventDefault();
        var newCategory = $("#category-input").val().trim();
        topics.push(newCategory);
        renderButtons();
        });

    renderButtons();
    displayGiphy();
});





          // Creating a div to hold the movie
        //   var movieDiv = $("<div class='movie'>");

        //   // Storing the rating data
        //   var rating = response.Rated;

        //   // Creating an element to have the rating displayed
        //   var pOne = $("<p>").text("Rating: " + rating);

        //   // Displaying the rating
        //   movieDiv.append(pOne);

        //   // Storing the release year
        //   var released = response.Released;

        //   // Creating an element to hold the release year
        //   var pTwo = $("<p>").text("Released: " + released);

        //   // Displaying the release year
        //   movieDiv.append(pTwo);

        //   // Storing the plot
        //   var plot = response.Plot;

        //   // Creating an element to hold the plot
        //   var pThree = $("<p>").text("Plot: " + plot);

        //   // Appending the plot
        //   movieDiv.append(pThree);

        //   // Retrieving the URL for the image
        //   var imgURL = response.Poster;

        //   // Creating an element to hold the image
        //   var image = $("<img>").attr("src", imgURL);

        //   // Appending the image
        //   movieDiv.append(image);

        //   // Putting the entire movie above the previous movies
        //   $("#movies-view").prepend(movieDiv);