var topics = ['Biology', 'Math', 'Grammar', 'Chemistry'];

function renderButtons() {

    $("#buttons-view").empty();

    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("category btn btn-link");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons-view").append(a);
    }
}

function displayGiphy() {

    $("#giphy-view").empty();
    var category = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + category + "&api_key=zKbNlUuAkZ7Gxlzay7vvDmszUDcm0AVF";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

            for (var i = 0; i < 12; i++) {
                if(response.data[i].rating === 'g' || response.data[i].rating === 'pg') {
                var animate = response.data[i].images.fixed_height.url;
                var still = response.data[i].images.fixed_height_still.url;
                var a = $('<div class=col-lg-4><img class="gif" data-still="'+response.data[i].images.fixed_height_still.url+'" data-animate="'+ response.data[i].images.fixed_height.url+'"data-state="still" src="' + still + '"/>' + '<h7>Rated: ' + response.data[i].rating.toUpperCase() +'<br></h7><div>');
                $('#giphy-view').append(a);
            }
        }
    });
}


$(document).ready(function () {

    renderButtons();

    $('body').on('click', '.gif', function () {
        var state = $(this).attr("data-state");
        if (state === 'still') {
            $(this).attr("src", $(this).attr('data-animate'));
            $(this).attr("data-state", "animate");
        } else if (state === 'animate'){
            $(this).attr("src", $(this).attr('data-still'));
            $(this).attr("data-state", "still");
        }
    })

    $("#add-category-button").on("click", function (event) {
        event.preventDefault();
        var newCategory = $("#category-input").val().trim();
        topics.push(newCategory);
        renderButtons();
        $('#category-input').val("");
    });

    $('body').on("click", ".category", displayGiphy);

});
