import React from 'react';
import styled from 'styled-components';


const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const MenuItem = styled.li`
  font-family: 'Helvetica', sans-serif;
  font-size: 16px;

  a {
    color: red;
  }
`;

const Menu = ({link, text}) => {
  return (
    <MenuList>
      <MenuItem>
        <a href={link} target="_blank">{text}</a>
      </MenuItem>
    </MenuList>
  )
}

export default Menu;