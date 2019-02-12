class InputValidationError extends Error {
    constructor(message) {
      super();
  
      this.name = 'InputValidationError';
      this.message = message;
      this.status = 400;
    }
  }
  
  module.exports = InputValidationError;
  