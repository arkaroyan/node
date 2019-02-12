function handleError (error, req, res, next) {
    const status = error.status || 500;
    const message = status === 500
      ? 'Internal server error.'
      : error.message;
  
    return res.status(status).send({ error: message });
  }
  
  module.exports = {
    handleError
  };
  