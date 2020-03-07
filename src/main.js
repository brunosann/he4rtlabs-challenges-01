document.querySelector('.btn').addEventListener('click', ()=>{
    let hrs = document.querySelector('#hrD');
    let dias = document.querySelector('#dia');
    let diasFerias = document.querySelector('#ferias');
    let valorProjeto = document.querySelector('#vProjeto');

    valorHora = (valorProjeto.value / (dias.value * 4 * hrs.value) ) + ( ( diasFerias.value * dias.value * hrs.value ) )

    document.querySelector('.resultado').innerHTML = `R$ ${valorHora}`;

    const limpar = ()=>innerHTML = '';
    hrs.value = limpar();
    dias.value = limpar();
    diasFerias.value = limpar();
    valorProjeto.value = limpar();
})