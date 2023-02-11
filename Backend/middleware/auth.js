const jwt=require('jsonwebtoken')


const authentication = async (req, res , next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).send('No token provided')
    }
  
    const token = authHeader.split(' ')[1]
    console.log(token)
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      console.log(decoded)
      const {iat,email,username}=decoded;
      req.paras={iat,email,username};
    //   console.log(`hiii ${req.user.username}`)
      next();
    } catch (error) {
      res.status(404).send('Not authorized to access this route')
    }
    // res.send('Hiiii')
}

module.exports=authentication;