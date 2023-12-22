const ItemsService = require('../services/itemService');

module.exports = {
  datos:  async (req, res) => {
    const { data } = await ItemsService.getAllItems();
    res.json(data);
  },  
  shopView:  async (req, res) => {
    const { data } = await ItemsService.getAllItems();
    res.render('./shop/shop',
      {
        view: {
          title: "Shop | Funkoshop"
        },
        items: data
      });
  },
  itemView: async (req, res) => {
    const id = req.params.id;
    const item = await ItemsService.getItem(id);
    const { data } = item;

    if (!data[0]) {
      res.status(404).send('El producto con el ID seleccionado no existe o fue eliminado');
    }

    res.render('./shop/item', {
      view: {
        title: "Item | Funkoshop"
      },
      item: data[0]
    });
  },
  addItemToCart: (req, res) => res.send('Route to add a item to cart'),
  cartView: (req, res) => {
    res.render('./shop/cart', {
      view: {
        title: "Carrito | Funkoshop"
      }
    });  
  },
  checkout: (req, res) => res.send('Route to receive the selected products and init the buy process'),
};