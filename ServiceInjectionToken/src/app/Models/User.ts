export class User {
  userId: number | undefined;
  name: string;
  email: string;

  constructor(name: string, email: string);
  constructor(name: string, email: string, userId?: number);

  constructor(name: string, email: string, userId?: number) {
    this.email = email;
    this.name = name;

    if (userId) this.userId = userId;
  }
}
