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
      ],
      eList: [
          './image/IMG_9830.JPG',
          './image/IMG_9834.JPG',
          './image/IMG_7245.JPG',
          './image/IMG_7246.JPG',
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
      "img": "./image/rato.png",
      description: [
          "Para um controlo eficaz de roedores é fundamental a correcta identificação da espécie, o conhecimento da sua biologia, de seus hábitos comportamentais, suas habilidades e capacidades físicas. É preciso uma correcta avaliação do espaço a tratar.",
          "Técnicas ou métodos de controlo de roedores ineficazes podem ter um efeito inverso, resultando no aumento das colónias, agravando ainda mais a situação.",
          "Conheça os nossos planos de controlo de roedores. Peça uma avaliação sem compromisso. Os nossos técnicos estão prontos para oferecer-lhe apoio técnico com profissionalismo sempre que precisar.",          
      ],
      eList: [
        './image/Rato-equip.jpg',
        './image/roedores.JPG'
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
      ]
    },
    PROD_C05: {
        id: "PROD_C05",
        "title": "Controlo de Mosquitos",
        "img": "./image/12640.png",
        description: [
            "Os mosquitos representam uma grande ameaça à saúde pública, pois podem transmitir várias doenças como a febre amarela, dengue, malária, zika e alguns tipos de encefalite, filariose, etc.",
            "O controlo eficaz de mosquitos apresenta uma série de desafios tendo em conta as suas características físicas , biológicas e comportamentais. O controlo de mosquitos implica uma rigorosa análise técnica das áreas a serem tratadas, a escolha do método e técnicas de controlo adequadas. ",
            "No caso de tratamento químico, a escolha do tipo de formulação a aplicar,  sua concentração e o tipo de equipamento a utilizar devem obedecer às regras mais rigorosas, na completa observância pela preservação do meio ambiente e a salvaguarda de espécies não alvo.",
            "A EDD Serviços dispõe de uma ampla gama de produtos excelentes e soluções completas para o controlo de mosquitos nas suas instalações, com satisfação garantida.",
            "Peça uma avaliação sem compromisso. Os nossos técnicos estão prontos para oferecer-lhe apoio técnico com profissionalismo sempre que precisar."
        ],
        eList: [
            './image/YGT1.jpg',
            './image/YGT2.jpg',
            './image/svs/IMG_7286.JPG',
            './image/IMG_7280.JPG'
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
      ],
      eList: [
          './image/IMG_7252.JPG'
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
      ],
      eList: [
          './image/IMG_5503.JPG',
          './image/IMG_5509.JPG',
          './image/IMG_5511.JPG',
          './image/bye-birds.jpg',
      ]
    },
    PROD_S10: {
        id: "PROD_S10",
        title: "Higiene e Segurança Alimentar",
        img: "./image/higiene-seg-alimentar.jpeg"
    },
    PROD_S11: {
        id: "PROD_S11",
        title: "Formação & capacitação",
        img: "./image/svs/formacao.jpg"
    },
};

var conf = {
    // PUBLIC_API: "http://127.0.0.1:9000"
    PUBLIC_API: "https://publica.enterstarts.com"
};

angular.module('app')
.controller("CheckoutCtrl", function ($http, $scope) {
    var urlParams = new URLSearchParams(window.location.search);
    var prodCode=urlParams.get("code");
    var product=SERVICE_DB[prodCode];

    $scope.product=product;
    $scope.reqObj={
        msg: "Desejo solicitar o servico de " + product.title
    };
    $scope.is_done=false;

    $scope.submit = function (form) {
        if (form.$invalid) {
            console.info("bad form", form);
            return;
        }

        $scope.reqObj.service_id=product.id;
        $scope.reqObj.service_descr=product.title;
        $scope.reqObj.org_id="1a01bde072f04dac";

        $scope.loading_request=true;
        $scope.success=false;
        $scope.error=false;

        $http.post(conf.PUBLIC_API+"/request-service", $scope.reqObj)
        .then(function (Resp) {
            console.info("response: ", Resp);
            var obj=Resp.data;
            $scope.loading_request=false;
            $scope.success=true;
            $scope.is_done=true;

        }, function (Err) {
            console.error("Err: ", Err);     
            $scope.loading_request=false;
            $scope.error=true;       
        });
    }
})
.controller("ContactCtrl", function ($http, $scope) {
    var urlParams = new URLSearchParams(window.location.search);
    var prodCode=urlParams.get("code");

    $scope.obj={
        msg: 'Ola, gostaria de saber mais informações'
    };
    $scope.is_done=false;

    $scope.submit = function (form) {
        if (form.$invalid) {
            console.info("bad form", form);
            return;
        }

        $scope.loading_request=true;
        $scope.success=false;
        $scope.error=false;

        var obj={
            org_id: '1a01bde072f04dac',
            user_name: $scope.obj.name,
            user_email: $scope.obj.email,
            user_phone: $scope.obj.phone,
            msg: $scope.obj.msg,
            channel: 'WEBSITE'
        };

        $http.post(conf.PUBLIC_API+"/send-contact-msg", obj)
        .then(function (Resp) {
            console.info("response: ", Resp);
            var obj=Resp.data;
            $scope.loading_request=false;
            $scope.success=true;
            $scope.is_done=true;

        }, function (Err) {
            console.error("Err: ", Err);     
            $scope.loading_request=false;
            $scope.error=true;       
        });
    }
})

.controller("ServiceItemCtrl", function ($scope) {
    var urlParams = new URLSearchParams(window.location.search);
    var prodCode=urlParams.get("code");

    console.info("product-code: ", prodCode);
    var product=SERVICE_DB[prodCode];

    $scope.product=product;
    if (product.description) {
        $scope.product.description_call = product.description[product.description.length-1]; // last
        $scope.product.description_prod = product.description.splice(0, product.description.length-1);
    }
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
  