import config from './config';

function errHandlerMiddleware(err:any, req:any, res:any, next:any) {
  //   console.log("Error_Handler: ", err.message);

  return res.status(500).json({
    success: false,
    statusCode: 500,
    error: { message: config.globalErrorMessage, errorDetails: err.stack },
    result: {},
  });
}

export default errHandlerMiddleware;
