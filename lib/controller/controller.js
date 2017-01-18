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
            nota3 : 80,
            done: false
        },
        {
            nome : "Gsbriel",
            email: "camila@gmail.com",
            nota1: 65,
            nota2 : 80,
            nota3 : 80,
            done: false
        },
        {
            nome : "Vitor",
            email: "camila@gmail.com",
            nota1: 65,
            nota2 : 80,
            nota3 : 80,
            done: true
        },
        {
            nome : "Marcelo",
            email: "camila@gmail.com",
            nota1: 65,
            nota2 : 80,
            nota3 : 80,
            done: false
        },
        {
            nome : "Felipe",
            email: "felipe@gmail.com",
            nota1: 65,
            nota2 : 90,
            nota3 : 40,
            done: true
        }
    ];

    $scope.add = function () {
        $scope.alunos.push({
            nome: $scope.addnome,
            email: $scope.addemail,
            nota1: $scope.addnota1,
            nota2: $scope.addnota2,
            nota3: $scope.addnota3
        })
        $scope.addnome = "";
        $scope.addemail = "";
        $scope.addnota1 = "";
        $scope.addnota2 = "";
        $scope.addnota3 = " ";
    }



})