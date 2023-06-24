import { useState } from 'react';
import {  Modal } from 'antd';
import { InputComponent } from '../input';
import { InputPassword } from '../InputPassword';

interface ModalProps {
    openModal: boolean
    setOpenModal: (openModal: boolean) => void;
}

export function ModalSingUp({ openModal, setOpenModal }: ModalProps) {
    const [ name, setName] = useState<string>('')
    const [ password, setPassword] = useState<string>('')
    const [ repeatPassword, setRepeatPassword] = useState<string>('')
    const [ email, setEmail] = useState<string>('')

    const handleOk = () => {
        if(email && name && repeatPassword === password){
            setOpenModal(false);
        } 
    };
    
    const handleCancel = () => {
        setOpenModal(false);
    };

    return (
        <>
            <Modal
                title="Cadastre-se"
                open={openModal}
                onOk={handleOk}
                onCancel={handleCancel}
                keyboard={true}
                okText='Cadastrar'
              
            >
                <InputComponent
                    placeholder='Nome'
                    type='Text'
                    value={name}
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


