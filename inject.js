(function (browser) {
    function requisitarAcao(acao, callback) {
        if (browser && browser.runtime && browser.runtime.sendMessage) {
            browser.runtime.sendMessage(acao, function (response) {
                callback(response);
            });
        }
    }

    var gerado = false;

    //Cria 3 botões no final da página
    function gerarBotoes() {
        if (gerado) return; //Impede que gere mais de uma vez

        gerado = true;

        var btnX = document.createElement("button"),
            btnY = document.createElement("button"),
            btnZ = document.createElement("button"),
            btnMostrarTotal = document.createElement("button");

        btnX.textContent = "Chama ação X";
        btnY.textContent = "Chama ação Y";
        btnZ.textContent = "Chama ação Z";
        btnMostrarTotal.textContent = "Total";

        btnX.onclick = function () {
            requisitarAcao("acaoX", function (resposta) {
                alert(resposta);
            });
        };

        btnY.onclick = function () {
            requisitarAcao("acaoY", function (resposta) {
                alert(resposta);
            });
        };

        btnZ.onclick = function () {
            requisitarAcao("acaoZ", function (resposta) {
                alert(resposta);
            });
        };

        btnMostrarTotal.onclick = function () {
            requisitarAcao("total", function (resposta) {
                var totalResposta = [
                    "vezes que chamou a ação X:" + resposta.x,
                    "vezes que chamou a ação Y:" + resposta.y,
                    "vezes que chamou a ação Z:" + resposta.z
                ];

                alert(totalResposta.join("\n"));
            });
        };

        document.body.appendChild(btnX);
        document.body.appendChild(btnY);
        document.body.appendChild(btnZ);
        document.body.appendChild(btnMostrarTotal);
    }

    if (/^(interactive|complete)$/.test(document.readyState)) {
        gerarBotoes();
    } else {
        document.addEventListener("DOMContentLoaded", gerarBotoes);
        window.addEventListener("load", gerarBotoes);
    }
})(chrome||browser); //compatibilidade para firefox e chrome
