const {PostedOffers}= require("../configs/db.config.js");

const getallJobs= async (req,res)=>{
    try{
    
      let jobs= await PostedOffers.findAll()
      if(!Object.keys(jobs).length){
        return res.status(404).json({
          msg: "jobs does not found database "
      })
      }
      return res.status(200).send(jobs)
  }catch(err){
      return res.status(404).send(err.message);
  }
  }

 const postJob = async(req,res)=>{
    const { title,description,direction,status,estimatedTime,renumerations,agreement } =req.body;
      let jobCreated 
      try {
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
      return res.status(404).json({
        msg: "please , fill all data"
    })
    }
   //job title must be just strings
    const onlyLettersPattern = /^[A-Za-z]+$/;
    const noSpecialCharacters = /[^a-zA-Z0-9 ]/;
    //let justNumbers = /^\d+$/

    if (!title.match(onlyLettersPattern)) {
      return res.status(400)
          .json({ err: "No special characters and no numbers allowed for title, please!" })
  }
  //desciption length maximun 500 characters
  if (description.length>500) {
    return res.status(400)
        .json({ err: "maximum 500 characters for description!!" })
}
//agreement can be just boolean
if (typeof agreement !== "boolean"|| typeof status !== "boolean") {
  return res.status(400)
  .json({ err: "just boolean allowed for agreement and status!" })
}
//estimated time can not have special characters

if (estimatedTime.match(noSpecialCharacters)) {
  return res.status(400)
      .json({ err: "No special characters allowed for estimated time, please!" })
}
//remmuneration can be just numbers
    jobCreated = await PostedOffers.create(jobs);  
    return res.status(200).send(jobCreated);   
     
    } catch (error) {
      return error;
    }
  }

module.exports = {getallJobs,postJob}; 