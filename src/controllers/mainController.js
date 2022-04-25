const { Sapato } = require('../../database/models')

const mainController = {
  index: async (request, response) => {
    let todosSapatos = await Sapato.findAll({raw: true});
    let sapatos = todosSapatos.map((sapato) => {
      return {
        id: sapato.id,
        descricao: sapato.descricao,
        valor: sapato.valor,
      }
    })

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