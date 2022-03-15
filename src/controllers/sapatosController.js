const fs = require('fs');
const { v4: uuid } = require('uuid');

const sapatosController = {
  buscarPaginaCadastro: (request, response) => {
    response.render('cadastroSapato', {
      title: 'Express',
    });
  },
  create: (request, response) => {
    const nomeArquivosSapatos = 'sapatos.json';

    // busquei o arquivo sapatos.json
    const sapatosArquivo = fs.readFileSync(nomeArquivosSapatos);

    // transformei string em JSON
    const sapatosJSON = JSON.parse(sapatosArquivo);

    // criei um novo objeto com todo cadastro + um novo UUID (identificador)
    const novoSapato = {
      id: uuid(),
      ...request.body,
      fileName: request.file.fileName //{nome: teste} -> {nome:teste}
    }

    // inserindo meu novo sapato no array de sapatos
    sapatosJSON.push(novoSapato);

    // grava todos os sapatos no arquivo
    fs.writeFileSync(nomeArquivosSapatos, JSON.stringify(sapatosJSON))

    //redireciono para tela inical
    response.redirect('/');
  },
}

// usuario chama uma url com metodo
// express ouve essa url(router)
// expresss direciona para controller

module.exports = sapatosController