import _ from 'lodash';

export default (roles) => {
  return (request, response, next) => {
    if (_.contains(roles, request.user.role))
      return next();

    response.json({
      success: false,
      error: {
        code: 401,
        message: 'Unauthorized'
      }
    });
  }
}

