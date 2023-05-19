var url = "https://viacep.com.br/ws/13493256/json/";

var consultaCEP = fetch(url)
  .then((resposta) => resposta.json())
  .then((r) => {
    if (r.erro) {
      throw Error("Esse CEP nao existe");
    } else console.log(r);
  })
  .catch((erro) => console.log(erro))
  .finally((mensagem) => console.log("Processamento Concluido"));

console.log(consultaCEP);

// finally aparece no final da operacao independente do resultado
