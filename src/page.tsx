import * as React from 'react';

import { View, ViewSwitch } from './components/components';
import { Flex, Layout, Typography } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { UserData, ViewType } from './types';
import Sider from 'antd/es/layout/Sider';
import { Card } from './components/card';

const { Title } = Typography;

export function Page() {
  const [view, setView] = React.useState<ViewType>('table');
  const [siderItem, setSiderItem] = React.useState<UserData>();

  return (
    <Layout>
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
            onClick={item => setSiderItem(item)}
          />
        </Content>
      </Layout>
      {siderItem && view == 'table' &&
        <Sider>
          <Card {...siderItem} />
        </Sider>
      }
    </Layout>
  )
}
