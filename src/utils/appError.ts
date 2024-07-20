class AppError extends Error {
  public statusCode: number;

  public status: string;

  public isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message); // Chiama il costruttore della classe base (Error)

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    // Mantenere lo stack trace della chiamata
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
