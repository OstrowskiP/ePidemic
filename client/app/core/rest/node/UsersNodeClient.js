export default class UsersClient {
  constructor(serviceUri) {
    this.serviceUri = serviceUri;
  }

  getAllUsers() {
    return fetch(
      `${ this.serviceUri }/api/user`,
      {
        method: 'GET'
      }
    )
      .then(this.__handleResponse)
  }

  createUser(userAsset) {
    return fetch(
      `${ this.serviceUri }/api/user`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userAsset)
      }
    )
      .then(this.__handleResponse)
  }

  deleteUsers(users) {
    let { _id } = users[0];

    return fetch(
      `${ this.serviceUri }/api/user/${ _id }`,
      {
        method: 'DELETE'
      }
    )
      .then(this.__handleResponse)
  }

  updateUsers(updatedUsers) {
    let { _id } = updatedUsers[0];

    return fetch(
      `${ this.serviceUri }/api/user/${ _id }`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedUsers[0])
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
