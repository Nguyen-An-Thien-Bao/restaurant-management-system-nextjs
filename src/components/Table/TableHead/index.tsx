function TableHead({ headList }: { headList: { title: string; className?: string }[] }) {
    return (
        <thead className="bg-white select-none">
            <tr className="capitalize text-left">
                {headList.map((ele, idx) => (
                    <th
                        key={idx}
                        className={`${ele.className} border-x pl-2 border-black first:border-l-0 last:border-r-0 py-2 text-lg`}
                    >
                        {ele.title}
                    </th>
                ))}
            </tr>
        </thead>
    );
}

export default TableHead;
