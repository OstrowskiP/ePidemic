export default class ContactNodeClient {
  constructor(serviceUri) {
    this.serviceUri = serviceUri;
  }

  sendEmail(emailDetails) {
    return fetch(
      `${ this.serviceUri }/api/contact`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailDetails)
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
