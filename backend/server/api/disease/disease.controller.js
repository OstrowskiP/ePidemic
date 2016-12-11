import Disease from './disease.model';

export const addHandler = (request, response) => {
  let snippet = new Disease(request.body);

  snippet.save((error) => {
    if (error) {
      return response.json({
        error: error,
        success: false
      })
    }

    response.json({
      success: true,
      message: 'Disease was successfully added'
    })
  })
};

export const getHandler = (request, response) => {
  Disease.find({}, function(error, diseases) {
    if (error) {
      return response.json({
        success: true,
        error
      })
    }

    response.json({
      success: true,
      diseases
    })
  })
};

