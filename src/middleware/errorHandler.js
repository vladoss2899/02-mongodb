import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  let status = 500;
  let message = 'Internal Server Error';

  // Якщо це помилка HttpError, беремо її статус та повідомлення
  if (err instanceof HttpError) {
    status = err.status;
    message = err.message;
  } else if (err.message) {
    // Якщо це не HttpError, але має message
    message = err.message;
  }

  res.status(status).json({ message });
};
