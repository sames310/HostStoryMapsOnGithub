define(["dojo/topic",
		"esri/map",
		"esri/layout",
		"esri/widgets",
		"esri/layers/FeatureLayer"], function(topic,Map,layout,widgets,FeatureLayer) {
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
					_fadeLayer = new FeatureLayer("https://services.arcgis.com/WgElToYhbLt94zKA/arcgis/rest/services/PlanningFramework/FeatureServer/0")
				}
				else if ($(this).index() === 1){
					_fadeLayer = new FeatureLayer("https://services.arcgis.com/WgElToYhbLt94zKA/ArcGIS/rest/services/KeyDevelopmentOpportunities/FeatureServer/1")
				}
				else if ($(this).index() === 2){
					_fadeLayer = new FeatureLayer("https://services.arcgis.com/WgElToYhbLt94zKA/arcgis/rest/services/VacantLand/FeatureServer/2")
				}
				else{
					_fadeLayer = new FeatureLayer("https://services.arcgis.com/WgElToYhbLt94zKA/ArcGIS/rest/services/VacantLand/FeatureServer/3")
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

				function RemoveAllExceptBasemap(){
					for (var j = app.map.graphicsLayerIds.length-1; j>=0;  j--){
						var layer = app.map.getLayer(app.map.graphicsLayerIds[j])
						if (layer.url.indexOf('World') == -1) {
							app.map.removeLayer(layer);
						}
						
					}
				}
				
				RemoveAllExceptBasemap();		
				
				app.map.addLayer(_fadeLayer);
				

			});

			
			
  });
});
