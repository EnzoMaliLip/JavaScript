function cadastrarUsuario() {
    let nomeCompleto = prompt("Digite seu nome completo:");
    let idade = parseInt(prompt("Digite sua idade:"));
    let rg = prompt("Digite seu RG:");
    let cpf = prompt("Digite seu CPF:");
    let endereco = prompt("Digite seu endereço:");
    let profissao = prompt("Digite sua profissão:");
  
    alert(`
    Cadastro concluído
    Nome Completo: ${nomeCompleto}
    Idade: ${idade} anos
    RG: ${rg}
    CPF: ${cpf}
    Endereço: ${endereco}
    Profissão: ${profissao}
    `);
  }
  
  cadastrarUsuario();