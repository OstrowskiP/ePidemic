import DiseaseDefinition from './diseaseDefinition.model';
import Disease from '../disease.model';
import _ from 'lodash';

export const addHandler = (request, response) => {
  let diseaseDefinition = new DiseaseDefinition(request.body);

  diseaseDefinition.save((error) => {
    if (error) {
      return response.json({
        error: error,
        success: false
      })
    }

    response.json({
      success: true,
      message: 'Dodawanie jednostki chorobowej zakończone sukcesem'
    })
  })
};

export const getHandler = (request, response) => {
  DiseaseDefinition.find({}, function(error, diseaseDefinitions) {
    if (error) {
      return response.json({
        success: true,
        error
      })
    }

    response.json({
      success: true,
      diseaseDefinitions
    })
  })
};

export const deleteByIdHandler = (request, response) => {
  let { params } = request;
  let { diseaseDefinitionId } = params;

  DiseaseDefinition.remove({ _id: diseaseDefinitionId }, (error) => {
    if (error) {
      return response.json({
        error: error,
        success: false
      });
    }

    Disease.remove({ definition: diseaseDefinitionId }, (error) => {
      if (error) {
        return response.json({
          error: error,
          success: false
        });
      }

      response.json({
        success: true,
        message: 'Usuwanie jednostki chorobowej zakończone sukcesem'
      });
    })
  });
};

export const updateByIdHandler = (request, response) => {
  let { params } = request;
  let { diseaseDefinitionId } = params;

  DiseaseDefinition.findOne({ _id: diseaseDefinitionId }, (error, diseaseDefinition) => {
    if (error) {
      return response.json({
        error: error,
        success: false
      });
    }

    diseaseDefinition = _.assign(diseaseDefinition, request.body);

    diseaseDefinition.save((error) => {
      if (error) {
        return response.json({
          error: error,
          success: false
        });
      }

      response.json({
        success: true,
        message: 'Edycja jednostki chorobowej zakończona sukcesem'
      });
    })
  });
};
