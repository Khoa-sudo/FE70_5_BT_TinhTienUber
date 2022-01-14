var mangThongBao = ["Vui lòng nhập số Kilomet", "Vui lòng nhập thời gian chờ"];
function kiemTraNhap(idField,idThongBao,indexChuoiTB){
  var valueField = getMyEle(idField).value;
  var thongBao = getMyEle(idThongBao);
  if(valueField === ""){
    thongBao.innerHTML = mangThongBao[indexChuoiTB];
  }
}
// function kiemTraNhapKm() {
//   var soKM = document.querySelector("#soKM").value;
//   var thongBaoKm = document.getElementById("thongBaoSoKm");
//   if (soKM === "") {
//     thongBaoKm.innerHTML = mangThongBao[0];
//     document.querySelector("#soKM").focus();
//   }
//   soKM = parseFloat(soKM);
//   return soKM;
// }

// function kiemTraNhapTgCho() {
//   var thoiGianCho = document.querySelector("#thoiGianCho").value;
//   var thongBaoTgCho = document.getElementById("thongBaoTgCho");
//   if (thoiGianCho === "") {
//     thongBaoTgCho.innerHTML = mangThongBao[1];
//     document.querySelector("#thoiGianCho").focus();
//   }
//   return thoiGianCho;
// }

document.querySelector("#nutTinhTien").addEventListener("click", function () {
  var xuatGiaTien = document.querySelector("#xuatTien");
  var soKM = document.querySelector("#soKM").value;
  var thongBaoKm = document.getElementById("thongBaoSoKm");
  if (soKM === "") {
    thongBaoKm.innerHTML = mangThongBao[0];
    document.querySelector("#soKM").focus();
  }
  soKM = parseFloat(soKM);

  var thoiGianCho = document.querySelector("#thoiGianCho").value;
  var thongBaoTgCho = document.getElementById("thongBaoTgCho");
  if (thoiGianCho === "") {
    thongBaoTgCho.innerHTML = mangThongBao[1];
    document.querySelector("#thoiGianCho").focus();
  }
  
  //Chọn loại xe
  var loaiXe = selectCarType();

  var divThanhTien = document.querySelector("#divThanhTien");
  divThanhTien.style.display = "block";

  var tongTien = 0;

  switch (loaiXe) {
    case "Uber X":
      if (soKM <= 1) {
        tongTien = 8000 + thoiGianCho * 2000;
        console.log(tongTien);
      } else if (soKM > 1 && soKM <= 20) {
        tongTien = 8000 + (soKM - 1) * 12000 + thoiGianCho * 2000;
      } else if (soKM >= 21) {
        tongTien = 8000 + 20 * 12000 + (soKM - 21) * 10000 + thoiGianCho * 2000;
      }
      break;
    case "Uber SUV":
      if (soKM <= 1) {
        tongTien = 9000 + thoiGianCho * 3000;
        console.log(tongTien);
      } else if (soKM > 1 && soKM <= 20) {
        tongTien = 9000 + (soKM - 1) * 14000 + thoiGianCho * 3000;
      } else if (soKM >= 21) {
        tongTien = 9000 + 20 * 14000 + (soKM - 21) * 12000 + thoiGianCho * 3000;
      }
      break;
    case "Uber Black":
      if (soKM <= 1) {
        tongTien = 10000 + thoiGianCho * 4000;
        console.log(tongTien);
      } else if (soKM > 1 && soKM <= 20) {
        tongTien = 10000 + (soKM - 1) * 16000 + thoiGianCho * 4000;
      } else if (soKM >= 21) {
        tongTien = 9000 + 20 * 16000 + (soKM - 21) * 14000 + thoiGianCho * 4000;
      }
      break;
  }

  xuatGiaTien.innerHTML = parseFloat(tongTien);
  var getDate = new Date();
  var date = getDate.getDate();
  var month = getDate.getMonth();
  var year = getDate.getFullYear();

  // In hoá đơn
  document.querySelector("#date").innerHTML = `${date}/${month + 1}/${year}`;
  document.querySelector("#loaiXe").innerHTML = loaiXe;
  document.querySelector("#soKm").innerHTML = soKM;
  document.querySelector("#tgCho").innerHTML = thoiGianCho;
  document.querySelector("#tongCong").innerHTML = tongTien;
});

/*
var nutTinhTien = document.querySelector("#nutTinhTien");
nutTinhTien.onclick = tinhTien;

function tinhTien() {
  var xuatGiaTien = document.querySelector("#xuatTien");

  var soKM = document.querySelector("#soKM").value;
  soKM = parseFloat(soKM);
  if (soKM === "") {
    alert("Không để trống")
    document.querySelector("#soKM").focus();
    return false;
  }

  var thoiGianCho = document.querySelector("#thoiGianCho").value;
  thoiGianCho = parseFloat(thoiGianCho);
  if (thoiGianCho === "") {
    document.querySelector("#thoiGianCho").focus();
    return false;
  }

  //Chọn loại xe
  var loaiXe = selectCarType();

  var divThanhTien = document.querySelector("#divThanhTien");
  divThanhTien.style.display = "block";

  var tongTien = 0;

  switch (loaiXe) {
    case "Uber X":
      if (soKM <= 1) {
        tongTien = 8000 + thoiGianCho * 2000;
        console.log(tongTien);
      } else if (soKM > 1 && soKM <= 20) {
        tongTien = 8000 + (soKM - 1) * 12000 + thoiGianCho * 2000;
      } else if (soKM >= 21) {
        tongTien = 8000 + 20 * 12000 + (soKM - 21) * 10000 + thoiGianCho * 2000;
      }
      break;
    case "Uber SUV":
      if (soKM <= 1) {
        tongTien = 9000 + thoiGianCho * 3000;
        console.log(tongTien);
      } else if (soKM > 1 && soKM <= 20) {
        tongTien = 9000 + (soKM - 1) * 14000 + thoiGianCho * 3000;
      } else if (soKM >= 21) {
        tongTien = 9000 + 20 * 14000 + (soKM - 21) * 12000 + thoiGianCho * 3000;
      }
      break;
    case "Uber Black":
      if (soKM <= 1) {
        tongTien = 10000 + thoiGianCho * 4000;
        console.log(tongTien);
      } else if (soKM > 1 && soKM <= 20) {
        tongTien = 10000 + (soKM - 1) * 16000 + thoiGianCho * 4000;
      } else if (soKM >= 21) {
        tongTien = 9000 + 20 * 16000 + (soKM - 21) * 14000 + thoiGianCho * 4000;
      }
      break;
  }
  
  xuatGiaTien.innerHTML = parseFloat(tongTien);
  var getDate = new Date();
  var date = getDate.getDate();
  var month = getDate.getMonth();
  var year = getDate.getFullYear();

  // In hoá đơn
  document.querySelector("#date").innerHTML = `${date}/${month + 1}/${year}`;
  document.querySelector("#loaiXe").innerHTML = loaiXe;
  document.querySelector("#soKm").innerHTML = soKM;
  document.querySelector("#tgCho").innerHTML = thoiGianCho;
  document.querySelector("#tongCong").innerHTML = tongTien;
}
*/

function selectCarType() {
  var result;
  var uberX = document.querySelector("#uberX").checked;
  var uberSUV = document.querySelector("#uberSUV").checked;
  var uberBlack = document.querySelector("#uberBlack").checked;

  if (uberX) {
    result = "Uber X";
  } else if (uberSUV) {
    result = "Uber SUV";
  } else if (uberBlack) {
    result = "Uber Black";
  }

  return result;
}
