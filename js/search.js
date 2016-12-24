// Search Images
var SearchImages = function() {
    // Get the value of search text
    var search_text = $('#search-text').val();

    console.log(search_text);

    // Search for images using search text
    app.inputs.search({name: search_text}).then(
        function(response) {
            console.log('success in search');
            var urls = URLsFromSearchResult(response.rawData);
            ShowImageResults(urls);
        },
        function(err) {
            // there was an error
            console.log('error in serach');
            console.log(err);
            urls = [];
            ShowImageResults(urls);
        }
    );

    app.inputs.list({page: 1, perPage: 20}).then(
        function(response) {
            // do something with response
        },
        function(err) {
            // there was an error
        }
    );
};

// Helper function to get image URLs from search result
var URLsFromSearchResult = function(searchResult) {
    var urls = [];
    for(i = 0; i < searchResult.length; i++) {
        urls.push(searchResult[i].input.data.image.url);
    }
    return urls;
}

// Render images for image urls
var ShowImageResults = function(urls) {
    var image_list = $('#image-list');
    image_list.html('');

    if(urls.length == 0) {
        // Show 'No Result Found' message if no search result is found
        $("#no-element-message").show();
        return;
    }

    $("#no-element-message").hide();

    // Append images to the image list
    for(i = 0; i < urls.length; i++) {

        image_list.append(
            '<div class="col-lg-3 col-md-4 col-xs-6 thumb">' +
            '<a class="thumbnail" href="#">' +
            '<img class="img-responsive" src=' + urls[i] + ' alt="">' +
            '</a>' +
            '</div>'
        );

    }
}
