"use strict";

function MemberController($scope) {
    $scope.mode = "Browse";

    $scope.members = [];
    $scope.inBrowseMode = function (member) {
        return $scope.mode === "Browse";
    }

    $scope.inEditMode = function (member) {
        return $scope.mode === "Edit";
    }

     $scope.reset = function () {
         $.get('members/getmembers', function (data) {
             $scope.members = data.members;
             $scope.mode = "Browse";
             $scope.$apply();
        });
     }

     $scope.reset();

    $scope.memberText = "Nieuw";

    $scope.totalMembers = function () {
        return $scope.members.length;
    }

    $scope.startEdit = function (member) {
        member.originalName = member.name;
        member.inEditMode = true;
    };

    $scope.saveMember = function (member) {
        member.inEditMode = false;
        member.originalName = null;
    };

    $scope.cancelMember = function (member) {
        member.name = member.originalName;
        member.inEditMode = false;
        member.originalName = null;
    };

    $scope.addMember = function () {
        $scope.members.push({ name: $scope.memberText });
    };
}