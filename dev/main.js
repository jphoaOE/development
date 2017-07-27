console.log('hallo');

$('.btn-viewmoreless').click(function () {
  $(this).parents('.timeline').find("tbody").toggleClass("hide");
  $(this).text(function(i, v){
               return v === 'View More' ? 'Back to Top' : 'View More'
            });
});

// $('.panel-heading').click(function () {
//   $(this).find("i").toggleClass("fa-angle-down fa-angle-up");
// });

// $('#accordion .collapse').on('show.bs.collapse', function(){
//   $(this).parent().find("div:first .fa-angle-down").addClass("fa-angle-up").removeClass("fa-angle-down");
// }).on('hide.bs.collapse', function(){
//   $(this).parent().find("div:first .fa-angle-up").addClass("fa-angle-down").removeClass("fa-angle-up");
// });
//
$('#accordion .collapse').on('show.bs.collapse', function(){
  $(this).prev().find("i").addClass("fa-angle-up").removeClass("fa-angle-down");
}).on('hide.bs.collapse', function(){
  $(this).prev().find("i").addClass("fa-angle-down").removeClass("fa-angle-up");
});
