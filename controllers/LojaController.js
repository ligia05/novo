const controller = {
  caminho: (req, res) => {
    res.render('lojauser', {
      title: 'Lojinha',
     Usuario: false
    })
  },
 
}

module.exports = controller;

