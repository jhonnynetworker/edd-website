var db=[{"title":"Controlo de Baratas","description":"\n O controlo de baratas é um desafio constante! As baratas são uma ameaça\n singular para as instalações onde se processa alimentos, dada a sua\n resistência e a sua grande capacidade de reprodução. \n ","img":"./image/svs/IMG_9828_0x.JPG"},{"title":"Controlo de Formigas","description":"\n As formigas são mais do que apenas um incómodo. Além de dar picadas\n dolorosas, podem custar-lhe dinheiro e prejudicar sua reputação. Isto\n acontece particularmente nas organizações que lidam com alimentos ou\n que tenham a necessidade de manter áreas estéreis.\n ","img":"./image/svs/formigas.jpg"},{"title":"Controlo de Roedores","description":"\n A presença de roedores em áreas urbanas gera perdas econômicas\n avultadas e agravos sanitários de grande relevância ao homem. O roedor\n participa da cadeia epidemiológica de pelo menos trinta doenças\n \n transmitidas ao homem, entre os quais a Leptospirose, peste e as\n hantaviroses.\n ","img":"./image/svs/IMG_5250.JPG"},{"title":"Controlo de Traças","description":"\n As Traças não representam propriamente um risco para a saúde. São uma\n Praga maléfica nas Casas pelos danos sérios que as suas larvas causam em\n vestuário, tecidos, peles, couros, tapetes e carpetes.\n ","img":"./image/svs/tracas.jpg"},{"title":"Controlo de Mosquitos","description":"\n Os mosquitos representam uma grande ameaça à saúde pública, pois\n podem transmitir várias doenças como a febre amarela, dengue, malária,\n zika e alguns tipos de encefalite, filariose, etc..\n ","img":"./image/svs/IMG_7286.JPG"},{"title":"Controlo de Moscas","description":"\n Existem mais de 120 mil espécies de Moscas em todo o mundo. As Moscas\n são realmente uma praga em todo o sentido da palavra. Elas representam\n um enorme risco para a sua saúde pública. Podem infestar a toda sua Casa\n ou a sua Empresa e propagar doenças.\n ","img":"./image/svs/moscas.jpg"},{"title":"Controlo de Pulgas","description":"\n As Pulgas são um problema doméstico comum, especialmente quando há\n Cães ou Gatos. Também se encontram frequentemente em casas onde já\n existiram animais de estimação. \n ","img":"./image/svs/combater-pulgas-500x334.jpg"},{"title":"Controlo de Percevejos/Bed Bugs","description":"\n Poucas pragas colocam problemas de controlo tão complexos como os\n percevejos da cama. Difíceis de localizar, persistentes e cada vez mais\n invasivos, os percevejos da cama requerem uma experiência profissional\n considerável para eliminá-los. \n ","img":"./image/svs/percevej.jpeg"},{"title":"Controle de Aves","description":"\n As aves podem ser consideradas verdadeiras pragas ,e causadoras\n incómodo e de inúmeros danos materiais para os edifícios onde pousam e\n nidificam. Podem mesmo ser transmissoras de doenças como a\n salmonelose, toxoplasmose e pneumonias.\n ","img":"./image/svs/IMG_5509.JPG"}];

angular.module('app', []);

angular.module('app')
.controller("CheckoutCtrl", function ($http, $scope) {



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
            description: description,
            img: img
        });
    }

    return ary;
}

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});
  