console.log("Script is connected")
var myApp = angular.module("myModule", []); // created a module

// registering a controller to module
myApp.controller("myController", function($scope){
    var employee = {name: "Pulok", 
                    age:30,
                    gender: "Male",
                    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/User_icon_1.svg/2000px-User_icon_1.svg.png"
                    };
    
    var allEmployees = [
            { firstName: "Ben", lastName: "Hastings", gender: "Male", salary: 55000, dateOfBirth:new Date("November 23, 1980") },
            { firstName: "Sara", lastName: "Paul", gender: "Female", salary: 68000, dateOfBirth: new Date("May 05, 1970") },
            { firstName: "Mark", lastName: "Holland", gender: "Male", salary: 57000, dateOfBirth: new Date("August 15, 1974") },
            { firstName: "Pam", lastName: "Macintosh", gender: "Female", salary: 53000, dateOfBirth: new Date("October 27, 1979") },
            { firstName: "Todd", lastName: "Barber", gender: "Male", salary: 60000, dateOfBirth: new Date("December 30, 1983")}
        ];
        
    var countries = [
            {
                name:"UK",
                cities: [
                    {name:"London"},
                    {name:"Birmingham"},
                    {name:"Manchester"},
                    ]
            },
            {
                name: "USA",
                cities: [
                    { name: "Los Angeles" },
                    { name: "Chicago" },
                    { name: "Houston" }
                ]
            },
            {
                name: "India",
                cities: [
                    { name: "Hyderabad" },
                    { name: "Chennai" },
                    { name: "Mumbai" }
                ]
            }
        ];
    
    var technologies = [
            {name:"C#", likes:0, dislikes:0},
            {name:"ASP.NET", likes:0, dislikes:0},
            {name:"SQL Server", likes:0, dislikes:0},
            {name:"Angular", likes:0, dislikes:0}
        ];
    
    var increaseLike = function(technology){
        technology.likes++;  
    };
    
    var increaseDislike = function(technology){
        technology.dislikes++;  
    };

    
    $scope.employee = employee;
    $scope.allEmployees = allEmployees;
    $scope.countries = countries;
    $scope.technologies = technologies;
    $scope.increaseLike = increaseLike;
    $scope.increaseDislike = increaseDislike;
    $scope.rowLimit = "10";
    $scope.sortColumn = "salary";
    
    $scope.reverseSort = false;
    
    var sortData = function (column){
        
        if($scope.sortColumn == column ){
            $scope.reverseSort= !($scope.reverseSort);
        }else{
            $scope.sortColumn = column;
        }
         
    }
    
    var getSortClass = function(column){
        if($scope.sortColumn == column){
            if($scope.reverseSort){
                return 'arrow-down';
            }else{
                return 'arrow-up';
            }
        }else {
            return "";
        }
    }
    
    $scope.sortData = sortData;
    $scope.getSortClass = getSortClass;
    
});