angular.module("bookApp").service("dataService", function ($http, $q) {

    this.Get = function () {
        return $http.get('http://localhost:4000/api/books')
        .then(function (data) {
            if (data.status == 200) {
                return data;
                console.log(data);
            } else {
                $q.error();
            }
        });
    }


    this.Post = function (add) {
      return  $http.post('http://localhost:4000/api/books', add).then(function (data) {
            if (data.status == 200) {
                return data;
                console.log(data);
            } else {
                $q.error();
            }
        });
    }

    this.Delete = function (id) {

        return $http.delete('http://localhost:4000/api/book/' + id).then(function (id) {
        });
    }



    this.Getbyid = function (id) {
        return $http.get('http://localhost:4000/api/book/' + id).then(function (data) {
            if (data.status == 200) {
                return data;
                console.log(data);
            } else {
                $q.error();
            }
        });
    }


    this.Update = function (data) {

       return $http.put('http://localhost:4000/api/books', data).then(function (data) {
            if (data.status == 200) {
                return data;
                console.log(data);
            } else {
                $q.error();
            }
        });
    }


});