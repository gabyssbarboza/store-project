import { Content } from '../../components/Content/Content';

import { Background, Container, Title, MenuIcon, ExitButton } from './_Header';

export const Header = ({ title, showSideBar, setShowSideBar }) => {
  return (
    <Background>
      <Container>
        <Content>
          <Title>{title}</Title>
          <ExitButton>
            <span>Sair</span>
          </ExitButton>
        </Content>
      </Container>
    </Background>
  );
};
