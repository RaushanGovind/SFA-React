class BadRequestError extends CustomError{
  constructor(msg,statusCode){
        super(msg,statusCode)
  }
}