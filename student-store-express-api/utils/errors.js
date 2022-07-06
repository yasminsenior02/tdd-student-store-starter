class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}
class BadRequestError extends Error {
  constructor(message = "Bad request") {
    super(message, 404);
  }
}
class NotFoundError extends Error {
  constructor(message = "Not found") {
    super(message, 400);
  }
}

module.exports = {
  ExpressError: ExpressError,
  NotFoundError: NotFoundError,
  BadRequestError: BadRequestError,
};
