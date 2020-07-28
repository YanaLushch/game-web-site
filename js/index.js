
//Dropdown Language menu
// Shows and hide dropdown
$('.dropdown').click(function () {
    $('.dropdown-menu').fadeToggle(300);
});
//Replaces curr value with chosen value 
$('.dropdown .dropdown-menu li').click(function () {
  $(this).parents('.dropdown').find('span').text($(this).text());
});
 $('.dropdown-menu').change(function(){
    var selectedOption = $(this).find(":selected").val();
    alert("You have selected - " + selectedOption);
    console.log(selectedOption)
});
$('.slider').click(function(){
  $('html,body').animate({ scrollTop: $(".bg2").offset().top}, 'slow');
})
$(document).on('click', function (e) {
  if (!$.contains($('.dropdown')[0], e.target)) {
    $('.dropdown-menu').hide();
  }
});
