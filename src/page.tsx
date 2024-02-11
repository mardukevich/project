import * as React from 'react';

import { View, ViewSwitch } from './components';
import { Flex, Layout, Pagination, Typography } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { ViewType } from './types';

const { Title } = Typography;

export function Page() {
  const [view, setView] = React.useState<ViewType>('table');

  return (
    <Layout>
      <Header>
        <Flex justify='space-between' align='center'>
          <Title level={2} >Список пользователей</Title>
          <ViewSwitch onChange={setView} />
        </Flex>
      </Header>
      <Content>
        <View 
          type={view} 
          onClicked={() => {}}
        />
      </Content>
    </Layout>
  )
}
