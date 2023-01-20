const empleo = require('../services/empleo.service.js');

async function read(req, res, next) {
    try {
      let jobs= await empleo.read(req.query.page);
      return res.status(200).send(jobs)
    } catch (err) {
      console.error(`Error while getting empleos`, err.message);
      next(err);
    }
  }

 const create = async(req,res,next)=>{
  try {
    res.json(await empleo.create(req.body));
  } catch (err) {
    console.error(`Error while creating empleo`, err.message);
    next(err);
  }   
  }

  async function update(req, res, next) {
    try {
      res.json(await empleo.update(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating empleo`, err.message);
      next(err);
    }
  }
  async function remove(req, res, next) {
    try {
      res.json(await empleo.remove(req.params.id));
    } catch (err) {
      console.error(`Error while deleting empleo`, err.message);
      next(err);
    }
  }

  async function getId(req, res, next) {
    try {
      res.json(await empleo.getId(req.params.id));
    } catch (err) {
      console.error(`Error while deleting empleo`, err.message);
      next(err);
    }
  }


    // Obtener empleo por ID






module.exports = {read,create,update,remove,getId}; 
