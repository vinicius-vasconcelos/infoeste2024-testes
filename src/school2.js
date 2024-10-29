import { InvalidGradeError } from "./_erros/invalid-grade-error.js";
import { InvalidNameError } from "./_erros/invalid-name-error.js";

export const NAME_MIN_LENGHT = 3;

const isValidName = (name) =>
  typeof name === "string" && name.trim().length >= NAME_MIN_LENGHT;
const isPositive = (num) => typeof num === "number" && num >= 0;

const evaluateStudent = (studentName, grade1, grade2) => {
  if (!isValidName(studentName)) return new InvalidNameError(studentName);
  if (!isPositive(grade1) || !isPositive(grade2))
    return new InvalidGradeError();

  const average = (grade1 + grade2) / 2;
  return average > 6 ? "Approved" : "Retained";
};

export { evaluateStudent };
