let num = +prompt("Nhap so");

if(num % 3 == 0 && num % 5 == 0){
    console.log(`so ${num} chia het cho ca 3 va 5`);
}else{
    console.log(`so ${num} khong chia het cho ca 3 va 5`);
}