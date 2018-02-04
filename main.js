$(".form").submit(function(event) {
    event.preventDefault();
 });
 
 // Function to add new item to list
 function addItem () {
 var $addedP = $('<p>')
 var $list = $('.list')
 var $addedInput = $('<input>').attr('type','checkbox')
 var $addedI = $('<i>').attr('class','glyphicon glyphicon-star')
 var $addedI2 = $('<i>').attr('class','glyphicon glyphicon-remove')
 var $userInput = $('#todo')
 var $addedSpan = $('<span>')
 var addedItemText = $userInput.val()
 
 $list.prepend($addedP)
 $addedP.append($addedInput)
 $addedP.append($addedI)
 $addedP.append($addedSpan)
 $addedSpan.text(addedItemText)
 $addedP.append($addedI2)
 $userInput.val("")
 }
 
 // Function to remove an item if "x" is clicked
 function deleteItem() {
    $(this).parent().remove()
 }
 
 var $removeButton = $('.glyphicon glyphicon-remove')
 $removeButton.on('click', deleteItem)
 
 
 //When 'plus' sign is clicked
 var $button = $('.btn')
 $button.on('click', addItem)
 
 
 // Function to make a line through the item if 'checkbox' is clicked
 function checkOff () {
 $(this).parent().children("span").css({textDecoration: "line-through"})
 }
 var $checkedBox = $('.checkedbox')
 $checkedBox.on('click', checkOff)