'use strict';

angular.module('ChatApp').controller("indexCtrl", function ($scope) {

    var rand_num = Math.floor((Math.random() * 100) + 1);
    $scope.name = 'Guest_' + rand_num; // holds the user's name
    $scope.message = ''; // holds the new message
    $scope.messages = []; // collection of messages coming from server
    $scope.chatHub = null; // holds the reference to hub

    $scope.chatHub = $.connection.chatHub; // initializes hub
    $.connection.hub.start(); // starts hub

    // register a client method on hub to be invoked by the server
    $scope.chatHub.client.broadcastMessage = function (id, name, message) {
        //var newMessage = name + ' says: ' + message;
        // push the newly coming message to the collection of messages
        var chatClass = "msg-receive";
        if (name === $scope.name)
            chatClass = "msg-send";
        $scope.messages.unshift({ "id": id, "name": name, "message": message, "class": chatClass });
        $scope.$apply();
    };

    $scope.newMessage = function () {
        // sends a new message to the server
        $scope.chatHub.server.sendMessage($scope.name, $scope.message);

        console.log('*', $scope.message, '*');
        $scope.message = '';
    };

});