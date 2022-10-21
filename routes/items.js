const express = require('express')
const router = express.Router()
const NodeCache = require('node-cache');
const myCache = new NodeCache({ stdTTL: 600 });

myCache.set('items', "No items set in-memory", 600);

// Retrieves items list
router.get('/', async (req, res) => {
  try {
    const items = myCache.get('items');
    res.status(200).send(items)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

//Sets items list
router.post('/', async (req, res) => { 
  if (req.body.items != null) {
    const setItems = req.body.items
    myCache.set('items', setItems, 600);
  }
  try {
    const items = myCache.get('items');
    res.status(200).send(items)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

//Deletes items list
router.delete('/', async (req, res) => {
  try {
    myCache.del("items")
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router 