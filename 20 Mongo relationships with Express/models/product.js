const mongoose = require("mongoose");
const { Schema } = mongoose;
/* Don't need to connect to MongoDB */

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        lowercase: true,
        enum: ["fruit", "vegetable", "dairy"],
    },
    farm: [
        {
            type: Schema.Types.ObjectId,
            ref: "Farm",
        },
    ],
});

const Product = new mongoose.model("Product", productSchema);
module.exports = Product;