class Parquimetro {
  constructor(valor) {
    this.valor = parseFloat(valor);
  }

  calcularTempo() {
    if (this.valor < 1.00) {
      return { mensagem: "Valor insuficiente.", tempo: 0, troco: this.valor };
    } else if (this.valor < 1.75) {
      return { mensagem: "Tempo de 30 minutos.", tempo: 30, troco: (this.valor - 1.00).toFixed(2) };
    } else if (this.valor < 3.00) {
      return { mensagem: "Tempo de 60 minutos.", tempo: 60, troco: (this.valor - 1.75).toFixed(2) };
    } else {
      return { mensagem: "Tempo máximo de 120 minutos.", tempo: 120, troco: (this.valor - 3.00).toFixed(2) };
    }
  }
}

function simular() {
  const inputValor = document.getElementById("valor").value;
  const parquimetro = new Parquimetro(inputValor);
  const resultado = parquimetro.calcularTempo();

  document.getElementById("resultado").innerHTML = `
    <p>${resultado.mensagem}</p>
    ${resultado.tempo > 0 ? `<p>Troco: R$ ${resultado.troco}</p>` : ""}
  `;
}
