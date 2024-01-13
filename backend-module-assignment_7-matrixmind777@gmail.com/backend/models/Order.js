const mongoose = require("mongoose")

const { ObjectId } = mongoose.Schema.Types;

const OrderSchema = new mongoose.Schema({
    products: [
        {
          type: mongoose.ObjectId,
          ref: "Products",
        },
      ],
      payment: {},
      buyer: {
        type: mongoose.ObjectId,
        ref: "users",
      },
      status: {
        type: String,
        default: "Not Process",
        enum: ["Not Process", "Processing", "Shipped", "deliverd", "cancel"],
      },

}, { timestamps: true })

module.exports = mongoose.model('Order', OrderSchema);