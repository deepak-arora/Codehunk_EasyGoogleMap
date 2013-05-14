/*@
  @  FileName : codehunk_map.js
  @  Version : 1.0
  @  By : Deepak Arora ( www.codehunk.com )
  @  Purpose : Easy to use basic Map and info window place functionality.
  @
*/

var markers_array  = [];
var map;

 jQuery.fn.extend({
    ckMap: function (settings) {
        settings = jQuery.extend({
            title: "MyMap", 
            type: "TERRAIN",           
			option : {},
            center: "26.90, 75.80",            
			elements : [],			
			parent: this
        }, settings);
        jQuery.fn.ckMap.settings = ccplJs.s = settings;

        //to make the div empty
        jQuery(this).html("");

        //create the spreadsheet
        ccplJs.mapControlFunction.addMap();      
        ccplJs.mapControlFunction.addMarkers(); 
		ccplJs.mapControlFunction.addPolyLine();
        ccplJs.mapControlFunction.centerTheMap();
		
        return false;
    }
});
var ccplJs = jQuery.ckMap = {
    version: "1.0.0",
	obj: {
        parent: function () { return jQuery(ccplJs.s.parent); },
	},
    mapControlFunction:
    {
        addMap: function () {
			//alert(ccplJs.obj.parent().attr('id'));
			var latlng = new google.maps.LatLng(26.90, 75.80);
            var maptype;
            //alert(ccplJs.s.type.toUpperCase());

            if(ccplJs.s.type.toUpperCase() == "ROADMAP")
                maptype = google.maps.MapTypeId.ROADMAP;
            else if(ccplJs.s.type.toUpperCase() == "HYBRID")
                maptype = google.maps.MapTypeId.TERRAIN;

			var myOptions = {
			  zoom: ccplJs.s.zoom,
			  center: new google.maps.LatLng(ccplJs.s.center),
			  mapTypeId: maptype
			};
			//var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);		
			map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
        },
		addMarkers: function() {
			$.each(ccplJs.s.elements,function(i,dt) {
				//alert(ccplJs.s.elements[i].latlong);	  
				
				if(ccplJs.s.elements[i].imgUrl == "" )
				{
					var marker = new google.maps.Marker({
						position: new google.maps.LatLng(ccplJs.s.elements[i].lat,ccplJs.s.elements[i].lng),
						map:map,
						title:ccplJs.s.elements[i].name	
					});		
				}
				else
				{
					var marker = new google.maps.Marker({
						position: new google.maps.LatLng(ccplJs.s.elements[i].lat,ccplJs.s.elements[i].lng),
						map:map,
						title:ccplJs.s.elements[i].name,	
						icon :ccplJs.s.elements[i].imgUrl
					});		
				}				
				
				var info = new google.maps.InfoWindow({
					content: ccplJs.s.elements[i].content
				});
				
				info.open(map,marker);
				google.maps.event.addListener(marker, 'click', function (event) {
					info.open(map,marker);
				});
				
				//marker.setMap(map);
				marker.id = ccplJs.s.elements[i].id;
				markers_array.push(marker);				
			});			
	    },
		addPolyLine : function () {
			//alert("Add polyline is called");                       
            for(var i=0; i < ccplJs.s.elements.length;i++)
            {			    
                var m1 = ccplJs.mapControlFunction.getMarkerById(ccplJs.s.elements[i].id);
                for(var j=0; j < ccplJs.s.elements[i].connect.length;j++)
                {                    
                    //alert(ccplJs.s.elements[i].connect[j]);
				    var m2 = ccplJs.mapControlFunction.getMarkerById(ccplJs.s.elements[i].connect[j]);
				    var polyline = new google.maps.Polyline({
					    path : [m1.getPosition(), m2.getPosition()]
				    });
				    polyline.bindTo('map',m1);			        
                }
            }
		},		
		centerTheMap : function () {  
			var bounds = new google.maps.LatLngBounds();	
			for (i in markers_array) {        
				bounds.extend(markers_array[i].getPosition());
				map.fitBounds(bounds);
			}
		},
		getMarkerById : function(id) {	
			for(i in markers_array)							
				if(markers_array[i].id == id)			
					return markers_array[i];
		}
    }
};