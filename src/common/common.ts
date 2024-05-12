import * as React from 'react';

import { UserData, Users } from 'common/types';

interface UserInfo {
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

interface Location {
  street: { number: number; name: string };
  city: string;
  state: string;
  country: string;
  postCode: string;
}

function getAddress(location: Location): string {
  const { street, city, state, country, postCode } = location;
  return `${street.name} ${street.number}, ${city}, ${state}, ${country}, ${postCode}`;
}

function convertToUserData(data: UserInfo[]): UserData[] {
  return data.map(item => ({
    img: item.picture.large,
    name: `${item.name.first} ${item.name.last}`,
    login: item.login.username,
    address: getAddress(item.location),
    email: item.email,
    phone: item.phone
  }));
}

export function useFetchPage(page: number) {
  const [data, setData] = React.useState<UserData[]>([])
  const [error, setError] = React.useState();

  React.useEffect(() => {
    const url = `https://randomuser.me/api/?page=${page}&results=${Users.PerPage}&seed=abc` +
    '&inc=picture,name,login,location,phone,email'
    fetch(url)
      .then(response => response.json())
      .then(data => setData(convertToUserData(data.results)))
      .catch(setError)
  }, [page])

  return [data, error];
}