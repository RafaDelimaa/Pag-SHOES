const { Sapato } = require('../../database/models');

const fs = require('fs');
const { v4: uuid } = require('uuid');

const sapatosController = {
  buscarPaginaCadastro: (request, response) => {
    response.render('cadastroSapato', {
      title: 'Express',
    });
  },
  create: async (request, response) => {
    // criei um novo objeto com todo cadastro + um novo UUID (identificador)
    const novoSapato = {
      id: uuid(),
      ...request.body,
      filename: request.file.filename
    }

    await Sapato.create(novoSapato);

    //redireciono para tela inical
    response.redirect('/');
  },

  edit: async (request, response) => {
    const { id } = request.params;

    let sapato = await Sapato.findByPk(id);

    response.render('editSapato', {
      sapato
    });
  },

  update: async (request, response) => {
    const { id } = request.params;
    const { descricao, valor, filename } = request.body;

    await Sapato.update({
      descricao,
      valor,
      filename,
    },
    {
      where: {
        id
      }
    })
    
    response.redirect('/');
  }
}

// usuario chama uma url com metodo
// express ouve essa url(router)
// expresss direciona para controller

module.exports = sapatosController