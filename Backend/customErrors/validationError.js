class ValidationError extends CustomError{
  constructor(msg,statusCode){
        super(msg,statusCode)
  }
}