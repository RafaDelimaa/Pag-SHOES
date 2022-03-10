const mainController = {
  index: (request, response) => {
    const sapatos = [
      {
        descricao: 'SCARPIN SALTO FINO BÁSICO',
        valor: 40,
        imagem: 'shoes1.png'
      },
      {
        descricao: 'BOTA CANO ALTO',
        valor: 150,
        imagem: 'shoes2.png'
      },
      {
        descricao: 'BOTA CANO ALTO',
        valor: 150,
        imagem: 'shoes2.png'
      },
      {
        descricao: 'BOTA CANO ALTO',
        valor: 150,
        imagem: 'shoes2.png'
      },
      {
        descricao: 'BOTA CANO ALTO',
        valor: 150,
        imagem: 'shoes2.png'
      },
      {
        descricao: 'BOTA CANO ALTO',
        valor: 150,
        imagem: 'shoes2.png'
      },
    ]

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