export default (request, response, next) => {
  if (request.isAuthenticated())
    return next();

  response.json({
    success: false,
    error: {
      code: 401,
      message: 'Unauthorized'
    }
  });
}
