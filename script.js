document.getElementById('add-item').addEventListener('click', function() {
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    const total = quantity * price;

    const table = document.getElementById('billing-table');
    const row = table.insertRow();
    row.innerHTML = `<td>${item}</td><td>${quantity}</td><td>${price}</td><td>${total}</td>`;

    document.getElementById('item').value = '';
    document.getElementById