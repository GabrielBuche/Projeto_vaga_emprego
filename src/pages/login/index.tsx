import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LoginContainer,
  LoginCard,
  ButtonLogin,
  TextBtn,
  LineSeparator,
  ButtonSingUp,
  ErrorText
} from './styles';

import { ModalSingUp } from '../../components/modalSingUp';
import { InputPassword } from '../../components/InputPassword';
import { InputComponent } from '../../components/input';
import { useAuth } from '../../context/authProvider/useAuth';
import { notification } from 'antd';

export default function Login() {
  const navigate = useNavigate();
  const { Authenticate, Logout } = useAuth();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [openModalSingUp, setOpenModalSingUp] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    Logout()
  }, [])

  function handleClickSingUp() {
    setOpenModalSingUp(!openModalSingUp);
  }

  const handleClickLogin = async () => {
    if (!userName && !password) {

      const errormsg = 'Insira um email e senha';
      
      const config = {
        message: 'Erro',
        description: errormsg,
      };

      setError(errormsg);

      notification.error(config)
      
      return;
    }

    if (!userName) {
      
      const errormsg = 'Insira um Email';
      
      const config = {
        message: 'Erro',
        description: errormsg,
      };

      setError(errormsg);

      notification.error(config)
      
      return;
    }

    if (!password) {
      const errormsg = 'Insira uma senha';
      
      const config = {
        message: 'Erro',
        description: errormsg,
      };

      setError(errormsg);

      notification.error(config)
      
      return;
    }

    setError('');

    Authenticate(userName, password)
      .then(() => {

        navigate('/budget');

      })
      .catch(error => {
        console.error('Erro de login:', error);
      });
  };

  return (
    <LoginContainer>
      <LoginCard>
        {error && <ErrorText>{error}</ErrorText>}
        <InputComponent
          type="text"
          placeholder="Email"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <InputPassword
          type="text"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <ButtonLogin type="primary" onClick={handleClickLogin}>
          <TextBtn>Entrar</TextBtn>
        </ButtonLogin>
        <LineSeparator />
        <ButtonSingUp type="primary" onClick={handleClickSingUp}>
          <TextBtn>Cadastre-se</TextBtn>
        </ButtonSingUp>

        <ModalSingUp openModal={openModalSingUp} setOpenModal={setOpenModalSingUp} />
      </LoginCard>
    </LoginContainer>
  );
}
