import { FormGroup } from '@angular/forms';

export function tokenValidator(formGroup: FormGroup) {
  const token = formGroup.get('token')?.value ?? '';
  if (token.length < 40 || token.typeOf() != String) {
    return { validToken: false }
  } else {
    return { validToken: true };
  }
}