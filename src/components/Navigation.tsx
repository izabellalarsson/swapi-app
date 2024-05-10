import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavigation = styled.nav`
  /* background-color: #b11506; */
  padding: 2rem;

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-right: 1rem;
  }
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
