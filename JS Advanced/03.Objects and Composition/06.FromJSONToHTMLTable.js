function solve(arr) {
    function escapeHtml(value) {
        let result = '';
        if(typeof value === 'number') {
            return value;
        }
        for(let i = 0; i < value.length; i++) {
            switch(value[i]) {
                case '&': result += '&amp;'; break;
                case '<': result += '&lt;'; break;
                case '>': result += '&gt;'; break;
                case '"': result += '&quot;'; break;
                case '\'': result += '&#39;'; break;
                default: result += value[i]; break;
            }
        }
 
        return result;
    }
 
    arr = JSON.parse(arr);
    let table = '<table>';
 
    const keys = Object.keys(arr[0]);
    table += '\n\t<tr>';
    keys.forEach(key => {
        table += `<th>${escapeHtml(key)}</th>`;
    });
    table += '</tr>';
 
    arr.forEach(person => {
        const values = Object.values(person);
        table += '\n\t<tr>';
        values.forEach(value => {
            table += `<td>${escapeHtml(value)}</td>`;
        });
        table += '</tr>';
    });
 
    table += '\n</table>';
    return table;
}
