import { useState, useEffect, HTMLAttributes } from 'react';

import { Header } from '../Header/Header';
import { Content } from '../Content/Content';

import { Container, Column } from './_WrapperPages';

export const WrapperPage = ({ title, showMenu = true, children }) => {
  const [showSideBar, setShowSideBar] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Column>
        <Header
          title={title}
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
        />
        <Content>{children}</Content>
      </Column>
    </Container>
  );
};
