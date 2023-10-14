const shopController = {
    shop: (req, res) => res.send('Response for Shop Controller'),
    itemByID: (req, res) => (req, res) => { 
            const id= req.params.id;
            res.send(`Datos del ID: ${id}`);
        },
    itemAdd: (req, res) => res.send('Response añadir el id al carrito'),    
    cart: (req, res) => res.send('Response for Shop Controller'),
    cartCheckOut: (req, res) => res.send('Response for Check out Controller')
}

module.exports = shopController;

