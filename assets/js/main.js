( function() {
  const btnPesquisar = document.querySelector('#btnPesquisar')
  const btnLimpar = document.querySelector('#btnLimpar')
  const rua = document.querySelector("#rua");
  const complemento = document.querySelector("#complemento");
  const bairro = document.querySelector("#bairro");
  const cidade = document.querySelector("#cidade");
  const estado = document.querySelector("#estado");


  btnPesquisar.addEventListener('click', (event)=>{
    event.preventDefault()
    const cep = document.querySelector('#cep')
    const valorDoCep = cep.value
    const url = `https://viacep.com.br/ws/${valorDoCep}/json/`

    fetch(url).then(response => response.json()).then(data => atribuiCampos(data))
  })

  const atribuiCampos = (data) => {
    rua.value = data.logradouro;
    complemento.value = data.complemento;
    bairro.value = data.bairro;
    cidade.value = data.localidade;
    estado.value = data.uf;

  }

  btnLimpar.addEventListener('click', (event)=>{
    event.preventDefault();
    cep.value = ''
    rua.value = '';
    complemento.value = '';
    bairro.value = '';
    cidade.value = '';
    estado.value = '';
  })
})()