async function getTableList() {
    // await new Promise((resolve) => setTimeout(resolve, 20000));
    const res = await fetch('http://localhost:8080/table', {
        next: {
            revalidate: 15,
        },
    });
    return res.json();
}

export default getTableList;
