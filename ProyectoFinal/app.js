const express = require('express');
const dotenv= require('dotenv');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

// Configuración de express-session
app.use(session({
  secret: 'miSecreto',
  resave: false,
  saveUninitialized: true,
}));

// Middleware para analizar datos de formulario
app.use(bodyParser.urlencoded({ extended: true }));

const methodOverride = require('method-override');

app.use(methodOverride('_method'));

//Config la carpta public
app.use(express.static(__dirname + '/public'));

// Configuración del motor de vistas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views'); // specify the views directory

const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require(__dirname + '/src/routes/shopRoutes');
const adminRoutes = require(__dirname + '/src/routes/adminRoutes');

//para procesar datos enviados desde el formulario
app.use(express.urlencoded({ extended: true}))
app.use(express.json()) 

//seteamos las variables de entorno

dotenv.config({path: __dirname + '/.env'}); 

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);

//Ruta base para probar todo
// app.get('/', (req, res) => {
//   res.send('Hola Mundo');
// });


// Ruta para mostrar el formulario de carga de archivos
// app.get('/home', (req, res) => {
//   res.render('home');
// });

// // Ruta para manejar la carga de archivos
// app.post('/upload', upload.single('archivo'), (req, res) => {
//   if (!req.file) {
//     res.send('Error: NO se seleccionó el archivo');
//     console.log('No confirmos de archivo');
//   } else {
//     res.send('Archivo subido exitosamente');
//   }
// });


// // Ruta para manejar la carga de archivos
// app.post('/upload', upload.single('archivo'), (req, res) => {
//     if (!req.file) {
//       res.send('Error:  se seleccionó ningún archivo');
//     } else {
//       // Acceder a los detalles del archivo subido
//       const nombreArchivo = req.file.filename;
//       const tamañoArchivo = req.file.size;
  
//       res.send(`Archivo subido exitosamente<br>
//                 Nombre: ${nombreArchivo}<br>
//                 consolo.log('mensaje')  <br>
//                 Tamaño: ${tamañoArchivo} bytes`);
//     }
//   });
  

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');  
});
