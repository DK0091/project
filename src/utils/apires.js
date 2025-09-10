// utils/ApiResponse.js
class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;          // actual response data
    this.message = message;    // success message
    this.success = true;       // always true for success
  }
}

export default ApiResponse;
