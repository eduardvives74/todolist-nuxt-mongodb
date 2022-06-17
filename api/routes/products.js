const MongoClient = require('mongodb').MongoClient

const { Router } = require('express')
const router = Router()

let db;
let collection;
MongoClient.connect('mongodb://localhost/webstore', { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
    db = client.db('webstore')
    collection= db.collection('products')
})

router.get('/products', (req, res) => {
  db.collection('products').find().toArray()
      .then(results => {
          res.json(results);
      }).catch(error => console.error(error));
})

router.post('/products', (req, res) => {
  collection.insertOne(req.body)
      .then(result => {
          res.json('Success');
      })
      .catch(error => console.error(error))
})

router.put('/product/:id', (req, res) => {
  collection.findOneAndUpdate(
      { name: req.params.id },
      {
          $set: {
              name: req.body.name,
              price: req.body.price
          }
      },
      {
          upsert: true
      }
  ).then(result => { res.json('Updated') })
      .catch(error => console.error(error))
})

router.delete('/product/:id', (req, res) => {
  collection.deleteOne(
      { name: req.params.id }
  )
      .then(result => {
          res.json('Deleted')
      })
      .catch(error => console.error(error))
})

module.exports = router