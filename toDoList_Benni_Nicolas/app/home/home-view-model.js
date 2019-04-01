var observableModule = require("tns-core-modules/data/observable");

function HomeViewModel() {
  var viewModel = observableModule.fromObject({

    onItemTap: function (args) {
      console.log('Item with index: ' + args.index + ' tapped');
    },

    onButtonTap: function () {
      console.log("Button was pressed");
    },
    listeTaches: [
      ["Faire les courses", "Poubelle", "Garagiste", "Monter meuble", "Garder  ma nièce", "Acheter du tabac", "RDV notaire", "Préparer le déménagement"],
      ["Oeufs, salade, saucisson, pommes, bonbons", "Sortir la poubelle", "Faire réparer le pneu de la 206", "Monter le meuble Ikea acheté la semaine dernière", "Garder ma nièce le soir du 30/03, soirée crêpes", "Penser à reprendre du tabac demain", "Prendre rendez-vous chez le notaire le plus tôt possible", "Mettre en carton tout ce qui ne sera plus utilisé avant le déménagement"],
      ["25/03/2019", "24/03/2019", "20/03/2019", "23/03/2019", "24/03/2019", "20/03/2019", "22/03/2019", "18/03/2019"],
      ["0", "0", "0", "1", "0", "2", "2", "1"]
    ]
  });

  return viewModel;
}

module.exports = HomeViewModel;
