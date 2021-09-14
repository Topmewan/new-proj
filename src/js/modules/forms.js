const forms = () => {

    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/,'');
        });
    });

    const message = {
        loading: 'Please wait...',
        success: 'Thank you! We call you later.',
        failure: 'Warning! Try again.'
    };

    const postData = async (url,data)=> {
        document.querySelector('.status').innerHTML = message.loading;
        let res = await fetch(url,{
            method: 'POST',
            body:data
        });
        return await res.text();
    }

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        })
    }

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.append(statusMessage);

            const formData = new FormData(item);

            postData('assets/server.php', formData)
                .then(res => {
                    statusMessage.innerHTML = message.success;
                })
                .catch(() => {
                    statusMessage.innerHTML = message.failure;
                })
                .finally(() => {
                    setTimeout(() => {
                        statusMessage.remove();
                    },2000);

                    clearInputs();
                }
            )
        });
    });



}

export default forms;