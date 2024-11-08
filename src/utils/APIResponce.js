class APIResponce {
  constructor(status, data, message = "success") {
    this.statusCode = status;
    this.message = message;
    this.data = data;
    this.success = statusCode < 400;
  }
}

export { APIResponce };
