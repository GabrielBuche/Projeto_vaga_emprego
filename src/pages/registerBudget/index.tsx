import  MenuComponent from '../../components/Menu'
import { Container, Content } from './styles'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';


  
export default function RegisterBudget() {

    const onFinish = (values: any) => {
        console.log('Received values of form:', values);
        const products = values.users;
        const enterpriseSet = new Set<string>();
    
        for (const product of products) {
          const enterprise = product.enterprise;
          if (enterpriseSet.has(enterprise)) {
            throw new Error('Não é permitido cadastrar a mesma empresa mais de uma vez');
          }
          enterpriseSet.add(enterprise);
        }
      
        for (const product of products) {            
          if (products.length <= 3) {
            throw new Error('É necessário cadastrar pelo menos 3 itens do mesmo produto');
          }
          console.log(products);
          
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
                                                name={[name, 'productName']}
                                                rules={[{ required: true, message: 'Digite o nome do Produto' }]}
                                            >
                                                <Input placeholder="Produto" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'price']}
                                                rules={[{ required: true, message: 'Digite o preço' }]}
                                            >
                                                <Input placeholder="Preço" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'enterprise']}
                                                rules={[{ required: true, message: 'Digite o nome da empresa' }]}
                                            >
                                                <Input placeholder="Empresa" />
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
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Content>
            </MenuComponent>
        </Container>
    )
}