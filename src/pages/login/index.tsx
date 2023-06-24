import { useState } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import {
    LoginContainer,
    PasswordContainer,
    LoginCard,
    PasswordToggle,
    StyledInput,
    ButtonLogin,
    TextBtn,
    SingUp,
    ContainerSingUpText,
    Text,
    LineSeparator,
    ButtonSingUp,
    ModalCard,
    ModalContent
} from './styles'


export default function Login() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [openModalSingUp, setOpenModalSingUp] = useState<boolean>(false)

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };


    const handleUsernameChange = (event: any) => {
        setUserName(event.target.value);
    };

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };

    function HandleClickSingUp() {
        setOpenModalSingUp(!openModalSingUp);
    }

    return (
        <LoginContainer>
            <LoginCard>
                <StyledInput
                    type="text"
                    placeholder="Usuário"
                    value={userName}
                    onChange={handleUsernameChange}
                />
                <PasswordContainer>
                    <StyledInput
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Senha"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <PasswordToggle
                        type="text"
                        onClick={handlePasswordToggle}
                        icon={showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                    />
                </PasswordContainer>
                <ButtonLogin type="primary">
                    <TextBtn>
                        Entrar
                    </TextBtn>
                </ButtonLogin>
                <ContainerSingUpText>
                    <SingUp type={'link'}>
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
            </LoginCard>
            <ModalCard
                title="Cadastre-se"
                open={openModalSingUp}
            >
                <ModalContent>


                </ModalContent>
            </ModalCard>
        </LoginContainer>
    )
}