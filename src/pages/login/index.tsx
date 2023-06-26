import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    LoginContainer,
    LoginCard,
    ButtonLogin,
    TextBtn,
    SingUp,
    ContainerSingUpText,
    Text,
    LineSeparator,
    ButtonSingUp,
} from './styles'

import { ModalSingUp } from '../../components/modalSingUp';
import { InputPassword } from '../../components/InputPassword';
import { InputComponent } from '../../components/input';
import { AuthContext } from '../../context/authProvider';


export default function Login() {
    const navigate = useNavigate()
    const { Authenticate } = useContext(AuthContext);
    const [userName, setUserName] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [openModalSingUp, setOpenModalSingUp] = useState<boolean>(false)

    function HandleClickSingUp() {
        setOpenModalSingUp(!openModalSingUp);
    }

    const HandleClickLogin = () => {
        Authenticate(userName, password)
            .then(() => {
                navigate('/dashboard');
            })
            .catch(error => {
                console.error('Erro de login:', error);
            });
    };

    return (
        <LoginContainer>
            <LoginCard>
                <InputComponent
                    type="text"
                    placeholder="Email"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <InputPassword
                    type="text"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <ButtonLogin
                    type="primary"
                    onClick={HandleClickLogin}
                >
                    <TextBtn>
                        Entrar
                    </TextBtn>
                </ButtonLogin>
                <ContainerSingUpText>
                    <SingUp
                        type={'link'}
                    >
                        <Text>Esqueceu a senha ?</Text>
                        Clique aqui!
                    </SingUp>
                </ContainerSingUpText>
                <LineSeparator />
                <ButtonSingUp
                    type={'primary'}
                    onClick={HandleClickSingUp}
                >
                    <TextBtn>Cadastre-se</TextBtn>
                </ButtonSingUp>

                <ModalSingUp openModal={openModalSingUp} setOpenModal={setOpenModalSingUp} />
            </LoginCard>
        </LoginContainer>
    )
}