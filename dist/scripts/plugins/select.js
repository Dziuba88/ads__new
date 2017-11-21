(function($){
  function setClosed(){
    $(".select--toggle").removeClass("active");
    $(".select").removeClass("open");
    $(".select--menu").hide();
  };
  setClosed();

	$(".select--toggle").click(function(e) {
    e.preventDefault;
    if($(this).is(".active")) {
      setClosed();


    } else {
      setClosed();
      $(this).closest('.select').addClass('open');
      $(this).parent('.select').find(".select--menu").show();
      $(this).addClass("active");
		}
	});

	$(".select--menu li a").click(function(e) {
  var label = $(this).data("label");
    $(this).closest('.select--menu').find("li").removeClass('active');
    $(this).closest('.select').find(".select--toggle").attr("value", label);
    $(this).parent("li").addClass("active");
		setClosed();
		e.preventDefault;
	});
  
  $(document).click(function(event) {
    if ( !$(event.target).closest( ".select" ).length ) {
        setClosed();
    }
});

})(jQuery);

