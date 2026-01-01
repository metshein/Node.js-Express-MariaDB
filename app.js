const express = require('express')
const app = express()

//vaate mootori seadistamine
app.set('view engine', 'ejs')

//html failide teenindamine
app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname })
})
app.get('/teenused', (req, res) => {
  res.sendFile('./views/teenused.html', { root: __dirname })
})

//ümber suunamine
app.get('/vana-leht', (req, res) => {
  res.redirect('/')
})

//404 lehe teenindamine
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});


app.listen(3000);
