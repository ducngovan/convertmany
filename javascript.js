function convert() {
    let money, select1, select2, result ;
     money = document.getElementById('money').value;
     select1 = document.getElementById('select1').value;
     select2 = document.getElementById('select2').value;

    if(select1 =='vn' && select2 =='dlm'){
        result = money / 20000;
        document.getElementById('result').innerHTML=("so tien doi duoc " +result+ " USD");
    }
    else if (select1 =='usd' && select2 =='vnd'){
        result = money * 20000;
        document.getElementById('result').innerHTML=("so tien doi duoc " +result+ " VND");
    }else{
        alert("khong chan thiet phai chuyen");
    }

}