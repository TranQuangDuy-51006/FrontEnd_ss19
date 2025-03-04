let moneyUSD = +prompt("Nhap tien USD -> VND: ");
if(moneyUSD > 0){
  console.log(`${(moneyUSD*23000).toLocaleString("vi-VN")} VND`);  
}else{
    console.log("tien khong hop le");
}

let moneyVND = +prompt("Nhap tien VND -> USD: ");

if(moneyVND > 0){
    console.log(`${(moneyVND/23000).toFixed(2)} USD`);
  }else{
      console.log("tien khong hop le");
  }
