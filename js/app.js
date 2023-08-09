// jQuery(document).ready(function($){
//     smallimg[0].onclick = function(){
//         MainImg.src = smallimg[0].src;
//         seconary.src=smallimg[1].src;
//     }
//     smallimg[1].onclick = function(){
//         MainImg.src = smallimg[1].src;
//         seconary.src=smallimg[2].src;
//     }
// });

//     $('.food-slider img').on('click', function(){
//    //  img = $(this).parent('.food-slider').children('img').attr('src');
//       img = $('.two').attr('src');
//      $('.images img').attr('src', img);
// });
// });



// let images_dt : {title: string; price: string;MRP: string;calorie: number;fat: number;protein: number;} = [
//     {
//         title : "THE CHICKEN <br> BURGER",
//         price : "$12.90",
//         MRP : "$24",
//         calorie : 7845,
//         fat : 98 ,
//         protein : 112
//     },
//     {
//         title : "THE PINK <br> BURGER",
//         price : "$18.90",
//         MRP : "$38",
//         calorie : 4512,
//         fat : 65,
//         protein : 78
//     },
//     {
//         title : "THE BLACK <br> BURGER",
//         price : "$10.90",
//         MRP : "$18",
//         calorie : 6545,
//         fat : 115 ,
//         protein : 56
//     },
//     {
//         title : "THE RED <br> BURGER",
//         price : "$11.90",
//         MRP : "$20",
//         calorie : 9845,
//         fat : 68 ,
//         protein : 86
//     },
//     {
//         title : "THE GREEN <br> BURGER",
//         price : "$13.90",
//         MRP : "$26",
//         calorie : 1256,
//         fat : 45 ,
//         protein : 123
//     },
//     {
//         title : "THE TORNADO <br> BURGER",
//         price : "$18.90",
//         MRP : "$38",
//         calorie : 5678,
//         fat : 92 ,
//         protein : 99
//     },
//     {
//         title : "THE COMBO <br> BURGER",
//         price : "$9.90",
//         MRP : "$17",
//         calorie : 3245,
//         fat : 49,
//         protein : 78
//     },
// ]

// let index : number = 0;

// document.getElementsByClassName('bxs-chevron-right')[0].addEventListener('click', (): void => {
//     index +=  310;
//     document.getElementsByClassName('images')[0].scrollLeft = index;

// })

// function translateFunction() {
//     document.getElementsByClassName(".img-box").style.transform="translateX(-500px)";
//     document.getElementsByClassName(".images").style.transition=" all 2s" 
//     }
    

var first_click = true;
var second_click=true;
var third_click=true;
var fourth_click=true;
var fifth_click=true;
var sixth_click=true;
var seventh_click=true;
$('.bxs-chevron-right').on('click' , function(){
    if (first_click) {
        $('.images img').css('transform','translateX(-310px)');
        $('.images img').css('transform','transition(.1s ease)');
        $('#secondary').css('width','60%');
        $('#secondary').css('filter','blur(0px)');
        $('#MainImg').css('width','35%');
         $('#MainImg').css('filter','blur(1.5px)');
        first_click = false;
    } else if(second_click){
        $('.images img').css('transform','translateX(-560px)');
        $('.images img').css('transform','transition(.1s ease)');
        $('#third').css('width','60%');
        $('#third').css('filter','blur(0px)');
        $('#secondary').css('width','35%');
         $('#secondary').css('filter','blur(1.5px)');
         second_click=false;
    }
    else if(third_click){
        $('.images img').css('transform','translateX(-820px)');
        $('.images img').css('transform','transition(.1s ease)');
        $('#fourth').css('width','60%');
        $('#fourth').css('filter','blur(0px)');
        $('#third').css('width','35%');
         $('#third').css('filter','blur(1.5px)');
         third_click=false;
    }
    else if(fourth_click){
        $('.images img').css('transform','translateX(-1080px)');
        $('.images img').css('transform','transition(.1s ease)');
        $('#fifth').css('width','60%');
        $('#fifth').css('filter','blur(0px)');
        $('#fourth').css('width','35%');
         $('#fourth').css('filter','blur(1.5px)');
         fourth_click=false;
    }
    else if(fifth_click){
        $('.images img').css('transform','translateX(-1380px)');
        $('.images img').css('transform','transition(.1s ease)');
        $('#sixth').css('width','60%');
        $('#sixth').css('filter','blur(0px)');
        $('#fifth').css('width','35%');
         $('#fifth').css('filter','blur(1.5px)');
         fifth_click=false;
    }
    else{
        $('.images img').css('transform','translateX(-1580px)');
        $('.images img').css('transform','transition(.1s ease)');
        $('#seventh').css('width','60%');
        $('#seventh').css('filter','blur(0px)');
        $('#sixth').css('width','35%');
         $('#sixth').css('filter','blur(1.5px)');
         sixth_click=false;
    }
});

var first_click = true;
$('.bxs-chevron-left').on('click' , function(){
     if(first_click){
                $('.images img').css('transform','translateX(10px)');
                $('.images img').css('transform','transition(.1s ease)');
                $('#secondary').css('width','35%');
                $('#secondary').css('filter','blur(1.5px)');
                $('#MainImg').css('width','60%');
                $('#MainImg').css('filter','blur(0px)');
                first_click=false;
     }
     else{
        $('.images img').css('transform','translateX(10px)');
        $('.images img').css('transform','transition(.1s ease)');
        $('#secondary').css('width','35%');
        $('#secondary').css('filter','blur(1.5px)');
        $('#MainImg').css('width','60%');
        $('#MainImg').css('filter','blur(0px)');
        second_click=false;
}
})










// jQuery(document).ready(function($){
//     $('.bxs-chevron-right').on('click' , function(){
//         $( '.bxs-chevron-right' ).each(function() {
//         $('.images img').css('transform','translateX(-310px)');
//         $('.images img').css('transform','transition(.1s ease)');
//         $('#secondary').css('width','60%');
//         $('#secondary').css('filter','blur(0px)');
//         $('#MainImg').css('width','35%');
//          $('#MainImg').css('filter','blur(1.5px)');
//         });
        
//     });
    

//     $('.bxs-chevron-left').on('click' , function(){
//         $( '.bxs-chevron-left' ).each(function() {
//         $('.images img').css('transform','translateX(10px)');
//         $('.images img').css('transform','transition(.1s ease)');
//         $('#secondary').css('width','35%');
//         $('#secondary').css('filter','blur(1.5px)');
//         $('#MainImg').css('width','60%');
//         $('#MainImg').css('filter','blur(0px)');
//         })
//     })
// });