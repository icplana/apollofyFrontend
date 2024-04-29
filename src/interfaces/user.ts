export enum Roles {
  superAdmin = 'superAdmin',
  admin = 'admin',
  artist = 'artist',
  listener = 'listener'
}

export interface User {
  username: string;
  picture: string;
  role: Roles; //not sure if that's a proper way of adding the type
  name: string;
  firstSurname: string;
  secondSurname: string;
  email: string;
  password: string;
  following: Array<number>;
  followers: Array<number>;
  autors: Array<number>;
  albums: Array<number>;
  playlists: Array<number>;
  createAt?: Date;
  updateAt?: Date;
}