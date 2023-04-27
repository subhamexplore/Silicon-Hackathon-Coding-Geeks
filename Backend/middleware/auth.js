const jwt=require('jsonwebtoken')


const authentication = async (req, res , next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).send('No token provided')
    }
  
    const token = authHeader.split(' ')[1]
  
    try {
      const decoded = jwt.verify(token, "a627efe51a03bfa6e9a43f4d9ba439c11aa3fdf1444d8ca2d166f5e565f5af80464f31d21464fd85a754827f970cbf0d63f490f134b3d5e0a3503385cb2ce545")
      const {iat,email,username,hasNGO}=decoded;
      req.paras={iat,email,username,hasNGO};
    //   console.log(`hiii ${req.user.username}`)
      next();
    } catch (error) {
      res.status(404).send('Not authorized to access this route')
    }
    // res.send('Hiiii')
}

module.exports=authentication;