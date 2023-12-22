const ItemsService = require('../services/itemService');
const CategoryService = require('../services/categoryService');
const LicenceService = require('../services/licenceService');
const UserService = require('../services/userService');

module.exports = {
  adminView: async (req, res) => {
    const { data } = await ItemsService.getAllItems();
    res.render('./admin/admin',
      {
        view: {
          title: 'List of Products | Admin Funkoshop'
        },
        items: data
      });
  },
  createView: async (req, res) => {
    const { data: categories } = await CategoryService.getAllCategories();
    const { data: licences } = await LicenceService.getAllLicences();

    res.render('./admin/create', {
      view: {
        title: 'Create Product | Admin Funkoshop'
      },
      categories,
      licences
    });
  },
  createItem: async (req, res) => {
    let item = req.body;

    const imagenes = req.files;
    if (imagenes.length > 0) {
      item.image_front = "/" + req.files[0].originalname;
      item.image_back = "/" + req.files[1].originalname;
    } else {
      item.image_front = "";
      item.image_back = "";
    }
    const response = await ItemsService.createItem(item);
    res.redirect('/admin/admin');
  },
  editView: async (req, res) => {
    const id = req.params.id;
    const { data: categories } = await CategoryService.getAllCategories();
    const { data: licences } = await LicenceService.getAllLicences();
    const { data } = await ItemsService.getItem(id);

    res.render('./admin/edit', {
      view: {
        title: `Edit Product #${id} | Admin Funkoshop`
      },
      item: data[0],
      categories,
      licences
    });
  },
  editItem: async (req, res) => {
    const id = req.params.id;
    let item = req.body;

    const imagenes = req.files;
    if (imagenes.length > 0) {
      item.image_front = "/" + req.files[0].originalname;
      item.image_back = "/" + req.files[1].originalname;
    }
    await ItemsService.editItem(item, id);
    res.redirect('/admin/admin');
  },
  deleteItem: async (req, res) => {
    const id = req.params.id;

    await ItemsService.deleteItem(id);
    res.redirect('/admin/admin');
  },
  loginView: (req, res) => {
    res.cookie("FunkoShop" , 'value', {expire : new Date() + 9999});
    res.render('./auth/login', {
      view: {
        title: 'Login | Funkoshop'
      }
    });
  },
  loginUser: (req, res) => {
    req.session.username = username;   
    res.redirect('/admin/register');
  },
  registerView: (req, res) => {
    res.render('./auth/register', {
      view: {
        title: 'Register | Funkoshop'
      }
    });
  },
  registerUser: async (req, res) => {
    const user = req.body;
    await UserService.createUser(user);
    
    res.redirect('/shop/shop');
  }
};

