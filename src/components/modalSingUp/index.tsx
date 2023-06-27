import { useState } from 'react';
import { Modal, notification } from 'antd';

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
    const { Register } = useAuth();
    const [userName, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [error, setError] = useState<string>('');

    const handleOk = () => {

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



        Register(userName, email, password, repeatPassword)

            .then(() => {

                navigate('/budget');

            })
    };

    return (
        <>
            <Modal
                title="Cadastre-se"
                open={openModal}
                onOk={handleOk}
                onCancel={() => setOpenModal(false)}
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


