document.getElementById('generateButtons').addEventListener('click', function() {
    const items = [
        { id: 'extinguisher', name: '消火器', link: '../syoukaki/index.html' },
        { id: 'fireAlarm', name: '自動火災報知設備', link: 'fireAlarm.html' },
        { id: 'indoorHydrant', name: '屋内消火設備', link: 'indoorHydrant.html' },
        { id: 'powderExtinguisher', name: '粉末消火設備', link: 'powderExtinguisher.html' },
        { id: 'broadcast', name: '放送設備', link: 'broadcast.html' },
        { id: 'fireAlarmHousing', name: '住宅火災警報器', link: 'fireAlarmHousing.html' },
        { id: 'sprinkler', name: 'スプリンクラー設備', link: 'sprinkler.html' },
        { id: 'guidingLights', name: '誘導灯及び誘導標式', link: 'guidingLights.html' },
        { id: 'evacuationTools', name: '避難器具設備', link: 'evacuationTools.html' },
        { id: 'emergencyPower', name: '非常電源設備', link: 'emergencyPower.html' }
    ];

    const buttonContainer = document.getElementById('buttonContainer');
    buttonContainer.innerHTML = ''; // Clear previous buttons

    items.forEach(item => {
        const checkbox = document.getElementById(item.id);
        if (checkbox.checked) {
            const button = document.createElement('a');
            button.href = item.link;
            button.textContent = item.name;
            button.className = 'generated-button';
            buttonContainer.appendChild(button);
        }
    });
});
