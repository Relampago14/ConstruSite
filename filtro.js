document.getElementById('searchInput').addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    let items = document.querySelectorAll('#itemList li');

    items.forEach(function(item) {
        let text = item.textContent.toLowerCase();
        if (text.includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});