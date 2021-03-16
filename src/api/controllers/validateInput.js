function validateInput(input, joiSchema) {
  return joiSchema.validateAsync(input, { allowUnknown: true });
}

export { validateInput };
export default validateInput;
