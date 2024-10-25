export class PasswordChecker {
  public checkPassword(password: string): boolean {
    console.log(password, password.length);
    if (password.length < 8) return false;
    if (password == password.toLocaleLowerCase()) return false;
    if (password === password.toLocaleUpperCase()) return false;
    return true;
  }
}
