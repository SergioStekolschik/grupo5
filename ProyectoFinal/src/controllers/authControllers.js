const UserService = require('../services/userService');
const bcrypt = require('bcrypt')

const comparePassword = async (password, hash) => {
    try {
      return await bcrypt.compare(password, hash)
    } catch (error) {
      console.log(error)
    }
  
    // Return false if error
    return false
  }

module.exports = {
    loginUser: async (req, res) => {
        const { email, password } = req.body;
        const u = await UserService.getUserByEmail(email);
        if (u.isError) {
            res.status(401).send('Error consultando al usuario (' + u.message+ ') <a href="/admin/login">Volver a intentar</a>');
        } else {
            if (u.data.length === 0) {
                res.status(401).send('El usuario no existe. <a href="/admin/login">Volver a intentar</a>');
            } else { 
                const isValidPass = await comparePassword(password, u.data[0].password);
                if (email === u.data[0].email && isValidPass) {
                    req.session.username = u.data[0].email;
                    
                    var hour = 3600000
                    req.session.cookie.expires = new Date(Date.now() + hour)
                    req.session.cookie.maxAge = hour                   

                    // Buscar si hay algún elemento con role igual a "ADMINISTRADOR"
                    const elementoAdmin = (u.data).find(elemento => elemento.role_name === 'ADMINISTRADOR');
                    if (elementoAdmin) {
                        req.session.administrator = "Si"
                        res.redirect('/admin/admin');
                    } else {
                        res.redirect('/shop/shop');
                    }
                } else {
                    res.status(401).send('Credenciales incorrectas. <a href="/admin/login">Volver a intentar</a>');
                } 
            } 
        }

    },
    logoutUser: (req, res) => {
        req.session.destroy();
        res.redirect('/admin/login');
    }
};


