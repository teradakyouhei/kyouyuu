// すべてのチェックボックスを取得し、それぞれにイベントリスナーを追加
const checkboxes = document.querySelectorAll('.checkbox');
        
checkboxes.forEach(function(checkbox, index) {
    checkbox.addEventListener('change', function() {
        const quantityInput = document.querySelectorAll('.quantityInput')[index];

        // チェックされた場合に対応するテキストボックスを表示、解除された場合は非表示
        if (checkbox.checked) {
            quantityInput.style.display = 'block';  // テキストボックスを表示
        } else {
            quantityInput.style.display = 'none';   // テキストボックスを非表示
        }
    });
});