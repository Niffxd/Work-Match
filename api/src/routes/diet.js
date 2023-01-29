const { Router } = require('express');
const { Diet } = require('../db')
const foodJSON = require('../cache/foodCache.json')

const dietRouter = Router()

const getDiets = async () => {
  const data = await foodJSON.results.map(recipe => recipe.diets)
  console.log('taken from CACHE')
  return [... new Set(data.flat())]
}

dietRouter.get('/', async (req, res, next) => {
  try {
    let diets = await Diet.findAll()
    if(!diets.length){
      diets = await getDiets()
      
      for(let diet of diets) await Diet.create({ name: diet })
      
      diets = await Diet.findAll()
      return res.status(200).send(diets)
    }
    return res.status(200).send(diets)
  }
  catch(err) {
    next(err)
  }
})

module.exports = dietRouter