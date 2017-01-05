export default class DiseaseDefinitionsNodeClient {
  constructor(serviceUri) {
    this.serviceUri = serviceUri;
  }

  getAllDiseaseDefinitions() {
    return fetch(
      `${ this.serviceUri }/api/disease/definition`,
      {
        method: 'GET'
      }
    )
      .then(this.__handleResponse)
  }

  createDiseaseDefinition(diseaseDefinitionAsset) {
    return fetch(
      `${ this.serviceUri }/api/disease/definition`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(diseaseDefinitionAsset)
      }
    )
      .then(this.__handleResponse)
  }

  deleteDiseaseDefinitions(diseaseDefinitions) {
    let { _id } = diseaseDefinitions[0];

    return fetch(
      `${ this.serviceUri }/api/disease/definition/${ _id }`,
      {
        method: 'DELETE'
      }
    )
      .then(this.__handleResponse)
  }

  updateDiseaseDefinitions(diseaseDefinitions) {
    let { _id } = diseaseDefinitions[0];

    return fetch(
      `${ this.serviceUri }/api/disease/definition/${ _id }`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(diseaseDefinitions[0])
      },

    )
      .then(this.__handleResponse)
  }

  __handleResponse(response) {
    if (!response.ok) {
      return Promise.reject(response);
    }

    return response.json()
      .then(result => {
        return result;
      })
  }
}
