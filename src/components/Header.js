import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 10px;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  margin: 0;
  flex: 1;
`;

export default function Header() {
  const title = "Employee Directory";
  return (
    <HeaderContainer>
      <Title>{title}</Title>
    </HeaderContainer>
  );
}
