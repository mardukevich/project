import * as React from 'react';

import { ViewSwitch, ViewType } from './components';
import { Flex, Layout, Pagination, Typography } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';

const { Title } = Typography;

export function Page() {
  const [view, setView] = React.useState<ViewType>();

  return (
    <Layout>
      <Header>
        <Flex justify='space-between' align='center'>
          <Title level={2} >Список пользователей</Title>
          <ViewSwitch onChange={setView} />
        </Flex>
      </Header>
      <Content>
        <View type={view} />
      </Content>
    </Layout>
  )
}
