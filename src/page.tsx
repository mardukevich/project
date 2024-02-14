import * as React from 'react';

import { Content, Header } from 'antd/es/layout/layout';
import { Layout, Typography } from 'antd';

import { ViewType } from 'common/types';
import { View, ViewSwitch } from 'components/components';

const { Title } = Typography;

export function Page() {
  const [view, setView] = React.useState<ViewType>('table');

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Title level={4} >Список пользователей</Title>
        <ViewSwitch onChange={setView} />
      </Header>
      <Content>
        <View type={view} />
      </Content>
    </Layout>
  )
}
