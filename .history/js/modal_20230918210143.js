function SinhVien(ma, ten, matKhau, email, toan, ly, hoa) {
    this.ma = ma;
    this.ten = ten;
    this.matKhau = matKhau;
    this.email = email;
    this.toan = toan;
    this.ly = ly;
    this.hoa = hoa;
    this.tinhDTB = function() {
      var dtb = (this.toan + this.ly + this.hoa) / 4;
      return dtb;
    }
}