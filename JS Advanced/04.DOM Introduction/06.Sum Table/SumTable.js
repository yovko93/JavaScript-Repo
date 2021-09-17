function sumTable() {
    // const rows = document.querySelectorAll('table tr');

    // let sum = 0;

    // for (let i = 1; i < rows.length - 1; i++) {
    //     const cols = rows[i].children;
        
    //     sum += Number(cols[cols.length - 1].textContent);
    // }

    // document.getElementById('sum').textContent = sum;

    
    //------- 2nd way
    const rows = [...document.querySelectorAll('table tr')].slice(1, -1);

    document.getElementById('sum').textContent = rows.reduce((sum, row) => {
        return sum + Number(row.lastElementChild.textContent);
    }, 0);
}