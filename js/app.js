angular.module('app', []);

var SERVICE_DB={
    PROD_C01: {
      "title": "Controlo de Baratas",
      "img": "./image/svs/IMG_9828_0x.JPG"
    },
    PROD_C02: {
      "title": "Controlo de Formigas",
      "img": "./image/svs/formigas.jpg"
    },
    PROD_C03: {
      "title": "Controlo de Roedores",
      "img": "./image/svs/IMG_5250.JPG"
    },
    PROD_C04: {
      "title": "Controlo de Traças",
      "img": "./image/svs/tracas.jpg"
    },
    PROD_C05: {
      "title": "Controlo de Mosquitos",
      "img": "./image/svs/IMG_7286.JPG"
    },
    PROD_C06: {
      "title": "Controlo de Moscas",
      "img": "./image/svs/moscas.jpg"
    },
    PROD_C07: {
      "title": "Controlo de Pulgas",
      "img": "./image/svs/combater-pulgas-500x334.jpg"
    },
    PROD_C08: {
      "title": "Controlo de Percevejos/Bed Bugs",
      "img": "./image/svs/percevej.jpeg"
    },
    PROD_C09: {
      "title": "Controle de Aves",
      "img": "./image/svs/IMG_5509.JPG"
    }
};

angular.module('app')
.controller("CheckoutCtrl", function ($http, $scope) {
    console.info(SERVICE_DB);
    var urlParams = new URLSearchParams(window.location.search);
    var prodCode=urlParams.get("code");
    var product=SERVICE_DB[prodCode];

    $scope.product=product;
    $scope.reqObj={};

    $scope.submit = function (form) {
        if (form.$invalid) {
            console.info("bad form", form);
            return;
        }

        console.info("reqObj", $scope.reqObj);
    }
});

function items() {
    // .portfolio-item, .card-title a , p.card-text, img-fluid
    var objs=$(".portfolio-item");
    var ary=[];
    for (var i=0; i<objs.length; i++) {
        var el=$(objs[i]);
        var title=$(el).find(".card-title a").text();
        var description=$(el).find("p.card-text").text();
        var img=$(el).find("img.img-fluid").attr("src");

        ary.push({
            title: title,
            img: img
        });
    }

    return ary;
}

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});
  