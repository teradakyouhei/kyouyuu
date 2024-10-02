document.getElementById("inspection-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let remarks = '';

    // 備考のテキストエリアを全てチェックし、非表示になっていないもの（✕の場合）を取得
    document.querySelectorAll("textarea.remark").forEach(function(remarkField) {
        if (remarkField.style.display !== "none" && remarkField.value.trim() !== "") {
            remarks += `<p>${remarkField.previousElementSibling.previousElementSibling.textContent}: ${remarkField.value}</p>`;
        }
    });

    // 備考をまとめて表示
    document.getElementById("remarks-summary").innerHTML = remarks || '<p>備考なし</p>';
});

// 判定が✕の場合は備考入力欄を表示、それ以外は非表示
function handleJudgementChange(selectElement) {
    const remarkField = selectElement.nextElementSibling;
    if (selectElement.value === "✕") {
        remarkField.style.display = "block";
    } else {
        remarkField.style.display = "none";
        remarkField.value = "";  // 選択が○に戻った場合、備考をクリア
    }
}
