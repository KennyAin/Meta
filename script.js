let select_title = document.querySelectorAll(".select_title");
let select = document.querySelectorAll(".select");
let select_content = document.querySelectorAll(".select_content");
console.log(select);
for(var i = 0; i < select_title.length; i++){
    let current_select = select.item(i);
    let clear_but = current_select.querySelector(".option_content_clear_but");
    let current_select_title = select_title.item(i);
    current_select_title.onclick = function(){
        console.log(select);
       if(current_select.getAttribute("data-state") == "active"){
         current_select.setAttribute("data-state", "");
       }else{
         current_select.setAttribute("data-state", "active");
       }
    }
    clear_but.onclick = function(){
        let _quantity_text = current_select.querySelectorAll(".quantity_text");
        let reduce_buttons = current_select.querySelectorAll(".reduce_button");
        console.log(_quantity_text);
    
        for(var j = 0; j < _quantity_text.length; j++){
            _quantity_text.item(j).innerHTML = 0;
            reduce_buttons.item(j).classList.add("unactive_option_but");
            current_select_title.innerHTML = "Сколько гостей";
            current_select_title.setAttribute("data-quantity", 0);
        }
    }
    
}
for(var i = 0; i < select_content.length; i++){
    let option_action = select_content.item(i).querySelectorAll(".option_action");
    let current_select_title = select_title.item(i);
    for(var j = 0; j < option_action.length; j++){
        let current_item = option_action.item(j);
        let increase_but = current_item.querySelector(".increase_button");
        let reduce_but = current_item.querySelector(".reduce_button");
        let quantity_text = current_item.querySelector(".quantity_text");
        increase_but.onclick = function(){
            reduce_but.classList.remove("unactive_option_but");
            quantity_text.innerHTML = parseInt(quantity_text.innerHTML) + 1;
            current_select_title.setAttribute("data-quantity",
                    parseInt(current_select_title.getAttribute("data-quantity")) + 1);
            current_select_title.innerHTML = current_select_title.getAttribute("data-quantity") + " Гостя(-ей)";
        }
        reduce_but.onclick = function(){
            let value = parseInt(quantity_text.innerHTML);
            let value_title_quantity = parseInt(current_select_title.getAttribute("data-quantity")) - 1;
            if(value != 0){
                value--;
                if(value == 0){
                    this.classList.add("unactive_option_but");
                }
                quantity_text.innerHTML = value;
                current_select_title.setAttribute("data-quantity", value_title_quantity);
                if(value_title_quantity == 0){
                    current_select_title.innerHTML = "Сколько гостей";
                }else{
                    current_select_title.innerHTML = value_title_quantity + " Гостя(-ей)";
                }

            }
        }
    }
}