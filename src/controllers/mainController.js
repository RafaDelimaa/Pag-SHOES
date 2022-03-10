const fs = require('fs');

const mainController = {
  index: (request, response) => {
    const nomeArquivosSapatos = 'sapatos.json';

    // buscou sapatos no arquivo sapatos.json
    const sapatosArquivo = fs.readFileSync(nomeArquivosSapatos);

    // transformou uma string em json '[]' -> []
    const sapatos = JSON.parse(sapatosArquivo);

    // pedi pra redenrizar com os sapatos que estavam no arquivo
    response.render('index', {
      title: 'Express',
      sapatos,
      tituloPrincipal: 'encontre seu estilo',
      tituloSecundario: '30% OFF',
    });
  },
}

// usuario chama uma url com metodo
// express ouve essa url(router)
// expresss direciona para controller

module.exports = mainController