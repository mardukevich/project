import * as React from 'react';
import { useSearchParams } from 'react-router-dom';

import {  Radio  } from 'antd';

export type ViewType = 'table' | 'card';

export const ViewSwitch: React.FC<{ onChange: (view: ViewType) => void }> = ({ onChange }) => {
  const [searchParams, setSearchParams] = useSearchParams({ tab: 'table' });

  React.useEffect(() => {
    onChange(searchParams.get('tab') as ViewType ?? 'table');
  }, [])

  return <Radio.Group 
    value={searchParams.get('tab')}
    onChange={(e) => {
      onChange(e.target.value)
      searchParams.set('tab', e.target.value)
      setSearchParams(searchParams)
    }}>
      <Radio.Button value='table'>Таблица</Radio.Button>
      <Radio.Button value='card'>Карточка</Radio.Button>
    </Radio.Group>
}

interface ViewProps {
  type: ViewType;
  onClicked: (item: any) => void;
}

type PaginationType = {
  img: string;
  name: string;
  login: string;
  address: string;
  email: string;
  phone: string;
}

function getAddress(location: any) {
  const number = location['street']['number'];
  const street = location['street']['name'];
  const city = location['city'];
  const state = location['state'];
  const country = location['country'];
  const postCode = location['postCode'];
  return `${street} ${number}, ${city}, ${state}, ${country}, ${postCode}`
}

function convertToPaginationType(data: any[]): PaginationType[] {
    return data.map(item =>  ({
        img: item['picture']['thumbnail'],
        name: item['name']['first'] + ' ' + item['name']['last'],
        login: item['login'][ 'username'],
        address: getAddress(item['location']),
        email: item['email'],
        phone: item['phone']
      }))
}

function usePaginationData(page: number): PaginationType[] {
  const [data, setData] = React.useState<PaginationType[]>([])

  React.useEffect(() => {
    const url = `https://randomuser.me/api/?page=${page}&results=20&seed=abc` +
    '&inc=picture,name,login,location,phone,email'
    fetch(url)
      .then(response => response.json())
      .then(data => setData(convertToPaginationType(data.results)))
  }, [page])

  return data;
}

export const View: React.FC<ViewProps> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams({ tab: 'table' });

  const data = usePaginationData(+(searchParams.get('page') ?? 0)) 

  return <>
    {data}
  </>
}


