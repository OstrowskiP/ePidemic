export default class DiseasesNodeClient {
  constructor(serviceUri) {
    this.serviceUri = serviceUri;
  }

  getAllDiseases() {
    return fetch(
      `${ this.serviceUri }/api/disease`,
      {
        method: 'GET'
      }
    )
      .then(this.__handleResponse)
  }

  createDisease(diseaseAsset) {
    return fetch(
      `${ this.serviceUri }/api/disease`,
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
