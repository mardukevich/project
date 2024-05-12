export enum Users {
  PerPage = 20,
  MaxCount = 10000
}

export type ListItemType = {
  title: string;
  description: string;
}

export type UserData = {
  img: string;
  name: string;
  login: string;
  address: string;
  email: string;
  phone: string;
}

export interface ComponentsProps {
  data: UserData[];
} 

export interface UserAPI {
  picture: { large: string };
  name: { first: string; last: string };
  login: { username: string };
  location: {
    street: { number: number; name: string };
    city: string;
    state: string;
    country: string;
    postCode: string;
  };
  email: string;
  phone: string;
}

export interface Location {
  street: { number: number; name: string };
  city: string;
  state: string;
  country: string;
  postCode: string;
}

export type ViewType = 'table' | 'card';
