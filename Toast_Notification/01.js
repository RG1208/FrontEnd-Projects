let container = document.getElementById("toast-container");
let SuccessMsg = 'Successfully Submitted!';
let InvalidMsg = 'Invalid input,Check again!';
let ErrorMsg = 'Please fix the error!';

function showToast(msg) {

    const toast = document.createElement('div')
    toast.classList.add('toast');
    toast.innerHTML = msg;


    container.appendChild(toast);

    if (msg.includes('error')) {
        toast.classList.add('error');
    }
    if (msg.includes('Successfully')) {
        toast.classList.add('success');
    }
    if (msg.includes('Invalid')) {
        toast.classList.add('invalid');
    }

    setTimeout(() => {
        toast.remove();
    }, 3500)


}

