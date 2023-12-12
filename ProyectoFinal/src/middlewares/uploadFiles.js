const multer = require('multer');
const path = require('path');

/*
const upload = multer({ 
    dest: '../../public/img' 
    fileFilter: function (req, file, cb) {
        var filetypes = /jpeg|jpg|png|gif/;
        var mimetype = filetypes.test(file.mimetype);
        var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: File upload only supports the following filetypes - " + filetypes);
    },
    limits: {fileSize: 1000000}
});
*/

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.resolve(__dirname, '../../public/img')),
    filename: (req, file, cb) => cb(null,file.originalname)
 //   filename: (req, file, cb) => cb(null,Date.now() + '_' +  file.originalname)
});

const uploadFiles = multer({
    storage,
    limits: {fileSize: 1000000}
});

/*
const validateInput = (req, res, next) => {
    const errors = validationResult(req); // Extraemos los errores
    if (!errors.isEmpty()) { 
      // Si hay errores, los devolvemos al cliente
      return res.status(400).json({ errors: errors.array() });
    }
    next(); // Caso contrario continuamos al controlador
  };
  
  module.exports = validateInput

router.post('/images/upload', (req, res) => {
    uploadImage(req, res, (err) => {
        if (err) {
            err.message = 'The file is so heavy for my service';
            return res.send(err);
        }
        console.log(req.file);
        res.send('uploaded');
    });
});
*/

module.exports = uploadFiles
