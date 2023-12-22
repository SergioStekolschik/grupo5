const express = require('express');
const app = express();

// motor de plantillas
app.set('view engine','ejs');
app.set('views', __dirname + '/src/views'); // specify the views directory

const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');

app.use(express.static(__dirname + '/public'));

app.get("/ejs", (req, res) => {
    res.render("index", { titulo: "Prueba paramentro EJS" });
  });


app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);

app.listen(4000,() => console.log("Servidor corriendo en http://localhost:4000"));