let arr = ["Iphone", "Samsung", "Sony", "Xiaomi"];

function showALL(){
    let html = '';
    for (let i = 0; i < arr.length; i++) {
        html+= `
        <tr>
            <td>${arr[i]}</td>
            <td><button onclick="edit(${i})">Edit</button></td>
            <td><button onclick="remove(${i})">Delete</button></td>
        </tr>
        
        `
    }
    document.getElementById('list').innerHTML = html;
}

function add(){
    let newProduct = document.getElementById('new-product').value;
    arr.push(newProduct);
    showALL();
    document.getElementById("new-product").value = '';
}

function remove(index) {
    arr.splice(index, 1);
    showALL();
}

function edit(index) {
    let product = prompt("Nhập sản phẩm mới");
    arr[index] = product;
    showALL();
}
showALL();