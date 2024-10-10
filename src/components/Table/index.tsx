'use client';
import React, { useState } from 'react';
import TableHead from './TableHead';
import TableCell from './TableCell';
import FilterBtn from '../filterBtn';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import CustomPagination from '../Pagination';
import sampleDishs from '../../../sampleData';

const sample = [
    {
        title: '.id',
    },
    {
        title: 'name',
        className: 'w-1/5',
    },
    {
        title: 'category',
    },
    {
        title: 'price',
    },
    {
        title: 'image',
        className: 'w-[80px]',
    },
    {
        title: 'status',
    },
    {
        title: 'createAt',
    },
    {
        title: 'updateAt',
    },
];

const initForm = {
    name: '',
    category: 0,
    price: 0,
    image: '',
    status: 0,
    // createAt: new Date().toLocaleString('en-GB', { timeZone: 'UTC' }),
    // updateAt: new Date().toLocaleString('en-GB', { timeZone: 'UTC' }),
};

function Table({ children }: { children?: React.ReactNode }) {
    const [form, setForm] = useState(initForm);
    const [numberOfItemPerPage, setNumberOfItemPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const numberOfPagination = Math.ceil(sampleDishs.length / numberOfItemPerPage);
    const lastItem = currentPage * numberOfItemPerPage;
    const firstItem = lastItem - numberOfItemPerPage;
    let dataList = sampleDishs.slice(firstItem, lastItem);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setForm((prev) => ({ ...prev, image: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <>
            <Dialog>
                <div>
                    <DialogTrigger asChild>
                        <Button>Create New Dish</Button>
                    </DialogTrigger>
                    <FilterBtn />
                </div>
                <DialogContent className="w-[calc(100%-50px)] max-h-[calc(100%-50px)] rounded-lg md:max-w-[560px]">
                    <DialogHeader>
                        <DialogTitle>Create New Dish</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <form>
                            <label className="inline-block w-[100px] capitalize">name:</label>
                            <input
                                value={form.name}
                                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                                className="border border-black w-full"
                                type="text"
                            />
                            <br />

                            <label className="inline-block w-[100px] capitalize">price:</label>
                            <input
                                className="border border-black w-full"
                                type="text"
                                onChange={(e) => setForm((prev) => ({ ...prev, price: +e.target.value }))}
                            />
                            <br />

                            <label className="inline-block w-[100px] capitalize">category:</label>
                            <select
                                onChange={(e) => setForm((prev) => ({ ...prev, category: +e.target.value }))}
                                className="border border-black w-full"
                                name="category"
                                id="category"
                            >
                                <option value="0">Appertizer</option>
                                <option value="1">Main Course</option>
                                <option value="2">Dessert</option>
                                <option value="3">Drink</option>
                                <option value="4">Beverege</option>
                            </select>
                            <br />

                            <label className="inline-block w-[100px] capitalize">status:</label>
                            <select
                                onChange={(e) => setForm((prev) => ({ ...prev, category: +e.target.value }))}
                                className="border border-black w-full"
                                name="category"
                                id="category"
                            >
                                <option value="0">Still Available</option>
                                <option value="1">Sold Out</option>
                            </select>
                            <br />

                            <label className="inline-block w-[100px] capitalize">images:</label>
                            <input
                                accept="image/*"
                                onChange={handleFileChange}
                                className="border border-black w-full"
                                type="file"
                            />
                            <br />
                        </form>
                    </div>
                    <DialogFooter>
                        <DialogClose>
                            <span onClick={() => console.log(form)}>Create</span>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <div className="overflow-x-auto">
                <p>Total of Dish: {sampleDishs.length + 1}</p>
                <table className="w-full border-spacing-y-3 border-separate">
                    <TableHead headList={sample} />
                    <tbody>
                        {dataList.map((ele, idx) => (
                            <TableCell cellData={ele} key={idx} />
                        ))}
                        {/* {children} */}
                    </tbody>
                </table>
            </div>
            <CustomPagination
                totalPages={numberOfPagination}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </>
    );
}

export default Table;
