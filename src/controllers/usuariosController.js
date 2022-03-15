const fs = require('fs');
const { v4: uuid } = require('uuid');


const usuariosController = {
  create: (request, response) => {
    const nomeArquivosUsuarios = 'usuarios.json';

    const usuariosArquivo = fs.readFileSync(nomeArquivosUsuarios);
    const usuariosJSON = JSON.parse(usuariosArquivo);

    const novoUsuario = {
      id: uuid(),
      ...request.body //{nome: teste} -> {nome:teste}
    }

    usuariosJSON.push(novoUsuario);

    fs.writeFileSync(nomeArquivosUsuarios, JSON.stringify(usuariosJSON))

    response.render('formulario', {
      title: 'Express',
    });
  },
}

// usuario chama uma url com metodo
// express ouve essa url(router)
// expresss direciona para controller

module.exports = usuariosController