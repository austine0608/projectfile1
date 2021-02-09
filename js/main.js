$(function() {
    $('.first').text('i jst')
    $('#second').html('<h1>Hello</h1>')
   
    $('#welcome').css({
        color:'red',
        padding: '20px',
        backgroundColor: 'blue',
        borderRadius: '20px',
        margin: '10px',
    })

    setTimeout(() => {
        $('#third').addClass('active')
    }, 5000);

    $('.first').append('this boo')
    $('.first').prepend('good boo')
    $('.first').after('great boo')
    $('.first').before('before bol')
    .remove('.first')
    
    $('#butt').click(function(){
        $('#butt').css({
            backgroundColor: 'red',
            color: 'white',
            
        })
    })
    $('#but').click(function(){
        $('#third').toggleClass('active')
    })
})




// $(function() {
//     $('#hide').click(function() {
//         $('#top').hide(3000, function(){
//            $('#boo').css({
//                backgroundColor: 'blue',
//                borderRadius: '10px',
//                padding:'10px',
//                color: 'black',
//            }) 
//         })  
//     })

//     $('#show').click(function() {
//         $('#top').show(3000, function(){
//             $('#boo').css({
//                 backgroundColor: 'white',
//                 borderRadius: '0px',

//             })
//         })
//     })

//      $('#toggle').click(function() {
//         $('#top').toggle(3000,)
              
//     })
// })

// slideUp
// slideDown
// slideToggle
// fadein
// fadeout
// fadetoggle

$(function() {
    $('#hide').click(function() {
        $('#top').slideUp(2000, function(){
           $('#boo').css({
               backgroundColor: 'blue',
               borderRadius: '10px',
               padding:'10px',
               color: 'black',
           }) 
        })  
    })

    $('#show').click(function() {
        $('#top').slideDown(3000, function(){
            $('#boo').css({
                backgroundColor: 'white',
                borderRadius: '0px',

            })
        })
    })

     $('#toggle').click(function() {
        $('#top').slideToggle(3000,)
              
    })
})


$(function() {
    $('#click').click(function(event){
    let firstname = $('#frame').val()
    let lastname =$('#fame').val()


        event.preventDefault();
        if(!firstname){
            $('#frame').css({
                borderColor: 'red',
            })
            $('#frame-error').text('enter first name')
                $('#frame-error').css({
                    color: 'red',
                })
        }else if(!lastname){
            $('#fame').css({
                borderColor: 'red',
            })
            $('#fame-error').text('enter last name')
        }
    })  
})
