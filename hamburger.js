$('.collapsed').click(function(){
    //  Gets the div id of the particular item that was clicked (e.g. "collapse2")
        var targetElement = $(this).attr('id');
    //    console.log(targetElement);
        var isExpanded = $('#'+targetElement).attr("aria-expanded");
        if(isExpanded){
            console.log(targetElement+" is expanded");
        }
        else{console.log(targetElement+" is not expanded");}
    });