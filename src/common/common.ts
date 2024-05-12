import * as React from 'react';

import type { UserData, Location, UserAPI } from 'common/types';
import { Users } from 'common/types';

function getAddress(location: Location): string {
  const { street, city, state, country, postCode } = location;
  return `${street.name} ${street.number}, ${city}, ${state}, ${country}, ${postCode}`;
}

function convertToUserData(data: UserAPI[]): UserData[] {
  return data.map(item => ({
    img: item.picture.large,
    name: `${item.name.first} ${item.name.last}`,
    login: item.login.username,
    address: getAddress(item.location),
    email: item.email,
    phone: item.phone
  }));
}

export function useFetchPage(page: number): [UserData[], Error | null] {
  const [data, setData] = React.useState<UserData[]>([]);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const url = `https://randomuser.me/api/?page=${page}&results=${Users.PerPage}&seed=abc&inc=picture,name,login,location,email,phone`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setData(convertToUserData(data.results)))
      .catch(error => setError(new Error(error.message)));
  }, [page]);

  return [data, error];
}
