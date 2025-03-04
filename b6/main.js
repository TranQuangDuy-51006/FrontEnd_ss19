let a = +prompt("Nhập a");
let b = +prompt("Nhập b");
let c = +prompt("Nhập c");
let x1, x2;
let delta = b**2 - 4*a*c;
if(delta < 0){
    console.log("Vô nghiệm!");
}
else if(delta == 0){
    console.log("Phương trình có nghiệm kép: ");
    x1 = ((-b) + (Math.sqrt(delta)))/ 2*a;
    console.log(`x1=x2=${x1}`);
}
else{
    console.log("Phương trình có 2 nghiệm phân biệt: ");
    x1 = ((-b) + (Math.sqrt(delta)))/ (2*a);
    x2 = ((-b) - (Math.sqrt(delta)))/ (2*a);
    console.log(`x1= ${x1}`);
    console.log(`x2= ${x2}`);
}