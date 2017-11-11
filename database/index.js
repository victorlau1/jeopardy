const mysql = require('mysql'); 
const config = require('config');


const db = mysql.createConnection(config.connection)

const selectQuestion = (params, res) => {
  params = [params.price.toUpperCase(), params.cat.toUpperCase()]
  db.query('Select * from questions WHERE price = ? and category = ?', params, (err, results) =>{
    if (err){
      res.status(500).send(err, null)
    } else {
      res.status(200).send(results)
    }
  })
};

const insertData = (data, res) => {
  data = [data.category.toUpperCase(), data.price.toUpperCase(), data.image, data.question, data.answer]
  db.query('INSERT INTO questions (category,price, image, question, answer) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE  image=VALUES(image),price=VALUES(price),answer=VALUES(answer),question=VALUES(question)', data, (err, results) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(results)
    }
  })
}

const batchInsertData = (data, res) => {
  data =  data.map((data) => {
    return [data.category.toUpperCase(), data.price.toUpperCase(), data.image, data.question, data.answer]
  }) 
  db.query('INSERT INTO questions (category, price, image, question, answer) VALUES ? ON DUPLICATE KEY UPDATE  image=VALUES(image),price=VALUES(price),answer=VALUES(answer),question=VALUES(question)', [data], (err, results) => {
    if (err) {
      console.log(err)
      res.status(500).send(err)
    } else {
      res.status(201).send(results)
    }
  }) 
}

module.exports = {
  selectQuestion : selectQuestion,
  insertData: insertData,
  batchInsertData : batchInsertData
} 
