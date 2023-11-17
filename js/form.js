document.addEventListener('DOMContentLoaded', function () {
    const queryString = window.location.search.substring(1); 
    const queryParams = queryString.split('&');

    const params = {};
    queryParams.forEach(param => {
        const [key, value] = param.split('=');
        params[key] = decodeURIComponent(value);
    });

    const username = params['username'];
    const email = params['email'];
    const password = params['password'];

    let table = document.createElement('table');
    table.className = 'info-table';

    let titleRow = table.insertRow();
    let titleCell = titleRow.insertCell();
    titleCell.colSpan = 2; 
    titleCell.innerHTML = 'Informativo';

    let row1 = table.insertRow();
    let cell1 = row1.insertCell();
    cell1.className = 'field-label';
    cell1.innerHTML = "Username:";
    let cell2 = row1.insertCell();
    cell2.innerHTML = username;

    let row2 = table.insertRow();
    let cell3 = row2.insertCell();
    cell3.className = 'field-label';
    cell3.innerHTML = "Email:";
    let cell4 = row2.insertCell();
    cell4.innerHTML = email;

    let row3 = table.insertRow();
    let cell5 = row3.insertCell();
    cell5.className = 'field-label';
    cell5.innerHTML = "Password:";
    let cell6 = row3.insertCell();
    cell6.innerHTML = password;

    document.body.appendChild(table);
});
