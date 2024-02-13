import * as React from 'react';

import { UserData, Users } from 'common/types';

function getAddress(location: any) {
  const number = location['street']['number'];
  const street = location['street']['name'];
  const city = location['city'];
  const state = location['state'];
  const country = location['country'];
  const postCode = location['postCode'];
  return `${street} ${number}, ${city}, ${state}, ${country}, ${postCode}`
}

function convertToUserData(data: any[]): UserData[] {
    return data.map(item =>  ({
        img: item['picture']['thumbnail'],
        name: item['name']['first'] + ' ' + item['name']['last'],
        login: item['login'][ 'username'],
        address: getAddress(item['location']),
        email: item['email'],
        phone: item['phone']
      }))
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