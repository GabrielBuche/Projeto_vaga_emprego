import { useEffect } from 'react';
import { Input, Tag, Button } from 'antd';
import MenuComponent from '../../components/Menu';
import { TableComponent } from '../../components/table';
import { Container } from './styles';
import { useState } from 'react';
import { UseProducts } from '../../context/ProducstProvider/useProducts';
import { getUserLocalStorage } from '../../context/authProvider/utils';

export default function Budget() {
  const { ListProducts, ApproveProduct } = UseProducts();
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);
  const { Search } = Input;
  const gerente = getUserLocalStorage().user.gerente;

  useEffect(() => {
    CallData();
  }, []);

  async function CallData() {
    const response = await ListProducts();
    setData(response);
  }

  const handleApprove = async (productId: string) => {

    await ApproveProduct(productId);
    CallData()

  };

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Empresa',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Valor',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Descrição',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Aprovar',
      dataIndex: 'approved',
      key: 'approved',
      render: (text, record) => (
        <>
          {text ? (
            <Tag color="green">Aprovado</Tag>
          ) : gerente === 1 ? (
            <Button type="primary" onClick={() => handleApprove(record.id)}>
              Aprovar Orçamento
            </Button>
          ) : (
            <span>Em análise</span>
          )}
        </>
      ),
    },
  ];

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return (
    <Container>
      <MenuComponent>
        <Search type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <TableComponent columns={columns} data={filteredData} />
      </MenuComponent>
    </Container>
  );
}
