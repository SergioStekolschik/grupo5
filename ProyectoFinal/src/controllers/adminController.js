const adminController = {
    admin:  (req, res) => res.send('Response for Admin Controller'),    
    getCreate: (req, res) => res.send('Response for Admin Controller - GetCreate'),
    postCreate: (req, res) => res.send('Response for Admin Controller - PostCreate'),
    getByID: (req, res) => res.send('Response for Admin Controller'),
    putByID: (req, res) => res.send('Response for Admin Controller'),
    deleteByID: (req, res) => res.send('Response for Admin Controller'),
    loginGet: (req, res) => res.send('Response for Admin Controller'),
    loginPost: (req, res) => res.send('Response for Admin Controller'),
    registerGet: (req, res) => res.send('Response for Admin Controller'),
    registerPost: (req, res) => res.send('Response for Admin Controller')
}

module.exports = adminController;

