import * as React from 'react';

import { Content, Header } from 'antd/es/layout/layout';
import { Flex, Layout, Typography } from 'antd';

import { ViewType } from 'common/types';
import { View, ViewSwitch } from 'components/components';

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
        <View type={view} />
      </Content>
    </Layout>
  )
}
