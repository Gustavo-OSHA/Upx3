function criarFormulario() {
  var formulario = document.createElement("form");
  formulario.style.display = "flex";
  formulario.style.flexDirection = "column";
  formulario.style.alignItems = "center";

  var labelEstado = document.createElement("label");
  labelEstado.innerHTML = "Estado (Sigla): ";
  formulario.appendChild(labelEstado);

  var inputEstado = document.createElement("input");
  inputEstado.setAttribute("type", "text");
  inputEstado.setAttribute("maxlength", "2");
  formulario.appendChild(inputEstado);

  var labelCidade = document.createElement("label");
  labelCidade.innerHTML = "Cidade: ";
  formulario.appendChild(labelCidade);

  var inputCidade = document.createElement("input");
  inputCidade.setAttribute("type", "text");
  formulario.appendChild(inputCidade);

  var labelConsumo = document.createElement("label");
  labelConsumo.innerHTML = "Consumo médio mensal (kWh): ";
  formulario.appendChild(labelConsumo);

  var inputConsumo = document.createElement("input");
  inputConsumo.setAttribute("type", "number");
  inputConsumo.setAttribute("min", "0");
  inputConsumo.setAttribute("step", "1");
  formulario.appendChild(inputConsumo);

  var labelValor = document.createElement("label");
  labelValor.innerHTML = "Valor kWh da sua cidade (R$): ";
  formulario.appendChild(labelValor);

  var inputValor = document.createElement("input");
  inputValor.setAttribute("type", "number");
  inputValor.setAttribute("step", "any");
  inputValor.setAttribute("min", "0");
  formulario.appendChild(inputValor);

  var btnSubmit = document.createElement("input");
  btnSubmit.setAttribute("type", "submit");
  btnSubmit.setAttribute("value", "Calcular");
  formulario.appendChild(btnSubmit);

  var btnLimpar = document.createElement("button");
  btnLimpar.innerHTML = "Nova Consulta";
  formulario.appendChild(btnLimpar);

  var mensagemErro = document.createElement("p");
  mensagemErro.style.color = "red";
  mensagemErro.style.display = "none";
  mensagemErro.innerHTML = "Todos os campos devem ser preenchidos!";
  formulario.appendChild(mensagemErro);

  document.body.appendChild(formulario);

  var resultados = document.createElement("div");
  resultados.style.display = "flex";
  resultados.style.flexDirection = "column";
  resultados.style.alignItems = "center";

  formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    var estado = inputEstado.value;
    var cidade = inputCidade.value;
    var consumo = parseFloat(inputConsumo.value);
    var valor = parseFloat(inputValor.value);

    if (estado && cidade && !isNaN(consumo) && !isNaN(valor)) {
      var incidenciaSolarMedia = 4.0;
      var capacidadeMinima = consumo * 0.83 < 1 ? 1 : (consumo * 0.83) / 100;
      var areaOcupada = Math.ceil((consumo / 31)) * 1.70;
      var pesoTelhado = Math.ceil((consumo / 31)) * 25.5;
      var producaoEstimada = consumo * 14.4;
      var sustentabilidade = 3.4 * consumo;
      var economiaEstimada = 12 * (valor * consumo);

      resultados.innerHTML = "<br>Incidência Solar Média: " + incidenciaSolarMedia.toFixed(2) + " Kwh/M²<br>" +
                             "Capacidade (potencia mínima necessária): " + capacidadeMinima.toFixed(2) + " Kwp" + "<br>" +
                             "Área Ocupada pelo sistema no telhado: " + areaOcupada + "m²<br>" +
                             "Peso sobre telhado: " + pesoTelhado + "Kg<br>" +
                             "Produção estimada de energia: " + producaoEstimada.toFixed(2) + "KWh / Ano<br>" +
                             "Sustentabilidade: " + sustentabilidade.toFixed(2) + " Kg CO² Ano<br>" +
                             "Economia estimada: R$" + economiaEstimada.toFixed(2);

      mensagemErro.style.display = "none";
    } else {
      resultados.innerHTML = "";
      mensagemErro.style.display = "block";
    }
  });

  btnLimpar.addEventListener("click", function() {
    inputEstado.value = "";
    inputCidade.value = "";
    inputConsumo.value = "";
    inputValor.value = "";
    resultados.innerHTML = "";
    mensagemErro.style.display = "none";
  });

  document.body.appendChild(resultados);
}

// Chamada da função para criar o formulário
criarFormulario();
