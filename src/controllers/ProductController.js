const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
   async index(req, res) {
      const {
         page = 1
      } = req.query;

      // const products = await Product.find();
      const products = await Product.paginate({}, {
         page,
         limit: 5,
      });

      return res.json(products)
   },

   async show(req, res) {
      return res.json(await Product.findById(req.params.id));
   },

   async store(req, res) {
      const product = await Product.create(req.body);

      return res.json(product);
   },

   async update(req, res) {
      return res.json(await Product.findByIdAndUpdate(req.params.id, req.body, {
         new: true
      }));
   },

   async destroyer(req, res) {
      return res.json(await Product.findByIdAndRemove(req.params.id));
   }
};