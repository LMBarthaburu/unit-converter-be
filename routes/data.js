const express = require('express');
const router = express.Router();
const {getData, deleteData, createConversiones} = require('../controller/data')

router
  .get('/', getData)
  .post('/', createConversiones)
  .delete('/', deleteData)

module.exports = router