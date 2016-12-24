// instantiate a new Clarifai app passing in your clientId and clientSecret
var clientId = null;
var clientSecrect = null;

var app = new Clarifai.App(clientId, clientSecrect);

// predict the contents of an image by passing in a url
app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
    function(response) {
        console.log(response);
    },
    function(err) {
        console.error(err);
    }
);

var image_list = $('#image-list');

var src = "https://i.guim.co.uk/img/media/339b5841c918b829b1fec0f03d20235741f8cd65/139_322_1912_1147/master/1912.jpg?w=620&q=55&auto=format&usm=12&fit=max&s=d1970ac54af02b6e5a10b1c77ac6f300";

for(i = 0; i < 12; i++) {

    image_list.append(
        '<div class="col-lg-3 col-md-4 col-xs-6 thumb">' +
            '<a class="thumbnail" href="#">' +
                '<img class="img-responsive" src=' + src + ' alt="">' +
            '</a>' +
        '</div>'
    );

}
