export class AppError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public err?: any,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.err = err ?? null;
  }
}
