var app = angular.module("MyApp", []);
app.controller("MyController", function ($scope) {

    $scope.users = [{
            "id": "1",
            "name": "Aaron Miles",
            "email": "aaron@mailinator.com",
            "role": "member"
        },
        {
            "id": "2",
            "name": "Aishwarya Naik",
            "email": "aishwarya@mailinator.com",
            "role": "member"
        },
        {
            "id": "3",
            "name": "Arvind Kumar",
            "email": "arvind@mailinator.com",
            "role": "admin"
        },
        {
            "id": "4",
            "name": "Caterina Binotto",
            "email": "caterina@mailinator.com",
            "role": "member"
        },
        {
            "id": "5",
            "name": "Chetan Kumar",
            "email": "chetan@mailinator.com",
            "role": "member"
        },
        {
            "id": "6",
            "name": "Jim McClain",
            "email": "jim@mailinator.com",
            "role": "member"
        },
        {
            "id": "7",
            "name": "Mahaveer Singh",
            "email": "mahaveer@mailinator.com",
            "role": "member"
        },
        {
            "id": "8",
            "name": "Rahul Jain",
            "email": "rahul@mailinator.com",
            "role": "admin"
        },
        {
            "id": "9",
            "name": "Rizan Khan",
            "email": "rizan@mailinator.com",
            "role": "member"
        },
        {
            "id": "10",
            "name": "Sarah Potter",
            "email": "sarah@mailinator.com",
            "role": "admin"
        },
        {
            "id": "11",
            "name": "Keshav Muddaiah",
            "email": "keshav@mailinator.com",
            "role": "member"
        },
        {
            "id": "12",
            "name": "Nita Ramesh",
            "email": "nita@mailinator.com",
            "role": "member"
        },
        {
            "id": "13",
            "name": "Julia Hunstman",
            "email": "julia@mailinator.com",
            "role": "member"
        },
        {
            "id": "14",
            "name": "Juan Alonso",
            "email": "juan@mailinator.com",
            "role": "admin"
        },
        {
            "id": "15",
            "name": "Gabriel Montoya",
            "email": "gabriel@mailinator.com",
            "role": "admin"
        },
        {
            "id": "16",
            "name": "Beatrice Iglesias",
            "email": "beatrice@mailinator.com",
            "role": "admin"
        },
        {
            "id": "17",
            "name": "Sarah Symms",
            "email": "sarah.s@mailinator.com",
            "role": "admin"
        },
        {
            "id": "18",
            "name": "Patrick Pinheiro",
            "email": "patrick@mailinator.com",
            "role": "admin"
        },
        {
            "id": "19",
            "name": "Anand Patel",
            "email": "anand@mailinator.com",
            "role": "member"
        },
        {
            "id": "20",
            "name": "Kishore Kalburgi",
            "email": "kishore@mailinator.com",
            "role": "member"
        },
        {
            "id": "21",
            "name": "Rebecca Norris",
            "email": "rebecca@mailinator.com",
            "role": "member"
        },
        {
            "id": "22",
            "name": "Özgür Başak",
            "email": "ozgur@mailinator.com",
            "role": "member"
        },
        {
            "id": "23",
            "name": "Robin Andersen",
            "email": "robin@mailinator.com",
            "role": "member"
        },
        {
            "id": "24",
            "name": "Nandini Kumar",
            "email": "nandini@mailinator.com",
            "role": "member"
        },
        {
            "id": "25",
            "name": "Nikita Smith",
            "email": "nikita@mailinator.com",
            "role": "member"
        },
        {
            "id": "26",
            "name": "Colton Doe",
            "email": "colton@mailinator.com",
            "role": "member"
        },
        {
            "id": "27",
            "name": "Alain Senna",
            "email": "alain@mailinator.com",
            "role": "member"
        },
        {
            "id": "28",
            "name": "Ashwin Jain",
            "email": "ashwin@mailinator.com",
            "role": "member"
        },
        {
            "id": "29",
            "name": "Seema Bhatt",
            "email": "seema@mailinator.com",
            "role": "member"
        },
        {
            "id": "30",
            "name": "Kayla Scarpinski",
            "email": "kayla@mailinator.com",
            "role": "member"
        },
        {
            "id": "31",
            "name": "Ajay Ghosh",
            "email": "ajay@mailinator.com",
            "role": "member"
        },
        {
            "id": "32",
            "name": "Chris Lindberg",
            "email": "chris@mailinator.com",
            "role": "member"
        },
        {
            "id": "33",
            "name": "Christina Mourujärvi",
            "email": "christina@mailinator.com",
            "role": "member"
        },
        {
            "id": "34",
            "name": "Mikhail Bill",
            "email": "mikhail@mailinator.com",
            "role": "member"
        },
        {
            "id": "35",
            "name": "Eino Göregen",
            "email": "eino@mailinator.com",
            "role": "member"
        },
        {
            "id": "36",
            "name": "Zachariah Johansson",
            "email": "zacharaiah@mailinator.com",
            "role": "member"
        },
        {
            "id": "37",
            "name": "Aimaan Mohammed",
            "email": "aimaan@mailinator.com",
            "role": "admin"
        },
        {
            "id": "38",
            "name": "Aika Tsunoda",
            "email": "aika@mailinator.com",
            "role": "member"
        },
        {
            "id": "39",
            "name": "Kimiko Minamoto",
            "email": "kimiko@mailinator.com",
            "role": "member"
        },
        {
            "id": "40",
            "name": "Alyona Baginskaite",
            "email": "alyona@mailinator.com",
            "role": "member"
        },
        {
            "id": "41",
            "name": "Anirudh Mukherjee",
            "email": "anirudh@mailinator.com",
            "role": "member"
        },
        {
            "id": "42",
            "name": "Alyona Gov",
            "email": "alyonagov@mailinator.com",
            "role": "member"
        },
        {
            "id": "43",
            "name": "Robin Singh",
            "email": "robin@mailinator.com",
            "role": "member"
        },
        {
            "id": "44",
            "name": "Vijay Vasudevan",
            "email": "vijayv@mailinator.com",
            "role": "member"
        },
        {
            "id": "45",
            "name": "Steve Smith",
            "email": "steve@mailinator.com",
            "role": "member"
        },
        {
            "id": "46",
            "name": "Anirudh Banerjee",
            "email": "anirudhb@mailinator.com",
            "role": "member"
        }
    ]

    $scope.users.map(user => {
        user.isSelected = false;
        user.isEdit = false;
        user.isShow = true;
        user.isDeleted = false;
        return user;
    })

    $scope.allCheck = false;
    $scope.userCount = $scope.users.length;

    // Initial Count User List Before any manipulation
    $scope.count = $scope.users.length;

    //  function for getting users from the list based on the search field
    $scope.searchUser = function () {
        console.log("inside search")
        //  initially we will store user's array in temp array 

        if ($scope.users.length === $scope.count) {
            $scope.tempusers = angular.copy($scope.users);
        }
        if ($scope.users.length === 0) {
            $scope.users = angular.copy($scope.tempusers);
        }
        
        var search = $scope.search.toLowerCase();
        // /Another temp array to get users according to the search
        $scope.tempArray = [];
        var name = "";
        var email = "";
        var role = "";
        for (let index = 0; index < $scope.users.length; index++) {
            name = angular.copy($scope.users[index].name);
            email = angular.copy($scope.users[index].email);
            role = angular.copy($scope.users[index].role);
            if (name.toLowerCase().includes(search) || email.toLowerCase().includes(search) || role.toLowerCase().includes(search)) {
                $scope.tempArray.push($scope.users[index]);
            }
        }
        $scope.users = $scope.tempArray;
        if (!$scope.search) {
            $scope.users = angular.copy($scope.tempusers);
        }
        $scope.userCount = $scope.users.length;
    };

    // function to update the user 
    $scope.updateUser = function (obj) {
        for (let index = 0; index < $scope.users.length; index++) {
            if (obj.id === $scope.users[index].id) {
                $scope.users[index] = obj;
                break;
            }
        }
    }

    // function to delete single user
    $scope.deleteUser = function (obj) {
        for (let index = 0; index < $scope.users.length; index++) {
            if (obj.id === $scope.users[index].id) {
                $scope.users.splice(index, 1);
                $scope.userCount = --$scope.userCount
                break;
            }
        }
    }

    // pagination start
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.mySelect = 10;

    $scope.showSelectValue = function (mySelect) {
        $scope.mySelect = mySelect;
        $scope.paginate = function (value) {
            var begin, end, index;
            begin = ($scope.currentPage - 1) * $scope.mySelect;
            end = begin + $scope.mySelect;
            index = $scope.users.indexOf(value);
            return (begin <= index && index < end);
        };
        // console.log(mySelect);
    };
    $scope.showSelectValue($scope.mySelect);

    $scope.numOfPages = function () {
        return Math.ceil($scope.users.length / 10);
    };

    // pagination end

    $scope.selectCurrentPageValues = function () {
        let start = ($scope.currentPage - 1) * $scope.mySelect
        let end = start + $scope.mySelect;

        for (let index = start; index < end; index++) {
            if ($scope.users[index]) {
                $scope.users[index].isSelected = true;
                $scope.users[index].isDeleted = true;
            }
        }

    }


    // select multiple entires
    $scope.selectUser = function (obj) {
        for (let index = 0; index < $scope.users.length; index++) {
            if (obj.id === $scope.users[index].id) {
                $scope.users[index].isSelected = true;
            }
        }
    }

    // delete multiple entries
    $scope.deleteMultipleUser = function () {
        for (let index = 0; index < $scope.users.length; index++) {
            if ($scope.users[index].isSelected) {
                $scope.users[index].isDeleted = true;
            }
        }
        $scope.updateUserInternally();
        $scope.allCheck = false
    }

    // filter and get required entries
    $scope.updateUserInternally = function () {
        $scope.users = $scope.users.filter(user => {
            if (!user.isDeleted) {
                return user;
            }
        })

        $scope.userCount = $scope.users.length;
    }
});