module.exports = {
  validateSession : (req, res, next) => {
    if (req.session && req.session.username) {
      return next();
    } else {
      res.status(401).send('Debes iniciar sesión para acceder a esta página.');
    }
  },
  validateSessionAdministrator : (req, res, next) => {
    console.log(req.session);
    if (req.session && req.session.username && req.session.administrator) {
      return next();
    } else {
      res.status(401).send('Debes iniciar sesión con un usuario administrador para acceder a esta página.');
    }
  }
}