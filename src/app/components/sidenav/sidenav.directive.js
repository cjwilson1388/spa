(function() {
  'use strict';

  angular
    .module('one')
    .directive('sideNav', sideNav);

  /** @ngInject */
  function sideNav() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sidenav/sidenav.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
