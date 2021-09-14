import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";

document.addEventListener('DOMContentLoaded', ()=>{
    "use strict";
    forms();
    modals();
    tabs('.glazing_slider','.glazing_block', '.glazing_content', 'active');

    tabs('.decoration_slider','.no_click', '.decoration_content > div > div', 'active');
})
