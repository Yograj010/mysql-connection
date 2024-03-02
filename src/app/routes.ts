// import errorHandler from './_helpers/errhandler';
import userModule from './modules/user';

export default function (app:any) {

  // app.use("/about-us", require("./about-us/index"));
  app.use("/user", userModule);
  // app.use("/", require("./homepage/index"))

  /*-----Always place this line in the end-----*/
  //this will handle any error which may have occured in the middleware, if used.  
  // app.use(errorHandler);
  
};
