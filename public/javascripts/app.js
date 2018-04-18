$.ajax('/users',{
    accepts:'application/json',
    success:function(data,status)
    {
        var $body=$('body');
        data.forEach(function(user){
           var $elem ='<div>'+user.username+' - '+user.age+'</div>';
           $body.append($elem);
        })
    },
    error:function(ajax,status,err)
    {
       debugger;
    }
})


$('#submitButton').on('click',function(e){
    var username = $('input[name="username"]').val();
    var age = $('input[name="age"]').val();
    $.ajax('/users',{
        method:"post",
        contentType:"application/json",
        data:{
            username:username,
            age:age
        },
        success:function(data,status)
        {
            var $body=$('body');
            data.forEach(function(user){
               var $elem ='<div>'+user.username+' - '+user.age+'</div>';
               $body.append($elem);
            })
        },
        error:function(ajax,status,err)
        {
           debugger;
        }
    })

})