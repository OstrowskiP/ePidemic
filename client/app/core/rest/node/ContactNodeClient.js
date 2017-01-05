export default class ContactNodeClient {
  constructor(serviceUri) {
    this.serviceUri = serviceUri;
  }

  sendEmail(emailDetails) {
    diseaseAsset.definition = diseaseAsset.diseaseDefinition._id;
    delete diseaseAsset.diseaseDefinition;
    return fetch(
      `${ this.serviceUri }/api/contact`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(diseaseAsset)
      }
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
