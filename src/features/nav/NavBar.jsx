import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import SignedOutMenu from './SignedOutMenu.jsx';
import SignedInMenu from './SignedInMenu.jsx';
import { useSelector } from 'react-redux';

export default function NavBar({setFormOpen}) {
  const {authenticated} = useSelector(state => state.auth);

  return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item
            as={NavLink}
            exact
            to='/'
            header
          >
            <img src="/assets/bikeinv.png" alt="logo" style={{marginRight: 15}}/>
              funschit
          </Menu.Item>
          <Menu.Item as={NavLink} to='/events' name='Events'/>
          <Menu.Item as={NavLink} to='/sandbox' name='Sandox'/>
          {authenticated &&
          <Menu.Item as={NavLink} to='/createEvent'>
            <Button
              positive
              inverted
              content='Create Event'
            />
          </Menu.Item>}
          {authenticated ? (
            <SignedInMenu />
          ) : (
          <SignedOutMenu />
          )}
        </Container>
      </Menu>
  )
}
