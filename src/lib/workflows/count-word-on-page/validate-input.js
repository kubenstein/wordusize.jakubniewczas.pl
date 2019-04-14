class ValidationResult {
  constructor() {
    this.isValid = true;
    this.errors = [];
  }

  addError(error) {
    this.isValid = false;
    this.errors.push(error);
  }
}

const validateInput = (word, url) => {
  const result = new ValidationResult();
  if (!word) result.addError("'word' param cant be empty");
  if (!url) result.addError("'url' param cant be empty");

  return result;
};

export default validateInput;
