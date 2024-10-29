export class InvalidGradeError extends Error {
  constructor() {
    super(`The grade must be positive.`);
  }
}
