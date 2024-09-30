'use client';
import { useState } from 'react';
import TableItem from '@/components/TableItem';
import { table } from 'console';

const tables = [
    {
        tableNumber: 1,
        tableStatus: 1,
        tableCapacity: 4,
    },
    {
        tableNumber: 2,
        tableStatus: 2,
        tableCapacity: 2,
    },
    {
        tableNumber: 3,
        tableStatus: 0,
        tableCapacity: 6,
    },
    {
        tableNumber: 4,
        tableStatus: 1,
        tableCapacity: 4,
    },
];

function WaiterTable() {
    const [tableList, setTableList] = useState(tables);

    const handleFilterTable = (statusNumber?: number): void => {
        if (statusNumber === undefined) {
            setTableList(tables);
            return;
        }
        const result = tables.filter((ele) => ele.tableStatus === statusNumber);
        setTableList(result);
    };
    return (
        <div>
            <button onClick={() => handleFilterTable()}>all</button>
            <button className="mx-4" onClick={() => handleFilterTable(0)}>
                availabity
            </button>
            <button className="mx-4" onClick={() => handleFilterTable(1)}>
                in reservation
            </button>
            <button onClick={() => handleFilterTable(2)}>in serve</button>
            <div className="px-4 mt-20 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {tableList.map((ele, idx) => (
                    <TableItem tableData={ele} key={idx} />
                ))}
            </div>
        </div>
    );
}

export default WaiterTable;
