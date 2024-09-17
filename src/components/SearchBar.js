import styled from "styled-components";

const SearchBarContainer = styled.section`
  text-align: center;
  margin: 10px auto;
`;

const SearchBarInput = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export default function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchBarInput type="text" placeholder="Search..." />
    </SearchBarContainer>
  );
}
