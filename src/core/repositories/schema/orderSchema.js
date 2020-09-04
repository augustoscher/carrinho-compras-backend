const dynamoose = require('dynamoose');
const Schema = dynamoose.Schema;

const schema = new Schema({
  id: {
    type: String,
    required: true,
    hashKey: true,
  },
  customer: {
    type: String,
    required: false,
  },
  creditCard: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  products: [
    {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      photo: {
        type: String,
        required: false,
      },
      price: {
        type: Number,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      },
      qtd: {
        type: Number,
        required: true,
      },
    },
  ],
});

const model = dynamoose.model(process.env.ORDERS_TABLE, schema);

module.exports = model;
