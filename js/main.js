function tinhTien() {
  var xuatGiaTien = document.querySelector("#xuatTien");

  var soKM = document.querySelector("#soKM").value;
  if (soKM === "") {
    xuatGiaTien.innerHTML = "Number must be filled out";
    document.querySelector("#soKM").focus();
    return false;
  }

  var thoiGianCho = document.querySelector("#thoiGianCho").value;
  if (thoiGianCho === "") {
    document.querySelector("#thoiGianCho").focus();
    alert("Waiting time must be filled out");
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
        tongTien = 8000 + (20 * 12000) + (soKM - 21) * 10000 + thoiGianCho * 2000;
      }
      break;
    case "Uber SUV":
      if (soKM <= 1) {
        tongTien = 9000 + thoiGianCho * 3000;
        console.log(tongTien);
      } else if (soKM > 1 && soKM <= 20) {
        tongTien = 9000 + (soKM - 1) * 14000 + thoiGianCho * 3000;
      } else if (soKM >= 21) {
        tongTien = 9000 + (20 * 14000) + (soKM - 21) * 12000 + thoiGianCho * 3000;
      }
      break;
    case "Uber Black":
      if (soKM <= 1) {
        tongTien = 10000 + thoiGianCho * 4000;
        console.log(tongTien);
      } else if (soKM > 1 && soKM <= 20) {
        tongTien = 10000 + (soKM - 1) * 16000 + thoiGianCho * 4000;
      } else if (soKM >= 21) {
        tongTien = 9000 + (20 * 16000) + (soKM - 21) * 14000 + thoiGianCho * 4000;
      }
      break;
  }

  xuatGiaTien.innerHTML = tongTien;
  return tongTien;
}

function inHoaDon() {
  var soKM = document.querySelector("#soKM").value;
  if (soKM === "") {
    xuatGiaTien.innerHTML = "Number must be filled out";
    document.querySelector("#soKM").focus();
    return false;
  }

  var thoiGianCho = document.querySelector("#thoiGianCho").value;
  if (thoiGianCho === "") {
    document.querySelector("#thoiGianCho").focus();
    alert("Waiting time must be filled out");
    return false;
  }

  var inHoaDon = {
    loaiXe: `${selectCarType()}`,
    soKM: `${soKM}`,
    thoiGianCho: `${thoiGianCho}`,
    tongCong: `${tinhTien()}`,
  };
  document.querySelector("#inHoaDon").innerHTML = `
    <tr class="table-active">
      <td>${inHoaDon.loaiXe}</td>
      <td>${inHoaDon.soKM}</td>
      <td>${inHoaDon.thoiGianCho}</td>
      <td>${inHoaDon.tongCong}</td>
    </tr>`;
}

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
