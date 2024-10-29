import { NAME_MIN_LENGHT } from "../school2.js";

export class InvalidNameError extends Error {
  constructor(identifier) {
    super(`"${identifier}" must be at least ${NAME_MIN_LENGHT} characters.`);
  }
}
