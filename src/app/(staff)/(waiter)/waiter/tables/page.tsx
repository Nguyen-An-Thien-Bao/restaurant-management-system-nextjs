// import { useState } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tables',
    description: 'Generated by create next app',
};

import Header from '@/components/Header';
import TableItem from '@/components/TableItem';
import { getTableList } from '@/services';
import FilterBtn from '@/components/filterBtn';

async function WaiterTable() {
    const tableList = await getTableList();
    let temp = tableList;
    // const [tableList, setTableList] = useState(tables);

    const handleFilterTable = (statusNumber?: number): void => {
        if (statusNumber === undefined) {
            // setTableList(tables);
            return;
        }
        // const result = tables.filter((ele) => ele.tableStatus === statusNumber);
        // setTableList(result);
    };
    return (
        <>
            <Header />
            <div className="px-4 mt-4">
                <FilterBtn />
                <div className="mt-4 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {tableList.map(
                        (
                            ele: {
                                id: string;
                                tableNumber: number;
                                tableStatus: number;
                                tableCapacity: number;
                            },
                            idx: number,
                        ) => (
                            <TableItem tableData={ele} key={idx} />
                        ),
                    )}
                </div>
            </div>
        </>
    );
}

export default WaiterTable;
