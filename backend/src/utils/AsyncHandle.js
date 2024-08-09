/**
 * Wraps an asynchronous request handler function to ensure any errors are caught and passed to the next middleware.
 * @param {Function} RequestHandle - The asynchronous request handler function to be wrapped.
 * @returns {Function} - A middleware function that handles asynchronous requests.
 */
const AsyncHandle = (RequestHandle) => {
  return (req, res, next) => {
    Promise.resolve(RequestHandle(req, res, next)).catch((err) => next(err));
  };
};
export { AsyncHandle };
