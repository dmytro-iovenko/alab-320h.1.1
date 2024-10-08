import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";
import styled from "styled-components";

const HomePageContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 10px;
`;

export default function Homepage() {
  return (
    <HomePageContainer>
      <Header></Header>
      <SearchBar></SearchBar>
      <EmployeeList></EmployeeList>
    </HomePageContainer>
  );
}
