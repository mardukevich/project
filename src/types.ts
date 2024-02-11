export enum Users {
  PerPage = 20,
  MaxCount = 10000
}

export type UserData = {
  img: string;
  name: string;
  login: string;
  address: string;
  email: string;
  phone: string;
}

export type ViewType = 'table' | 'card';
