// Instantiate a new Clarifai app passing in your clientId and clientSecret
// Use your app credentials
var clientId = null;
var clientSecrect = null;

var app = new Clarifai.App(clientId, clientSecrect);

app.inputs.create(images).then(
    function(response) {
        // do something with response
        console.log(response);
        console.log('indexed successfully');
    },
    function(err) {
        // there was an error
        console.log(err);
        console.log('indexing failed');
    }
);

// Search Images
var SearchImages = function() {
    var search_text = $('#search-text').val();

    console.log(search_text);
    app.inputs.search({name: search_text}).then(
        function(response) {
            console.log('success');
            var urls = URLsFromSearchResult(response.rawData);
            ShowImageResults(urls);
        },
        function(err) {
            // there was an error
        }
    );
};

var URLsFromSearchResult = function(searchResult) {
    var urls = [];
    for(i = 0; i < searchResult.length; i++) {
        urls.push(searchResult[i].input.data.image.url);
    }
    return urls;
}

var ShowImageResults = function(urls) {
    var image_list = $('#image-list');
    image_list.html('');

    if(urls.length == 0) {
        $("#no-element-message").show();
        return;
    }

    $("#no-element-message").hide();

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
