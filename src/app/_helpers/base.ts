interface Response {
    success: boolean;
    statusCode: number;
    error: object | null;
    data: object;
  }

export default class baseController {
    constructor(){}

    /*-------inserts_new_record_in_collection_of_mongoDb------*/
  insert = async (model:any, data:object)=> {
    let createdData = await model.create(data);
    return createdData;
  }

  /*---Fetches_all_data_from_a_specific_collection_of_mongoDb---*/
  getAllRecords = async (model:any) => {
    let allrecords = model.find();
    return allrecords;
  }
    
  /*--------returns_success_response--------*/
  successResponse = async (res:any, data = {}) => {
    let response = {
      statusCode: 200,
      success: true,
      error: null,
      result: data,
    };
    return res.status(response.statusCode).json(response);
  };

  /*--------returns_error_response--------*/
  errorResponse = async (res:any, status:boolean, error = null) => {
    let response = {
      statusCode: status,
      success: false,
      error: error,
      result: {},
    };
    return res.status(response.statusCode).json(response);
  };
}