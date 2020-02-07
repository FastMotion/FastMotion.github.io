jQuery(document).ready(function(){

  // Logo
  let $logo 	= $('#logo');

  if (location.href.indexOf("#") != -1) {
    $logo.show();
  }
  // Show logo
  $('.menu .tabs a').click(function() {
    $logo.fadeIn('slow');
  });
  // Hide logo
  $('[href = "#profile"]').click(function() {
    $logo.fadeOut('slow');
  });

  // Resume color

  $('#yellow-color').click(function(e) {
    $(".main-wrapper-resume").attr("id", "yellow");
  });
  $('#red-color').click(function(e) {
    $(".main-wrapper-resume").attr("id", "red");
  });
  $('#blue-color').click(function(e) {
    $(".main-wrapper-resume").attr("id", "blue");
  });
  $('#green-color').click(function(e) {
    $(".main-wrapper-resume").attr("id", "green");
  });

  $(".setting-icon").click(function(){
    $('.color-box').toggleClass("main");
  });

  //Menu

  let $content 		= $("#content");

  $content.easytabs({
    animate			: true,
    updateHash		: false,
    transitionIn		:'slideDown',
    transitionOut		:'slideUp',
    animationSpeed	:600,
    tabs				:".tmenu",
    tabActiveClass	:'active',
  });


  // Hover menu effect
  $content.find('.tabs li a').hover(
    function() {
      $(this).stop().animate({ marginTop: "-7px" }, 200);
    },function(){
      $(this).stop().animate({ marginTop: "0px" }, 300);
    }
  );
});