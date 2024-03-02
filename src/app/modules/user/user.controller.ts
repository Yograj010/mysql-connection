import config from '../../_helpers/config';
import Joi from 'joi';


export default class userController {
  constructor() {}

  getData(req:any, res:any, next:any) {
    let response;
    try {
      response = {
        success: true,
        statusCode: 200,
        error: null,
        result: {
          message: "User data fetched Successfully",
          data: {},
        },
      };

      return res.status(response.statusCode).json(response);
    } catch (err:any) {
      //   console.log(err);
      response = {
        success: false,
        statusCode: 500,
        error: {
          message: config.globalErrorMessage,
          errorDetails: err.stack,
        },
        result: {},
      };
      
      return res.status(response.statusCode).json(response);
    }
  }

  signUp(req:any, res:any){
    let response;
    try{
      let data = req.body;
      let joiObj ={
        user_name: Joi.string().alphanum().min(3).max(30).required(),
        first_name: Joi.string().min(3).max(30).required(),
        middle_name: Joi.string().min(3).max(30).required(),
        last_name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds:{ allow: ['com', 'net', 'in', 'org']}}),
        status: Joi.string().valid('active', 'inactive'),
        is_deleted: Joi.number().valid(0,1),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      }
      console.log("----data--",req.body);

      let Schema = Joi.object().keys(joiObj);
      // let result = Schema.validate(data);

      // console.log("----result--",result);
      // return

      response={
        success: true,
        statusCode: 200,
        error: null,
        result:{
          message: "working",
          data: {}
        }
      };

      return res.status(response.statusCode).json(response);

    }catch(err:any){
      response={
        success: false,
        statusCode: 500,
        error: {
          message: config.globalErrorMessage,
          errorDetails: err.stack
        },
        result: {}
      };

      return res.status(response.statusCode).json(response);
    }
  }

  recursion(req:any, res:any, next:any) {
    let response;
    try {
      /*
      Q1: You are given an array of objects, where each object represents a category. Each category can have a name and a list of subcategories. The subcategories are structured in the same way as categories, meaning they too can have their own subcategories, forming a tree-like hierarchy.
      Write a Node.js function that recursively processes this category tree to perform a specific task. The task is to print the names of all categories and their respective levels in the hierarchy.

      For ex: input - 
      */

      const categories = [
        {
          name: "Category 1",
          subcategories: [
            {
              name: "Category 1.1",
              subcategories: [
                { name: "Category 1.1.1" },
                { name: "Category 1.1.2" }
              ]
            },
            {
              name: "Category 1.2"
            }
          ]
        },
        {
          name: "Category 2",
          subcategories: [
            {
              name: "Category 2.1"
            }
          ]
        }
      ];

      /*
      Output:
      Category 1 (Level 0)
      Category 1.1 (Level 1)
      Category 1.1.1 (Level 2)
      Category 1.1.2 (Level 2)
      Category 1.2 (Level 1)
      Category 2 (Level 0)
      Category 2.1 (Level 1)
      */

      function printCategory(categories:any, level = 0){
        for(let category of categories){
          console.log(`${category.name} (Level ${level})`)
          if(category.subcategories){
            printCategory(category.subcategories, level + 1)
          }
        }
      }

      printCategory(categories);

      response = {
        success: true,
        statusCode: 200,
        error: null,
        result: {
          message: "User data fetched Successfully",
          data: {},
        },
      };

      return res.status(response.statusCode).json(response);
    } catch (err:any) {
      //   console.log(err);
      response = {
        success: false,
        statusCode: 500,
        error: {
          message: config.globalErrorMessage,
          errorDetails: err.stack,
        },
        result: {},
      };
      
      return res.status(response.statusCode).json(response);
    }
  }
}
