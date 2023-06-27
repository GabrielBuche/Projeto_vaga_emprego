import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: string;
    name: string;
    company: number;
    value: string;
    // tags: string[];
}

interface TableProps {
    columns: ColumnsType<DataType> 
    data: DataType[]
}

export function TableComponent({ columns, data }: TableProps) {
    return (
        <>
            <Table columns={columns} dataSource={data} />
        </>
    )
}