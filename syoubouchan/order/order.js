// 自動で受注№を1ずつ増やす
let orderNumber = 100000; // 初期値
document.getElementById('orderNumber').value = orderNumber;

document.getElementById('register').addEventListener('click', function() {
    alert('受注が登録されました');
    orderNumber++;
    document.getElementById('orderNumber').value = orderNumber;
});

document.getElementById('createOrderSheet').addEventListener('click', function() {
    window.location.href = 'order-sheet.html'; // 受注伝票作成ページへ移動
});

document.getElementById('createInspectionSheet').addEventListener('click', function() {
    window.location.href = '../tenkenhyou/tenkenhyou.html'; // 点検表作成ページへ移動
});

document.getElementById('goBack').addEventListener('click', function() {
    window.location.href = '../index.html'; // 戻るボタンのリンク先
});
