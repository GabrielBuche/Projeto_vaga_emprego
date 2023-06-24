import { useState } from 'react';
import { MenuComponent } from '../../components/Menu'
import { Container, ContainerInput } from './styles'
// import { InputComponent } from '../../components/input'
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Form, Input, Button } from 'antd';

interface Item {
    name: string;
    quotes: any;
}

export default function RegisterBudget() {
    const [items, setItems] = useState<Item[]>([{ name: '', quotes: ['', '', ''] }]);

    const handleItemChange = (index: number, field: keyof Item, value: string) => {
        const updatedItems = [...items];
        updatedItems[index][field] = value;
        setItems(updatedItems);
    };

    const handleQuoteChange = (itemIndex: number, quoteIndex: number, value: string) => {
        const updatedItems = [...items];
        updatedItems[itemIndex].quotes[quoteIndex] = value;
        setItems(updatedItems);
    };

    const handleAddItem = () => {
        setItems([...items, { name: '', quotes: ['', '', ''] }]);
    };

    const handleRemoveItem = (index: number) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    const handleSubmit = (values: any) => {
        console.log(values);

    };
    return (
        <Container>
            <MenuComponent>
                <Form onFinish={handleSubmit}>
                    {items.map((item, itemIndex) => (
                        <div key={itemIndex}>
                            <Form.Item label="Nome do item">
                                <Input
                                    value={item.name}
                                    onChange={(e) => handleItemChange(itemIndex, 'name', e.target.value)}
                                />
                            </Form.Item>
                            {item.quotes.map((quote, quoteIndex) => (
                                <Form.Item key={quoteIndex} label={`Cotação ${quoteIndex + 1}`}>
                                    <Input
                                        value={quote}
                                        onChange={(e) => handleQuoteChange(itemIndex, quoteIndex, e.target.value)}
                                    />
                                </Form.Item>
                            ))}
                            <Button
                                type="dashed"
                                onClick={() => handleRemoveItem(itemIndex)}
                                icon={<MinusCircleOutlined />}
                                danger
                            >
                                Remover Item
                            </Button>
                        </div>
                    ))}
                    <Button type="dashed" onClick={handleAddItem} block icon={<PlusOutlined />}>
                        Adicionar Item
                    </Button>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ marginTop: '16px' }}>
                            Cadastrar Orçamento
                        </Button>
                    </Form.Item>
                </Form>

            </MenuComponent>
        </Container>
    )
}