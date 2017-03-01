var defaultImage = "quilt/php-apache";

function App(image) {
    var img = image || defaultImage;

    this.service = new Service("app", [new Container(img)]);
    publicInternet.connect(80, this.service);
};

App.prototype.deploy = function(deployment) {
    deployment.deploy(this.service);
};

App.prototype.place = function(rule) {
    this.service.place(rule);
};

module.exports = App;
