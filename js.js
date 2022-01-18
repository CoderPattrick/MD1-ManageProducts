let products=["Sony Xperia","Samsung Galaxy","Nokia 6","Xiaomi Redmi Note 4"];
function displayAllProducts(){
    let display ="<table>";
    for (let i = 0; i < products.length; i++) {
        display += "<tr><td>" +products[i] + "</td>" ;
        display += "<th><button onclick='editProduct(i)'>Edit</button></th>";
        display += "<th><button onclick ='deleteProduct(i)'>Delete</button></th>";
        display += "</tr>";
    }
    display += '</table>';
   document.getElementById("display").innerHTML = display;
}
displayAllProducts();

function addProduct(){
    let a = document.getElementById("newProduct").value;
    products.push(a);
    displayAllProducts();
}
function editProduct(x){
    let a = prompt("Nhập tên mới cho sản phẩm");
    let b = confirm("Xác nhận thay đổi tên là " + a + " ?");
    if(b){
        products[x] = a;
    }
}
function deleteObj(array,index){
    for (let i = index; i < array.length-1; i++) {
        array[i] = array[i+1]
    }
    array.pop();
}
function deleteProduct(index){
    let a = confirm("Xác nhận xóa?");
    if(a){
        deleteObj(products,index)
    }
}