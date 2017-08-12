app.controller('myController', ["$scope","myService", function($scope, myService){
	$scope.loading = true;
	$scope.records = [];
	$scope.error = null;
	$scope.getConfiguration = function(){
		myService.getList().then(function(response){
			$scope.loading = false;
			$scope.records = response;
		}).catch(function(error){
			$scope.loading = false;
			$scope.error = error;
			console.error(error);
		});
	}
	$scope.editRecord = function(record){
		$scope.loading=true;
		var data = {
		  "idtableClientSystemConfigId": record.idtableClientSystemConfigId,
		  "tableClientSystemConfigConfigName": record.tableClientSystemConfigConfigName,
		  "tableClientSystemConfigValue": record.update,
		  "tableClient": {
		    "idtableClientId": record.tableClient.idtableClientId,
		    "tableClientCompanyName": record.tableClient.tableClientCompanyName
		  }
		}
		myService.updateRecord(data,record.idtableClientSystemConfigId).then(function(response){
			$scope.loading = false;
			$scope.records[record.idtableClientSystemConfigId-1] = response;
		}).catch(function(error){
			console.error(error);
		})
	}
}]);