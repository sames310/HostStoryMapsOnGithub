define(["dojo/topic"], function(topic) {
  /*
   * Custom Javascript to be executed while the application is initializing goes here
   */

  // The application is ready
  topic.subscribe("tpl-ready", function(){
    /*
     * Custom Javascript to be executed when the application is ready goes here
     */
	 $(".selector-background").click(function(){
				var pos = $(this).position().left;
				var selection = $(this).index();
				if($(this).index() > 0){
					pos = pos + 20;
					$("#").addClass("active");
				}
				if($(this).index() === 0){
					_fadeLayer = "less_than_15"
				}
				else if ($(this).index() === 1){
					_fadeLayer = "less_than_30"
				}
				else if ($(this).index() === 2){
					_fadeLayer = "less_than_45"
				}
				else{
					_fadeLayer = "greater_than_45"
				}
				$("#item-runner").animate({
					"left": pos
				},{
					complete: function(){
						$(".selector-background").removeClass("active");
						$(".selector-background:lt(" + selection + ")").addClass("active");
						$(".selector-background:eq(" + selection + ")").addClass("active");
					}
				},100);

				var layers = [];
				var lyr = getLayerByName(app.maps[0],_fadeLayer,true,false);
				layers = layers.concat(lyr);

				fadeLayers(layers);

				syncPopup();
			});

  });
});
