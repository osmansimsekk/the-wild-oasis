import styled from "styled-components";

const StyledInformation = styled.div`
  position: absolute;
  background-color: #4338ca;
  width: 100%;
  text-align: center;
  color: white;
  padding: 0.5rem;
`;

function Information() {
  return (
    <StyledInformation>
      ✨ In this version, data manipulation is disabled. Only data is fetched
      from the database.
    </StyledInformation>
  );
}

export default Information;
