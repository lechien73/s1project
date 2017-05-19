angular.module('UserService', [])
	.factory('UserAPIService', function($http) {
		UserAPIService = {
			callAPI: function(url, data) {
				return $http.post(url, data);
			}
		};
		return UserAPIService;
	})

angular.module('ReviewService', [])
	.factory('ReviewAPIService', function($http) {
		ReviewAPIService = {
			getReviews: function(url, data, token) {
				header = "Authorization: JWT " + token;
				return $http.get(url, {params:{"username": data}}, header);
			},
			createReview: function(url, data, token) {
				header = "Authorization: JWT " + token;
				return $http.post(url, data, header);
			},
			editReview: function(url, data, token) {
				header = "Authorization: JWT " + token;
				return $http.put(url, data, header);
			}
		}
		return ReviewAPIService;
	});