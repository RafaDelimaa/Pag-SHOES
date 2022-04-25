const fs = require('fs');
const { v4: uuid } = require('uuid');
const bcrypt = require('bcryptjs');


// const variavel = {
//   v4: () => { }
// }

// const { v4: uuid } = variavel;
// const uuid = variavel.v4;


const usuariosController = {
  create: (request, response) => {
    const nomeArquivosUsuarios = 'usuarios.json';

    const usuariosArquivo = fs.readFileSync(nomeArquivosUsuarios);
    const usuariosJSON = JSON.parse(usuariosArquivo);

    // request.file

    console.log('imprimindo', request.abobrinha);
    const hash = bcrypt.hashSync(request.body.senha);

    const novoUsuario = {
      id: uuid(),
      ...request.body,
      senha: hash,
    }

    delete novoUsuario.confirmacaoSenhaa;

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