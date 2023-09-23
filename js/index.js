// tạo array dssv chứa object sv
var dssv = [];
const DSSV_LOCAL = "DSSV_LOCAL";
// render lại data từ localStorage khi user reload
var dataJson = localStorage.getItem(DSSV_LOCAL);
// convert từ json sang array
if (dataJson != null) {
  // kiểm tra dữ liệu dưới local storage có tồn tại hay ko trước khi đi render
  dssv = JSON.parse(dataJson).map(function(sv){
    return new SinhVien()
    
  });

  renderDSSV(dssv);
}

function themSV() {
  var sv = layThonTinTuForm();
  //validate dữ liệu trước khi thêm
  // var isValid =
  //   kiemTraRong(sv.ma, "spanMaSV") &
  //   kiemTraRong(sv.ten, "spanTenSV") &
  //   kiemTraTrung(sv.ma, "spanMaSV", dssv, "Mã sinh viên đã tồn tại", "ma") &
  //   kiemTraTrung(
  //     sv.email,
  //     "spanEmailSV",
  //     dssv,
  //     "Email đã được sử dụng",
  //     "email"
  //   );
  //kt ma sv
  var isValid =
    kiemTraRong(sv.ma, "spanMaSV") && 
    kiemTraRong(sv.ten, "spanTenSV") &&
    kiemTraTrung(sv.ma, "spanMaSV", dssv, "Mã sinh viên đã tồn tại", "ma");
  //kt email sv
  isValid = 
    isValid &
    kiemTraTrung(
      sv.email,
      "spanEmailSV",
      dssv,
      "Email đã được sử dụng",
      "email"
    );
  if (!isValid) {
    //nếu isValid false thì dừng function
    return;
  }
  //   thêm sv vừa được tạo vào array dssv
  dssv.push(sv);
  renderDSSV(dssv);
  // localStorage , json stringtify , json parse
  //   convert array thành json để lưu xuống local
  var dataJson = JSON.stringify(dssv);
  //   lưu json vào localStorage => khi user load trang thì data ko bị mất
  localStorage.setItem(DSSV_LOCAL, dataJson);
}

function xoaSV(id) {
  // tìm vị trí sv nằm trong dssv có ma trùng vs id
  var index;
  for (var i = 0; i < dssv.length; i++) {
    if (dssv[i].ma == id) {
      index = i;
    }
  }
  // xoá phần tử tại ví trí index trong dssv
  dssv.splice(index, 1);
  // GỌI lại renderDSSV sau khi xoá => tạo mới lại layout với data mới nhất
  renderDSSV(dssv);
}

function suaSV(id) {
  var index = dssv.findIndex(function (item) {
    return item.ma == id;
  });
  var sv = dssv[index];
  // hiển thị thông tin lên form
  document.getElementById("txtMaSV").value = sv.ma;
}
// forEach

// dssv.forEach(function (item) {
//   console.log("😀 - dssv.forEach - item", item);
// });
