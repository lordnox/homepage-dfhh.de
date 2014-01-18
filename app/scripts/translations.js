
angular.module('application').config(function($translateProvider) {
  $translateProvider.translations({
    app: {
      news            : { menuName: "News" },
      discofox        : { menuName: "Discofox" },
      westcoastswing  : { menuName: "West Coast Swing" },
      styling         : { menuName: "Lady/Men Styling" },
      workshops       : { menuName: "Workshops" },
      veranstaltungen : { menuName: "Veranstaltungen" },
      trainerin       : { menuName: "Trainerin" },
      anmeldungen     : { menuName: "Anmeldungen" }
    }
  });
})
