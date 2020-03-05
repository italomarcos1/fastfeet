import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Label } from './styles';

import logo from '~/assets/fastfeet-logo.png';

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.profile);

  function handleLogOut() {
    dispatch(signOut());
  }
  // array de valores
  // uma funcao q zera todos
  // OU um valor compartilhado
  return (
    <Container>
      <Content>
        <nav>
          <Label to="/orders">
            <img src={logo} alt="FastFeet logo" />
          </Label>
          <div>
            <Label to="/orders" selected>
              Encomendas
            </Label>
            <Label to="/deliverymen" selected={false}>
              Entregadores
            </Label>
            <Label to="/recipients" selected={false}>
              Destinatários
            </Label>
            <Label to="/problems" selected={false}>
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
