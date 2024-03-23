

const scriptUrl = 'https://script.google.com/macros/s/AKfycbznrGuYfdmBR8N0aDPvZgCnX_ClaeSfuIrugywFiBDQs_-m8DTpciSFk2NmnaBT_iTf/exec';
const form = document.querySelector("#form");

form.addEventListener('submit', e => {
    e.preventDefault();

    console.log(form);
    fetch(scriptUrl, { method: 'POST', body: new FormData(form) })
        .then(response => { alert('Seccsess!', response) })
        .catch(error => alert('Error', error.message))
})