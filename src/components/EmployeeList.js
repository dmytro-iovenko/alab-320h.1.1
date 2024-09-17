import EmployeeListItem from "./EmployeeListItem";
import styled from "styled-components";

const EmployeeListContainer = styled.section`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export default function EmployeeList() {
  return (
    <EmployeeListContainer>
      <EmployeeListItem></EmployeeListItem>
      <EmployeeListItem></EmployeeListItem>
      <EmployeeListItem></EmployeeListItem>
      <EmployeeListItem></EmployeeListItem>
      <EmployeeListItem></EmployeeListItem>
      <EmployeeListItem></EmployeeListItem>
    </EmployeeListContainer>
  );
}
