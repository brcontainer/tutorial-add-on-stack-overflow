(function (browser) {

    var valorX = 0, valorY = 0, valorZ = 0;

    browser.runtime.onMessage.addListener(function(request, sender, sendFeedback) {

        switch (request) {
            case "acaoX":
                sendFeedback("Foi chamado a ação X");
                valorX++; //Incrementa em valorX toda vez que chamar acaoZ
                break;

            case "acaoY":
                sendFeedback("Foi chamado a ação Y");
                valorY++; //Incrementa em valorY toda vez que chamar acaoZ
                break;

            case "acaoZ":
                sendFeedback("Foi chamado a ação Z");
                valorZ++; //Incrementa em valorZ toda vez que chamar acaoZ
                break;

            //Será usado para ver na aba quantas ações de cada foram chamadas
            case "total":
                sendFeedback({
                    "x": valorX,
                    "y": valorY,
                    "z": valorZ
                });
                break;
        }
    });
})(chrome||browser); //compatibilidade para firefox e chrome
