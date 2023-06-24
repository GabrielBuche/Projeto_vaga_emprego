import { ModalCard, ModalContent } from "./styles";

interface ModalCardProps{ 
    openModal: boolean;
}

export function ModalSingUp({openModal}: ModalCardProps) {
    return (
        <ModalCard
            title="Cadastre-se"
            open={openModal}
        >
            <ModalContent>


            </ModalContent>
        </ModalCard>
    )
}