import MenuComponent from '../../components/Menu'
import { UseProducts } from '../../context/ProducstProvider/useProducts';
import { Container, Content } from './styles'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space, notification } from 'antd';



export default function RegisterBudget() {
    const { RegisterProducts } = UseProducts();

    const onFinish = async (values: any) => {

        const products = values.users;
        const enterpriseSet = new Set<string>();

        for (const product of products) {
            const enterprise = product.company;
            if (enterpriseSet.has(enterprise)) {
                const errormsg = 'Não é permitido cadastrar a mesma empresa mais de uma vez'

                const config = {
                    message: 'Erro',
                    description: errormsg,
                };

                notification.error(config)

                throw new Error(errormsg);
            }
            enterpriseSet.add(enterprise);
        }

        if (products.length < 3) {
            const errormsg = 'É necessário cadastrar pelo menos 3 itens do mesmo produto'
            const config = {
                message: 'Erro',
                description: errormsg,
            };

            notification.error(config)
            throw new Error();
        }


        try {
            await RegisterProducts(products)

        } catch (error) {
            console.error(error);
        }

    }

    return (
        <Container>
            <MenuComponent>
                <Content>
                    <Form
                        name="dynamic_form_nest_item"
                        onFinish={onFinish}
                        style={{ maxWidth: 600 }}
                        autoComplete="off"
                    >
                        <Form.List name="users">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'name']}
                                                rules={[{ required: true, message: 'Digite o nome do Produto' }]}
                                            >
                                                <Input placeholder="Produto" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'value']}
                                                rules={[{ required: true, message: 'Digite o preço' }]}
                                            >
                                                <Input placeholder="Preço" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'company']}
                                                rules={[{ required: true, message: 'Digite o nome da empresa' }]}
                                            >
                                                <Input placeholder="Empresa" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'description']}
                                            >
                                                <Input placeholder="Descrição" />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            Novo cadastro
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                            >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Content>
            </MenuComponent>
        </Container>
    )
}