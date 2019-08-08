angular.module('app', []);

var SERVICE_DB={
    PROD_C01: {
      id: "PROD_C01",
      title: "Controlo de Baratas",
      img: "./image/svs/IMG_9828_0x.JPG",
      description: [
          "O controlo de baratas é um desafio constante! As baratas são uma ameaça singular para as instalações onde se processa alimentos, dada a sua resistência e a sua grande capacidade de reprodução.",
          "A EDD Serviços dispõe de uma ampla gama de produtos excelentes e soluções completas para o controlo de baratas, com satisfação garantida.",
          "Peça uma avaliação sem compromisso. Os nossos técnicos estão prontos para oferecer-lhe apoio técnico com profissionalismo sempre que precisar.",          
      ]
      
    },
    PROD_C02: {
    id: "PROD_C02",
      "title": "Controlo de Formigas",
      "img": "./image/svs/formigas.jpg",
      description: [
          "Instalações como bares, restaurantes, hotéis, hospitais, escritórios, armazéns e outras instalações de armazenamento de água e produtos alimentares precisam de certificar-se de que têm os mais elevados padrões de higiene, isso significa estar livre de Formiga",
          "Conheça as nossas soluções de controlo das espécies de formigas mais comuns em Cabo Verde. Todos os nossos tratamentos são seguros para a sua família e para os seus animais de estimação e respeitam o meio ambiente. Peça uma avaliação sem qualquer compromisso.",          
      ]
    },
    PROD_C03: {
        id: "PROD_C03",
      "title": "Controlo de Roedores",
      "img": "./image/svs/IMG_5250.JPG",
      description: [
          "Para um controlo eficaz de roedores é fundamental a correcta identificação da espécie, o conhecimento da sua biologia, de seus hábitos comportamentais, suas habilidades e capacidades físicas. É preciso uma correcta avaliação do espaço a tratar.",
          "Técnicas ou métodos de controlo de roedores ineficazes podem ter um efeito inverso, resultando no aumento das colónias, agravando ainda mais a situação.",
          "Conheça os nossos planos de controlo de roedores. Peça uma avaliação sem compromisso. Os nossos técnicos estão prontos para oferecer-lhe apoio técnico com profissionalismo sempre que precisar.",          
      ]
    },
    PROD_C04: {
        id: "PROD_C04",
      "title": "Controlo de Traças",
      "img": "./image/svs/tracas.jpg",
      description: [
          "As Traças não representam propriamente um risco para a saúde. São uma Praga maléfica nas Casas pelos danos sérios que as suas larvas causam em vestuário, tecidos, peles, couros, tapetes e carpetes.",
          "Uma pequena infestação de Traças pode ser tratada com produtos comercias para amadores, mas uma infestação muito implantada requer geralmente assistência profissional.",
          "Conheça as nossas soluções de controlo das traças. Todos os nossos tratamentos são seguros para a sua família e para os seus animais de estimação e respeitam o meio ambiente. Peça uma avaliação sem qualquer compromisso.",
          "Os mosquitos representam uma grande ameaça à saúde pública, pois podem transmitir várias doenças como a febre amarela, dengue, malária, zika e alguns tipos de encefalite, filariose, etc.",
          "O controlo eficaz de mosquitos apresenta uma série de desafios tendo em conta as suas características físicas , biológicas e comportamentais. O controlo de mosquitos implica uma rigorosa análise técnica das áreas a serem tratadas, a escolha do método e técnicas de controlo adequadas. ",
          "No caso de tratamento químico, a escolha do tipo de formulação a aplicar,  sua concentração e o tipo de equipamento a utilizar devem obedecer às regras mais rigorosas, na completa observância pela preservação do meio ambiente e a salvaguarda de espécies não alvo.",
          "A EDD Serviços dispõe de uma ampla gama de produtos excelentes e soluções completas para o controlo de mosquitos nas suas instalações, com satisfação garantida.",
          "Peça uma avaliação sem compromisso. Os nossos técnicos estão prontos para oferecer-lhe apoio técnico com profissionalismo sempre que precisar."
      ]
    },
    PROD_C05: {
        id: "PROD_C05",
      "title": "Controlo de Mosquitos",
      "img": "./image/svs/IMG_7286.JPG",
      description: [
          ""
      ]

    },
    PROD_C06: {
        id: "PROD_C06",
      "title": "Controlo de Moscas",
      "img": "./image/svs/moscas.jpg",
      description: [
          "O controlo eficaz de mosquitos apresenta uma série de desafios tendo em conta as suas características físicas , biológicas e comportamentais. O controlo de mosquitos implica uma rigorosa análise técnica das áreas a serem tratadas, a escolha do método e técnicas de controlo adequadas.",
          "No caso de tratamento químico, a escolha do tipo de formulação a aplicar, a sua concentração e o tipo de equipamento a utilizar devem obedecer às regras mais rigorosas, na completa observância pela preservação do meio ambiente e a salvaguarda de espécies não alvo.",
          "A EDD Serviços dispõe de uma ampla gama de produtos excelentes e soluções completas para o controlo de mosquitos nas suas instalações, com satisfação garantida.",
          "Peça uma avaliação sem compromisso. Os nossos técnicos estão prontos para oferecer-lhe apoio técnico com profissionalismo sempre que precisar."
      ]
    },
    PROD_C07: {
        id: "PROD_C08",
        "title": "Controlo de Pulgas",
        "img": "./image/svs/combater-pulgas-500x334.jpg",
        description: [
            "As Pulgas são um problema doméstico comum, especialmente na presença Cães ou Gatos. Também se encontram frequentemente em casas onde já existiram animais de estimação.",
            "Apesar de ser possível que as Pulgas transmitam doenças, isso é muito raro de acontecer. A principal preocupação é a angústia provocada pelas picadas das Pulgas em pessoas e animais de estimação e a má reputação que pode cusar aos nossos estabelecimento.",
            "As Pulgas adultas perfuram a pele dos mamíferos e das Aves para se alimentarem de sangue, mas as larvas alimentam-se da matéria orgânica que costuma existir em tapetes e roupa de cama, pelo que uma boa higiene pode atrasar o seu ciclo de vida.",
            "Os casulos das Pulgas podem permanecer em estado latente durante mais de dois anos e são despertados pelas vibrações causadas pelos passos das pessoas. É comum as infestações de Pulgas manterem-se latentes numa casa vazia e despertarem apenas quando a casa volta a ser habitada.",
            "Se tiver algum problema com pulgas ou pretende prevenir contra futuras infestações, entre em contacto conosco e conheças as nossas soluções para controlo de pulgas.   Peça uma avaliação sem compromisso. Os nossos técnicos estão prontos para oferecer-lhe  apoio técnico com profissionalismo sempre que precisa",
        ]
    },
    PROD_C08: {
        id: "PROD_C08",
      "title": "Controlo de Percevejos/Bed Bugs",
      "img": "./image/svs/percevej.jpeg",
      description: [
          "Poucas  pragas colocam  problemas de controlo tão complexos como os percevejos da cama. Difíceis de localizar, persistentes e cada vez mais invasivos, os percevejos da cama requerem uma experiência profissional considerável para eliminá-lo",
          "Para um controlo eficaz e seguro dos percevejos a EDD-Serviços dispõe de métodos   e   técnicas   de   controle   100%   ecológico,   sem   a   utilização   de biocidas, garantindo um nível de eficácia a 100%. Os nossos métodos de controlo de percevejos não implicam o isolamento do espaço a ser tratado, permitindo   a   sua   utilização   logo   após   o   tratamento,   traduzindo-se   em ganhos económicos consideráveis para os nossos clientes, principalmente os do sector hoteleiro.",
          "Contacte-nos agora  e  tenha um suporte  técnico gratuito ou  peça uma avaliação das suas instalações sem qualquer compromisso."
      ]
    },
    PROD_C09: {
        id: "PROD_C09",
      "title": "Controle de Aves",
      "img": "./image/svs/IMG_5509.JPG",
      description: [
          "As aves podem ser consideradas verdadeiras pragas e causadoras incómodo e de inúmeros danos materiais para os edifícios onde pousam e  nidificam. Podem mesmo ser transmissoras de doenças como a  salmonelose, toxoplasmose e pneumonia.",
          "A EDD – Serviços disponibiliza serviços de dissuasão de pássaros, respeitando as normas ambientais e de protecção de animais. Os nossos produtos para controlo de pássaros são 100% naturais, não tóxicos, seguros para o homem, não causando quaisquer danos para espécies não alvo ou o  meio ambiente.",
          "Contacte-nos agora  e  tenha um suporte  técnico gratuito ou  peça uma avaliação das suas instalações sem qualquer compromisso."
      ]
    }
};

angular.module('app')
.controller("CheckoutCtrl", function ($http, $scope) {
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
})
.controller("ServiceItemCtrl", function ($scope) {
    var urlParams = new URLSearchParams(window.location.search);
    var prodCode=urlParams.get("code");
    var product=SERVICE_DB[prodCode];

    $scope.product=product;
    $scope.product.description_prod = product.description.splice(0, product.description.length-1);
    $scope.product.description_call = product.description[product.description.length-1]; // last
})
;

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
  