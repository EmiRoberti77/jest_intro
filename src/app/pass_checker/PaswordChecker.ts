export enum PasswordErrors {
  SHORT = "Password is too short!",
  NO_UPPER_CASE = "Password is missing upper case",
  NO_LOWER_CASE = "Password is missing lower case",
}

export interface CheckResult {
  valid: boolean;
  reason: PasswordErrors[];
}

export class PasswordChecker {
  public checkPassword(password: string): CheckResult {
    const reasons: PasswordErrors[] = [];
    console.log(password, password.length);
    if (password.length < 8) {
      reasons.push(PasswordErrors.SHORT);
    }
    //if (password == password.toLocaleLowerCase())
    //if (password === password.toLocaleUpperCase())
    return {
      valid: reasons.length > 0 ? false : true,
      reason: reasons,
    };
  }
}
