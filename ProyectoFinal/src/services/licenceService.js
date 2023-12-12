const LicenceModel = require('../models/licenceModel');

const getAllLicences = async () => {
  return await LicenceModel.getAll();
}

module.exports = {
  getAllLicences,
}