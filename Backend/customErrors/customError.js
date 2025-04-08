class CustomError extends Error{
  statusCode=null
  constructor(msg,statusCode){
    super(msg)
    this.statusCode = statusCode
    this.name = this.constructor.name
  }
}