$(document).ready(function(){
console.log("this is checked");
$("#newon2 .owl-carousel").owlCarousel({
    dots:false,
    loop:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        1000:{
            items:4
        },
       
    }
});

$(".similar-item .owl-carousel").owlCarousel({
  dots:false,
  loop:false,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      480:{
          items:2
      },
      1000:{
          items:4
      },
     
  }
});


$("#bannerarea .owl-carousel").owlCarousel({
    dots:true,
    loop:false,
    nav:false,
    items:1
  
});

var $grid= $(".grid").isotope({
    itemSelector:'.grid-item',
    layoutMode:'masonry',
});
$(".button-group").on('click', 'button' ,function(){
var filtervalue=$(this).attr('data-filter');
console.log("heyyyy");
$grid.isotope({filter:filtervalue});




});

// wishlist card added java script//
var sum=0;
var wishitem= document.querySelector("#wish-item");
for(var i=0;i<document.querySelectorAll(".bottom-part .btn").length;i++){
  

   document.querySelectorAll(".bottom-part .btn i")[i].addEventListener("click",function(){
  
   if(this.flag==0){
     console.log("declicked");
     this.flag=1;
     this.style.color="black";
    
     sum--;
     wishitem.textContent=sum;
     
       console.log(sum);
      }
       else{

        console.log("clicked");
        this.flag=0;
        this.style.color="red";
      
        sum++;
        wishitem.textContent=sum;
        

          console.log(sum);
         
          
       }

       

    });
 } 



 //Product quantity addition////
 var qtyup = $(".qty-up");
 var qtydown = $(".qty-down");
 var qty_input = $(".qty_input");

  qtyup.click( function(){
    let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
    if($input.val()>= 1 && $input.val()<= 9){
        $input.val(function(i, oldval){
            return ++oldval;
        });
  }
});

qtydown.click( function(){
    let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
    if($input.val()> 1 && $input.val()<= 10){
        $input.val(function(i, oldval){
            return --oldval;
        });
  }
});
//////

$('.card-option  .col1').on({mouseenter:function(){

  
  
 
},});


$('.card-option  .col2').on({mouseenter:function(){

  document.querySelector("#bannerarea .item img").setAttribute("src","img/card2.jpg");
 
},});
$('.card-option  .col3').on({mouseenter:function(){

  document.querySelector("#bannerarea .item img").setAttribute("src","img/card3.jpg");
 
},});
$('.card-option  .col4').on({mouseenter:function(){

  document.querySelector("#bannerarea .item img").setAttribute("src","img/card4.jpg");
 
},});

////heart animation 
$(".animation i").click(function(){
   $(this).css("color","red");
  $(".heart").addClass("heart1");
  setTimeout(function(){
  $(".heart").removeClass("heart1");},4000);
});


// $(window).scroll(function(){
//   var scroll = $(window).scrollTop();
//   if (scroll > 60) {
//     $(".scroll_model").addClass("scroll_model1");
//     setTimeout(function(){
//     $(".scroll_model").removeClass("scroll_model1");},7000);
    
//     console.log(" executed");
  
  
  
//   }
//   else{
//     console.log("not executed");
//   }

 
// });
$(".bg-effect").click(function(){
  $("#bannerarea img").addClass("bg-effect-item");
  console.log("whhjjhhh");
});

 

})

