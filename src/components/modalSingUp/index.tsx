import { useState } from 'react';
import { Modal } from 'antd';

import { ErrorText } from './styles'
import { useNavigate } from 'react-router-dom';

import { InputComponent } from '../input';
import { InputPassword } from '../InputPassword';
import { useAuth } from '../../context/authProvider/useAuth';

interface ModalProps {
    openModal: boolean
    setOpenModal: (openModal: boolean) => void;
}

export function ModalSingUp({ openModal, setOpenModal }: ModalProps) {
    const navigate = useNavigate()
    const { Register, token } = useAuth();
    const [userName, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [error, setError] = useState<string>('');

    const handleOk = () => {

        if (!userName && !password) {
            setError('Insira um email e senha');
            return;
        }

        if (!userName) {
            setError('Insira um Email');
            return;
        }

        if (!password) {
            setError('Insira uma senha');
            return;
        }

        setError('');
    
        

        Register(userName, email, password, repeatPassword)   
        .then(() => {
            if (token) {
              navigate('/budget');
            }
          })
          .catch(error => {
            console.error('Erro de login:', error);
          });
    }; 

    return (
        <>
            <Modal
                title="Cadastre-se"
                open={openModal}
                onOk={handleOk}
                onCancel={()=> setOpenModal(false)}
                keyboard={true}
                okText='Cadastrar'

            >
                {error && <ErrorText>{error}</ErrorText>}
                <InputComponent
                    placeholder='Nome'
                    type='Text'
                    value={userName}
                    onChange={(e) => setName(e.target.value)}
                />
                <InputComponent
                    placeholder='E-mail'
                    type='Text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputPassword
                    placeholder='password'
                    type='Text'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <InputPassword
                    placeholder='Repita sua senha'
                    type='Text'
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                />
            </Modal>
        </>
    );
};


