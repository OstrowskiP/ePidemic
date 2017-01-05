import Disease from './disease.model';

export const addHandler = (request, response) => {
  let disease = new Disease(request.body);

  disease.save((error) => {
    if (error) {
      return response.json({
        error: error,
        success: false
      })
    }

    response.json({
      success: true,
      message: 'Dodano zgłoszenie'
    })
  })
};

export const getHandler = (request, response) => {
  Disease.find({})
    .populate('definition')
    .exec(function(error, diseases) {
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

