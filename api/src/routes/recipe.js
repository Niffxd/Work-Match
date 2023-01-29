const { Router } = require('express');
const axios = require('axios');
const { Recipe, Diet } = require('../db')
const { API_KEY } = process.env
const foodJSON = require('../cache/foodCache.json')

const recipeRouter = Router()

const apiLink = 'https://api.spoonacular.com/recipes/complexSearch'
const apiKey = `?apiKey=${API_KEY}`
const recipesNumber = 100
const completeApiRequest = '&addRecipeNutrition=true'
const requestApi = apiLink + apiKey + '&number=' + recipesNumber + completeApiRequest

const getApi = async () => {
  try{
    const url = await axios.get(requestApi)
    if(url.data){
      const data = url.data.results.map(recipe => {
        return {
          id: recipe.id,
          name: recipe.title,
          summary: recipe.summary,
          health_score: recipe.healthScore,
          ingredients: recipe.nutrition.ingredients,
          steps: recipe.analyzedInstructions.map(item => item.steps).flat(),
          diets: recipe.diets.map(diet => { return { name: diet }}),
          img: recipe.image
        }
      })
      console.log('taken from API')
      return data
    }    
  }
  catch{
    const localeData = await getLocalApi()
    return localeData
  }
}

const getDb = async () => {
  const data = await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ['name'],
      through: {
        attributes: []
      }
    }
  })

  return data
}

const getLocalApi = async () => {
  const data = foodJSON.results.map(recipe => {
    return {
      id: recipe.id,
      name: recipe.title,
      summary: recipe.summary,
      health_score: recipe.healthScore,
      ingredients: recipe.nutrition.ingredients,
      steps: recipe.analyzedInstructions.map(item => item.steps).flat(),
      diets: recipe.diets.map(diet => { return { name: diet }}),
      img: recipe.image
    }
  })
  console.log('taken from CACHE')
  return data
}

const getAllData = async () => {
  const api = await getLocalApi()
  const db = await getDb()

  return [ ...db, ...api]
}

recipeRouter.post('/', async (req, res, next) => {
  const { name, summary, health_score, steps, diets } = req.body
  if(!name || !summary) return res.status(412).send({ message: 'Name and summary must be complete' })
  const newRecipe = await Recipe.create({
    name,
    summary,
    health_score,
    steps
  })
  const dbDiets = await Diet.findAll({
    where: { name: diets }
  })
  await newRecipe.addDiet(dbDiets)
  res.status(201).send(newRecipe)
})

recipeRouter.get('/:idRecipe', async (req, res, next) => {
  const idRecipe = req.params.idRecipe
  try {
    if(idRecipe){
      const data = await getAllData()
      const getRecipe = data.filter(recipe => recipe.id == idRecipe)
      if(!getRecipe.length) return res.status(404).send({ message: 'Recipe not found' })
      return res.status(200).send(getRecipe)
    }
  }
  catch(err) {
    next(err)
  }
})

recipeRouter.get('/', async (req, res, next) => {
  const name = req.query.name
  try{
    const data = await getAllData()
    if(!name) {
      return res.status(200).send(data)
    }
    if(parseInt(name)){
      const getRecipe = data.filter(recipe => recipe.health_score === name)
      if(!getRecipe.length) return res.status(404).send({ message: 'Recipe not found' })
      return res.status(200).send(getRecipe)
      
    }else{
      const getRecipe = data.filter(recipe => recipe.name.includes(name[0].toUpperCase() + name.substring(1)))
      if(!getRecipe.length) return res.status(404).send({ message: 'Recipe not found' })
      return res.status(200).send(getRecipe)
    }
  }
  catch(err){
    next(err)
  }
})

module.exports = recipeRouter