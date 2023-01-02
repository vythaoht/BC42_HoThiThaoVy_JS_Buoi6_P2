document.getElementById('result').onclick = function () {
    let number = document.getElementById('number').value;
    let result = "";
    for (let i = 2; i <= number; i++) {
        if (kiemTraSnt(i)) {
            result += i + " ";
        }
    }
    document.getElementById('showResult').innerHTML = result;
}

function kiemTraSnt(n) {
    if (n < 2) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    if (n % 2 === 0) {
        return false;
    }
    // Ta mặc định ban đầu là SNT
    let isCheck = true;
    // Tối ưu hơn: Kiểm tra các số lẻ từ 3 đến căn bậc 2 của n, xem có số nào mà n chia hết hay ko
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            isCheck = false;
        }
    }
    return isCheck;
}