var App = require("github.com/quilt/php-apache");

var deployment = createDeployment();

var baseMachine = new Machine({
    provider: "Amazon",
    size: "m3.medium",
    // sshKeys: githubKeys("CHANGE_ME"),
});

deployment.deploy(baseMachine.asMaster());
deployment.deploy(baseMachine.asWorker());

deployment.deploy(new App());
