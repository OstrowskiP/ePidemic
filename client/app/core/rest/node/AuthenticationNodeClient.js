export default class AuthenticationNodeClient {
  constructor(serviceUri) {
    this.serviceUri = serviceUri;
  }

  login(credentials) {
    return fetch(
      `${ this.serviceUri }/api/user/login`,
      this.prepareConfig(credentials)
    ).then(this.__handleResponse);
  }

  register(credentials) {
    return fetch(
      `${ this.serviceUri }/api/user/register`,
      this.prepareConfig(credentials)
    ).then(this.__handleResponse);
  }

  logout() {
    return fetch(
      `${ this.serviceUri }/api/user/logout`,
      { credentials: 'include' }
    ).then(this.__handleResponse);
  }

  authenticate() {
    return fetch(
      `${ this.serviceUri }/api/user/authenticate`,
      { credentials: 'include' }
    ).then(this.__handleResponse);
  }

  __handleResponse(response) {
    if (!response.ok) {
      return Promise.reject(response);
    }

    return response.json()
      .then(result => {
        if (!result.success)
          return Promise.reject(result.error.message);

        return result;
      })
  }

  prepareConfig({ username, password }) {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `username=${ username }&password=${ password }`,
      credentials: 'include',
    }
  }
}
