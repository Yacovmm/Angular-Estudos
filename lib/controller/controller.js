/**
 * Created by yacov on 18/01/17.
 */
var app = angular.module('myApp', []);
app.controller('indexController', function ($scope) {
    $scope.titulo = "Sistema em AngularJS";

    $scope.alunos = [
        {
            nome : "Camila",
            email: "camila@gmail.com",
            nota1: 65,
            nota2 : 80,
            nota3 : 80
        },
        {
            nome : "Gsbriel",
            email: "camila@gmail.com",
            nota1: 65,
            nota2 : 80,
            nota3 : 80
        },
        {
            nome : "Vitor",
            email: "camila@gmail.com",
            nota1: 65,
            nota2 : 80,
            nota3 : 80
        },
        {
            nome : "Marcelo",
            email: "camila@gmail.com",
            nota1: 65,
            nota2 : 80,
            nota3 : 80
        }
    ];
})