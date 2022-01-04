const controller = {
  index: (req, res) => {
    res.render('home', {
      title: 'TLINK',
     ehUsuario: false
    })
  },
  delete: '',
  list: '',
}

module.exports = controller;