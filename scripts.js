const btnSortear = document.getElementById("sortear-btn");
const resultadosDiv = document.getElementById("resultados");

btnSortear.addEventListener("click", () => {
  const quantidade = parseInt(document.getElementById("num-quantidade").value);
  const inicio = parseInt(document.getElementById("range-inicio").value);
  const fim = parseInt(document.getElementById("range-fim").value);

  if (
    isNaN(quantidade) ||
    isNaN(inicio) ||
    isNaN(fim) ||
    quantidade <= 0 ||
    inicio >= fim
  ) {
    alert("Por favor, insira valores válidos.");
    return;
  }

  const numeros = [];
  while (numeros.length < quantidade) {
    const numero = Math.floor(Math.random() * (fim - inicio + 1)) + inicio;
    if (!numeros.includes(numero)) {
      numeros.push(numero);
    }
  }

  resultadosDiv.innerHTML = ""; 
  numeros.forEach((numero, index) => {
    setTimeout(() => {
      const span = document.createElement("span");
      span.textContent = numero;
      span.className = "result-number";
      resultadosDiv.appendChild(span);
    }, index * 500);
  });
});
