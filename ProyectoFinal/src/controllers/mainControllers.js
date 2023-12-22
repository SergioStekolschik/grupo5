const LicenceService = require('../services/licenceService');

module.exports = {
  homeView: async (req, res) => {
    const licences = await LicenceService.getAllItemsLicences();
    res.render('home', {
      view: {
        title: "Home | Funkoshop"
      },
      collections: licences.data
    });
  },
  contactView:(req, res) => {
    res.render('./main/contact', {
      view: {
        title: `Contact | Admin Funkoshop`
      }
    });
  },
  aboutView:(req, res) => res.send('About View Route'),
  faqsView:(req, res) => res.send('FAQs View Route'),
};