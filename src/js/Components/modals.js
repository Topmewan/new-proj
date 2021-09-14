
const modals = () =>{
    function bindModal(triggerSelector,modalSelector,closeSelector){

        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e)=>{
                if(e.target){
                    e.preventDefault();
                }

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            });
        });

        close.addEventListener('click',()=>{
            modal.style.display = "none";
            document.body.style.overflow = "";
        });

        modal.addEventListener('click', (e)=>{
            if(e.target === modal){
                modal.style.display = "none";
                document.body.style.overflow = "";
            }
        });

    }
    bindModal('.popup_engineer_btn','.popup_engineer','.popup_engineer .popup_close');

    bindModal('.phone_link','.popup','.popup .popup_close');
}

export default modals;