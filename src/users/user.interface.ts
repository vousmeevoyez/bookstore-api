export interface ICreateUser {
  email: string;
  point: number;
}

export interface ICreateUserWithoutPoint {
  email: string;
}

export interface IGetUser {
  id: number;
}
