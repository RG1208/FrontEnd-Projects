function showToast(msg) {
    const toast = document.createElement('div')
    toast.className = 'toast';
    toast.innerHTML = msg;

    const container = document.getElementById("toast-container");
    container.appendChild(toast);

    setTimeout(function () {
        toast.classList.add('show');
    }, 100);

    setTimeout(function () {
        toast.classList.remove('show');
        // Remove the toast from the DOM after it is hidden
        setTimeout(function () {
            container.removeChild(toast);
        }, 500);
    }, 3000);
}

