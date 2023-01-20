const { PostedOffers } = require('./db.service.js');
const helper = require('../utils/helper.util.js');
const config = require('../configs/general.config.js');

async function read(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const data = await PostedOffers.findAll();
  const meta = { page };
  return {
    data,
    meta,
  };
}

async function create(empleo) {
let message
const { title,description,direction,status,estimatedTime,renumerations,agreement } =empleo;
//job title must be just strings
const onlyLettersPattern = /^[a-zA-Z0-9_ ]*$/;
const noSpecialCharacters = /[^a-zA-Z0-9 ]/;
const justNumbers = /^[0-9]*$/;
let jobs = {
    title,
    description,
    direction,
    status,
    estimatedTime,
    renumerations,
    agreement
  };
if(!title || 
   !description ||
   !direction ||
    status.length===0     ||
   !estimatedTime ||
   !renumerations ||
    agreement.length===0){  
      message="please , fill all data"
  }
  else if (!title.match(onlyLettersPattern)) {
    message="No special characters and no numbers allowed for title, please!" 
}
//desciption length maximun 500 characters
else if (description.length>500) {
  message="maximum 500 characters for description!!" 
}
//agreement can be just boolean
else if (typeof agreement !== "boolean"|| typeof status !== "boolean") {
  message= "just boolean allowed for agreement and status!" 
}
//estimated time can not have special characters

else if (estimatedTime.match(noSpecialCharacters)) {
  message= "No special characters allowed for estimated time, please!"
}
else if (!String(renumerations).match(justNumbers)) {
  message= "just numbers allowed, please!"
}
if(!message){
  const result = PostedOffers.create(jobs);
  message= 'empleo created successfully';
}
  return { message };
}

async function update(id, empleo) {
  let message 
    const empleoDb = await PostedOffers.findOne({
        where: {
          id: id,
        },
      });
      if (empleoDb) {
        const { title,description,direction,status,estimatedTime,renumerations,agreement } =empleo;
        const onlyLettersPattern = /^[a-zA-Z0-9_ ]*$/;
        const noSpecialCharacters = /[^a-zA-Z0-9 ]/;
        const justNumbers = /^[0-9]*$/;       
let jobs = {
    title,
    description,
    direction,
    status,
    estimatedTime,
    renumerations,
    agreement
  };
if(!title || 
   !description ||
   !direction ||
    status.length===0     ||
   !estimatedTime ||
   !renumerations ||
    agreement.length===0){  
      message="please , fill all data"
  }
  else if (!title.match(onlyLettersPattern)) {
    message="No special characters and no numbers allowed for title, please!" 
}
//desciption length maximun 500 characters
else if (description.length>500) {
  message="maximum 500 characters for description!!" 
}
//agreement can be just boolean
else if (typeof agreement !== "boolean"|| typeof status !== "boolean") {
  message= "just boolean allowed for agreement and status!" 
}
//estimated time can not have special characters

else if (estimatedTime.match(noSpecialCharacters)) {
  message= "No special characters allowed for estimated time, please!"
}
else if (!String(renumerations).match(justNumbers)) {
  message= "just numbers allowed, please!"
}
if(!message){
  const result=await PostedOffers.update(
      jobs
     , {
      where: { id: id }
     })
  
     message = 'empleo updated succesfully';
}
      }else{
        message = 'id does not found';
      }
  return { message };
}

async function remove(id) {
    let message 
    const empleoDb = await PostedOffers.destroy ({
        where: {
          id: id,
        },
      });
      if (empleoDb) {
        message = 'empleo deleted successfully';
      }else{
        message = 'Error in deleting empleo';
      }
  return { message };
}

async function getId(id) {
  const empleoDb = await PostedOffers.findOne({
    where: {
      id: id,
    },
  });

    if (empleoDb) {
      return {
        empleoDb,
      };
    }else{
      message = 'Error in finding empleo';
    }
return { message };
}

module.exports = {
  read,
  create,
  update,
  remove,
  getId,
};
