async function getMenu() {
    const res = await fetch('http://localhost:8080/menu', {
        cache: 'no-cache',
    });
    return res.json();
}

export default getMenu;
