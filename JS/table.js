//alert('import success');

function addRow(){
    var table = document.getElementById('table');
    //console.log(table);
    //获取插入位置
    var length = table.rows.length;
    //console.log(length);
    //插入行节点
    var newRow = table.insertRow(length);
    console.log(newRow);
    //newRow.innerHTML = '测试';

    //插入列节点对象

    var nameCol = newRow.insertCell(0);
    var phoneCol = newRow.insertCell(1);
    var actCol = newRow.insertCell(2);

    //修改节点文本内容
    nameCol.innerHTML = '未命名';
    phoneCol.innerHTML = '无联系方式';
    actCol.innerHTML = '<button onclick="editRow(this)">编辑</button><button onclick="deleteRow(this)">删除</button>';
}


function deleteRow(button){
    //console.log(button);

    var row = button.parentNode.parentNode;
    console.log(row);
    row.parentNode.removeChild(row);

}


function editRow(button){
    var row = button.parentNode.parentNode;
    var name = row.cells[0];
    var phone = row.cells[1];

    var inputname = prompt('请输入名字');
    var inputphone = prompt('请输入联系方式');

    name.innerHTML = inputname;
    phone.innerHTML = inputphone;
}