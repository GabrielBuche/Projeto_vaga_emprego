import { useEffect } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { Input, Space, Tag } from 'antd';
import MenuComponent from '../../components/Menu'
import { TableComponent } from '../../components/table';
import { Container } from './styles'
import { useState } from 'react';
import { UseProducts } from '../../context/ProducstProvider/useProducts';


interface DataType {
    key: string;
    name: string;
    company: number;
    value: string;
    // tags: string[];
}

export default function Budget() {
    const { ListProducts } = UseProducts()
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([]);
    const { Search } = Input;

    useEffect(() => {
        CallData()
    }, [])

    async function CallData() {
        const response = await ListProducts()
        setData(response)
    }

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
        }
    ]


    //     {
    //         title: 'Tags',
    //         key: 'tags',
    //         dataIndex: 'tags',
    //         render: (_, { tags }) => (
    //             <>
    //                 {tags.map((tag) => {
    //                     let color = tag.length > 5 ? 'geekblue' : 'green';
    //                     if (tag === 'loser') {
    //                         color = 'volcano';
    //                     }
    //                     return (
    //                         <Tag color={color} key={tag}>
    //                             {tag.toUpperCase()}
    //                         </Tag>
    //                     );
    //                 })}
    //             </>
    //         ),
    //     },
    //     {
    //         title: 'Action',
    //         key: 'action',
    //         render: (_, record) => (
    //             <Space size="large">
    //                 <a> {record.name}</a>
    //                 <a>Aprovar</a>
    //             </Space>
    //         ),
    //     },
    

    const filteredData = data.filter(item =>
        Object.values(item).some(value =>
            String(value).toLowerCase().includes(searchText.toLowerCase())
        )
    );

    return (
        <Container>
            <MenuComponent>
                <Search type="text"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                />
                <TableComponent columns={columns} data={filteredData} />
            </MenuComponent>
        </Container>
    )
}