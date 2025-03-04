
let result = "javascript" + 5;
// "javascript5"
// Nối chuỗi vì toán tử `+` có một toán hạng là chuỗi

let result = "javascript" - 1;
// NaN
// Phép trừ không thể thực hiện với chuỗi, nên "javascript" không thể chuyển thành số -> NaN

let result = "3" + 2;
// "32"
// Phép cộng với chuỗi -> chuyển số `2` thành chuỗi và nối lại

let result = "5" - 4;
// 1
// Phép trừ yêu cầu số, nên chuỗi "5" sẽ được chuyển thành số trước khi tính toán

let result = isNaN("123");
// false
// "123" là chuỗi nhưng có thể chuyển thành số -> không phải NaN -> false

let result = isNaN("hello");
// true
// "hello" không thể chuyển thành số -> NaN -> isNaN() trả về true

let result = Number.isNaN("123");
// false
// Number.isNaN() không tự động ép kiểu, "123" là chuỗi nên không phải NaN -> false

let result = Number.isNaN(NaN);
// true
// // NaN chính xác là NaN -> Number.isNaN() trả về true