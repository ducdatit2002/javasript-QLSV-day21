function kiemTraRong(value, idErr) {
    if(value != "") {
        return true;
    } else {
        document.getElementById(idErr).innerHTML="Mã hoặc tên sinh viên không được rỗng";
        return false;   
    }
}
function kiemTraTrung(value, idErr, dssv, message, key) {
    var index = dssv.findIndex(function (item) {
        return item[key] == value;
    });
    if (index == -1) {
        //Không tìm thấy value trong dssv => ko hợp lệ
        document.getElementById(idErr).innerText = "";
        return true;
    } else {
        document.getElementById(idErr).innerText = message;
        return false; 
    }
}