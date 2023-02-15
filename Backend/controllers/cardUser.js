const card = require('../models/card')
// var multer = require('multer')
// var path = require('path')
// const fs = require('fs')

const postCards = async (req, res) => {
  const { title, description, amount, day, img, slug , user, amountRaised, category} = req.body
  try {
    const oldTitle = await card.findOne({ slug })
    if (oldTitle) {
      res.status(404).send('Title Already Exists')
    }
    const Title = await card.create(
      {
        title,
        description,
        amount,
        day,
        img,
        slug,
        user,
        amountRaised,
        category
      }
      // req.body
    )
    res.json({
      status: 'ok',
      data: Title,
    })
  } catch (error) {
    res.status(500).json({
      msg: error,
    })
  }
  // res.status(200).send("Hiiii");
}

const getCards=async(req,res)=>{
    const detail=await card.find({});
    res.status(200).send({info:detail})
}

module.exports = {postCards,getCards}