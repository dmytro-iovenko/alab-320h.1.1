import styled from "styled-components";

const EmployeeListItemContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 10px;

  &:last-child {
    border-bottom: none;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 50px;
`;

const Image = styled.img`
  border-radius: 50%;
  margin-right: 10px;
  width: 50px;
  height: 50px;
`;

const Name = styled.h2`
  font-size: 16px;
  margin: 0;
  display: flex;
  align-items: center;
`;

const Position = styled.p`
  font-size: 14px;
  margin: 0;
  color: #666;
`;

export default function EmployeeListItem() {
  const employeeName = "John Doe";
  const employeePosition = "President and CEO";
  const imgSrc = "https://xsgames.co/randomusers/avatar.php?g=male";
  const imgAlt = `${employeeName}, ${employeePosition}`;

  return (
    <EmployeeListItemContainer>
      <Image src={imgSrc} alt={imgAlt} />
      <Info>
        <Name>{employeeName}</Name>
        <Position>{employeePosition}</Position>
      </Info>
    </EmployeeListItemContainer>
  );
}
