function doTheThings(){

    //adds new item to list
    $('button[type=submit]').on('click', function(event) {
        //stops page from refreshing
        event.preventDefault(); 
        //grabs value of input
        const inputValue = $('input[name=shopping-list-entry]').val();  
        //Template for new item

        //if statement checks if there is an input value before creating a new li. If not, input placeholder is updated
        if(inputValue == false){
            $('input').attr('placeholder', "ENTER NEW ITEM! :D");
        } else {
            $('input').attr('placeholder', "e.g., broccoli");

            $('ul').append(
                '<li>' +
                    '<span class="shopping-item">apples</span>' +
                    '<div class="shopping-item-controls">' +
                        '<button class="shopping-item-toggle">' +
                            '<span class="button-label">check</span>' +
                        '</button>' 
                        
                        + ' ' + //adds space between buttons

                        '<button class="shopping-item-delete">' +
                            '<span class="button-label">delete</span>' +
                        '</button>' +
                    '</div>' +
                '</li>'
                );

            //updates the last or newest .shopping-item span to have the value of the input
            $('span.shopping-item').last().html(inputValue); 
            //clears out input value
            $('input[name=shopping-list-entry]').val('');
        };
    }); 


    //check button applies class to the elememnts Parent/Child/Span
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        $(this).parents('li').children("span").toggleClass('shopping-item__checked'); 
    }); 

  
    //delete button removes the associated li 
    $('ul').on('click', '.shopping-item-delete', function(event) {
        $(this).closest("li").remove();  
    });
    
} 
$(doTheThings)


