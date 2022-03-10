const fs = require('fs');
const { uuid } = require('uuidv4');

const sapatosController = {
  buscarPaginaCadastro: (request, response) => {
    response.render('cadastroSapato', {
      title: 'Express',
    });
  },

    create: (request, response) => {
      const nomeArquivosSapatos = 'sapatos.json';

      const sapatosArquivo = fs.readFileSync(nomeArquivosSapatos);
      const sapatosJSON = JSON.parse(sapatosArquivo);

      const novoSapatos = {
        id: uuid(),
        ...request.body //{nome: teste} -> {nome:teste}
      }

      sapatosJSON.push(novoSapatos);

      fs.writeFileSync(nomeArquivosSapatos, JSON.stringify(sapatosJSON))
      response.render('cadastroSapato', {
        title: 'Express',
      });
    },
  }

    // usuario chama uma url com metodo
    // express ouve essa url(router)
    // expresss direciona para controller

    module.exports = sapatosController