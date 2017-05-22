angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Welcome To Waller Reviews!"
    })
    .controller('RegisterController', function($scope, UserAPIService, store) {
        $scope.registrationUser = {};
        var URL = "https://morning-castle-91468.herokuapp.com/";

        $scope.login = function() {
            UserAPIService.callAPI(URL + "accounts/api-token-auth/", $scope.data).then(function(results) {
                $scope.token = results.data.token;
                store.set('username', $scope.registrationUser.username);
                store.set('authToken', $scope.token);
            }).catch(function(err) {
                console.log(err);
            })
        }

        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;

                UserAPIService.callAPI(URL + "accounts/register/", $scope.registrationUser).then(function(results) {
                    $scope.data = results.data;
                    alert("You have successfully registered to Waller Reviews");
                    $scope.login();
                }).catch(function(err) {
                    console.log(err);
                    alert("Registration failed, please try again with another username.");

                });
            }
        }
    })

    .controller('LoginController', function($scope, $location, UserAPIService, store) {
        var URL = "https://morning-castle-91468.herokuapp.com/";
        $scope.loginUser = {};

        $scope.submitForm = function() {
            if ($scope.loginForm.$valid) {
                $scope.loginUser.username = $scope.user.username;
                $scope.loginUser.password = $scope.user.password;

                UserAPIService.callAPI(URL + "accounts/api-token-auth/", $scope.loginUser).then(function(results) {
                    $scope.token = results.data.token;
                    store.set('username', $scope.loginUser.username);
                    store.set('authToken', $scope.token);
                    console.log($scope.token);
                    $location.path("/review");
                }).catch(function(err) {
                    console.log(err);
                });
          }
        }
    })

    .controller('LogoutController', function(store) {
        store.remove('username');
        store.remove('authToken');
    })


    .controller('ReviewController', function($scope, $location, store) {
        
        $scope.authToken = store.get('authToken');
        $scope.username = store.get('username');
        $scope.reviews = {};


        if (!store.get('authToken')) {
            $location.path("/pleaseregister");
        }

        if (store.get('review')) {
            $scope.reviews.id = 1;
            $scope.reviews.title = store.get('title');
            $scope.reviews.description = store.get('review');
            $scope.reviews.username = store.get('revusername');
            console.log($scope.reviews);
        }


      /*  ReviewAPIService.getReviews(url + "review/", $scope.username, $scope.authToken).then(function(results) {
            $scope.reviews = results.data;
            console.log($scope.reviews);
        }).catch(function(err) {
            console.log(err);
        }); */

        $scope.submitForm = function() {
            if ($scope.reviewForm.$valid) {
                $scope.review.title = $scope.review.title;
                $scope.review.description = $scope.review.description;
                $scope.review.username = $scope.review.username;

                console.log($scope.review.username, $scope.review.title);
                alert("You have successfully created a review");

                store.set('id', 1);
                store.set('title', $scope.review.title);
                store.set('review', $scope.review.description);
                store.set('revusername', $scope.review.username);



              /*  ReviewAPIService.createReview(url + "review/", $scope.review, $scope.authToken).then(function(results) {
                    console.log(results)
                }).catch(function(err) {
                    console.log(err)
                }) */
            }
        }
    });
    
