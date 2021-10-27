
// line through task 
$("ul").on("click", "li", function(){
  $(this).toggleClass("task");
  });




  //remove task with effect
      $("ul").on("click" , "span", function(event){
       
       $(this).parent().fadeOut(500, function(){
         var item = $(this).text().replace(/  /g, "-");
         $.ajax({
            type: 'DELETE',
            URL: '/todo/' + item,
            success: function(data){
               location.reload();
             }
            });
         });      
         event.stopPropagation();
      });




          $(document).ready(function(){
  // inpute data
   $("input[type='text'").keypress(function(event){

    var item = $("input[type='text'");
    var todo = {item: item.val()};
      if(event.which === 13){
         $.ajax({
           type:'POST',
           url: '/todo',
           data: todo,
           success: function(data){
             location.reload();
           }
         }); 
      }
   });

return false;
  });
// Add new data --- fadeout input 
   $(".icon").click(function(){
     $("input[type='text'").fadeToggle();
   });
  
  
  //   <% for(var i=0; i < todos.length; i++) { %>
  //  <li id="task"><span><i class=" far fa-trash-alt my-3" ></i></span><%= todo[i].item %> </li>
  //  <% } %> --> 
// <!--   <li id="task"><span><i class=" far fa-trash-alt" ></i></span> Pratic Node.js</li> ---> 