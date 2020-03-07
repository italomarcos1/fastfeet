import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Label } from './styles';

import logo from '~/assets/logo.svg';

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.profile);

  const [...active] = useSelector(state => state.selected);

  function handleLogOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Label to="/orders">
            <img src={logo} alt="FastFeet logo" />
          </Label>
          <div>
            <Label to="/orders" selected={active[0]}>
              Encomendas
            </Label>
            <Label to="/deliverymen" selected={active[1]}>
              Entregadores
            </Label>
            <Label to="/recipients" selected={active[2]}>
              Destinatários
            </Label>
            <Label to="/problems" selected={active[3]}>
              Problemas
            </Label>
          </div>
        </nav>
        <aside>
          <h1>{user.name}</h1>
          <button type="button" onClick={handleLogOut}>
            sair do sistema
          </button>
        </aside>
      </Content>
    </Container>
  );
}
