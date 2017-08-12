app.service("myService",["$http",function($http){
	var self = this;
	self.getList = function(){
	    return $http({
	      method: 'GET',
	      headers : { 'Content-Type': 'application/json'},
	      url: 'https://devbackend.gscmaven.com:8443/omsservices/webapi/systemconfig'
	    }).then(function(response){
	      return response.data;
	    });
	}
	self.updateRecord = function(data,recordNumber){
	    return $http({
	      method: 'PUT',
	      headers : { 'Content-Type': 'application/json'},
	      url: 'https://devbackend.gscmaven.com:8443/omsservices/webapi/systemconfig/'+recordNumber,
	      data:data
	    }).then(function(response){
	      return response.data;
	    });
	}
}]);