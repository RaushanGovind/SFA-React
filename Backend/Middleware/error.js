
function error(err,req,res,next) {
  if(err instanceof CustomError){
    return res.status(err.statusCode).json({
      errorName: err.name,
      message:err.message,
    })
  }
}
module.exports ={error}