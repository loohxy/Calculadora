function calcular() {
    const n1 = Number(document.getElementById('n1').value);
    const n2 = Number(document.getElementById('n2').value);
    const operacao = Number(document.getElementById('operacao').value);
    let resultado;

    if (isNaN(n1) || isNaN(n2)) {
        exibirResultado("⚠️ Por favor, insira valores válidos!");
        return;
    }

    switch (operacao) {
        case 1:
            resultado = `${n1} + ${n2} = ${n1 + n2}`;
            break;
        case 2:
            resultado = `${n1} - ${n2} = ${n1 - n2}`;
            break;
        case 3:
            resultado = `${n1} × ${n2} = ${n1 * n2}`;
            break;
        case 4:
            resultado = (n2 === 0) ? "❌ Não é possível dividir por zero!" : `${n1} ÷ ${n2} = ${n1 / n2}`;
            break;
        case 5:
            resultado = (n2 === 0) ? "❌ Não existe resto da divisão por zero!" : `O resto de ${n1} ÷ ${n2} é ${n1 % n2}`;
            break;
        case 6:
            resultado = `${n1} ^ ${n2} = ${n1 ** n2}`;
            break;
        default:
            resultado = "⚠️ Operação inválida!";
    }

    exibirResultado(resultado);
}

function exibirResultado(texto) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = texto;
    resultadoDiv.classList.remove('mostrar');
    void resultadoDiv.offsetWidth;
    resultadoDiv.classList.add('mostrar');
}
