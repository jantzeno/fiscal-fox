export module FormHelper {
  export const usernamePattern: string = '^[a-zA-Z0-9]+(?:[-_.]?[a-zA-Z0-9])*$';
  export const namePattern: string = '^[a-zA-Z0-9]+(?:[- _]?[a-zA-Z0-9])*$';
  export const amountPattern: string = '[0-9]*';
  // Validate Input
  export function checkValidInput(form, fieldName): boolean {
    if (form && fieldName) {
      return (
        form.controls[fieldName].invalid &&
        (form.controls[fieldName].dirty || form.controls[fieldName].touched)
      );
    } else {
      return false;
    }
  }

  // Get form field errors
  export function getErrors(form, fieldName) {
    if (form && fieldName) {
      return form.controls[fieldName].errors;
    } else {
      return null;
    }
  }
}
