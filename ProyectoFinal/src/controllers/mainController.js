const mainController = {
    home: (req, res) => res.send('Response for Home Controller'),
    contact: (req, res) => res.send('Response for Contact Controller'),
    about: (req, res) => res.send('Response for About Controller'),
    faqs: (req, res) => res.send('Response for Faqs Controller')
}

module.exports = mainController;

