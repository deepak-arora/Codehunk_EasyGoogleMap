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
        jQuery.fn.ckMap.settings = ckJS.s = settings;

        //to make the div empty
        jQuery(this).html("");

        //create the spreadsheet
        ckJS.mapControlFunction.addMap();      
        ckJS.mapControlFunction.addMarkers(); 
		ckJS.mapControlFunction.addPolyLine();
        ckJS.mapControlFunction.centerTheMap();
		
        return false;
    }
});
var ckJS = jQuery.ckMap = {
    version: "1.0.0",
	obj: {
        parent: function () { return jQuery(ckJS.s.parent); },
	},
    mapControlFunction: {
        addMap: function () {
			//alert(ckJS.obj.parent().attr('id'));
			var latlng = new google.maps.LatLng(26.90, 75.80);
            var maptype;
            if(ckJS.s.type.toUpperCase() == "ROADMAP")
                maptype = google.maps.MapTypeId.ROADMAP;
            else if(ckJS.s.type.toUpperCase() == "HYBRID")
                maptype = google.maps.MapTypeId.TERRAIN;

			var myOptions = {
			  zoom: ckJS.s.zoom,
			  center: new google.maps.LatLng(ckJS.s.center),
			  mapTypeId: maptype
			};	
			map = new google.maps.Map(document.getElementById(ckJS.obj.parent().attr('id')), myOptions);
        },
		addMarkers: function() {
			$.each(ckJS.s.elements,function(i,dt) {
				//alert(ckJS.s.elements[i].latlong);	  
				
				if(ckJS.s.elements[i].imgUrl == "" )
				{
					var marker = new google.maps.Marker({
						position: new google.maps.LatLng(ckJS.s.elements[i].lat,ckJS.s.elements[i].lng),
						map:map,
						title:ckJS.s.elements[i].name	
					});		
				}
				else
				{
					var marker = new google.maps.Marker({
						position: new google.maps.LatLng(ckJS.s.elements[i].lat,ckJS.s.elements[i].lng),
						map:map,
						title:ckJS.s.elements[i].name,	
						icon :ckJS.s.elements[i].imgUrl
					});		
				}				
				
				var info = new google.maps.InfoWindow({
					content: ckJS.s.elements[i].content
				});
				
				info.open(map,marker);
				google.maps.event.addListener(marker, 'click', function (event) {
					info.open(map,marker);
				});
				
				//marker.setMap(map);
				marker.id = ckJS.s.elements[i].id;
				markers_array.push(marker);				
			});			
	    },
		addPolyLine : function () {
			//alert("Add polyline is called");                       
            for(var i=0; i < ckJS.s.elements.length;i++)
            {			    
                var m1 = ckJS.mapControlFunction.getMarkerById(ckJS.s.elements[i].id);
                for(var j=0; j < ckJS.s.elements[i].connect.length;j++)
                {                    
                    //alert(ckJS.s.elements[i].connect[j]);
				    var m2 = ckJS.mapControlFunction.getMarkerById(ckJS.s.elements[i].connect[j]);
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