const user = require('../models/userProfiledetails')

const postUserDetail = async (req, res) => {
   
    console.log(req.paras.email);


  const {
    username,
    email,
    address,
    occupation,
    age,
    city,
    state,
    pincode,
    about,
    AccountHolder,
    AccountNumber,
    IFSCcode,
    NGOname,
    NGOregd,
    NGOvision,
    NGOachiv,
    NGOsector,
  } = req.body

  try {
    const oldUser = await user.findOne({
      username,
      email,
      AccountNumber,
      IFSCcode,
    })
    if (oldUser) {
      res.status(400).send('User Already Exists')
    }
    const Uzer = await user.create({
      username,
      email,
      address,
      occupation,
      age,
      city,
      state,
      pincode,
      about,
      AccountHolder,
      AccountNumber,
      IFSCcode,
      NGOname,
      NGOregd,
      NGOvision,
      NGOachiv,
      NGOsector,
    })
    res.status(200).json({ info: Uzer })
  } catch (error) {
    console.log(error)
  }
}

const getUserDetail = async(req,res)=>{
    console.log("hiii dev");
    const Email=req.paras.email;   
    try {
        const uzzer=await user.findOne({email : Email});
        res.status(200).json({uzzer});
    } catch (error) {
        console.log(error)
    }
}

module.exports = {postUserDetail,getUserDetail}