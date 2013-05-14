Codehunk_EasyGoogleMap v1.0


What is it?
------------

The Google Map plugin is a useful plugin for a web application. Where you want to use the Google map javascript API functionality to present your desired information on the Map. Even you do not need to know how google map api works. You just need to pass an array containg the information the you want to plot on the map.



The Latest Version
-------------------

Details of the latest version can be found on the http://codinghub.blogspot.com

Contact
-------

If you want any query regaring this plugin, you may contact on this mail id.
aroradeepak.mca@gmail.com

How to use
----------
The most attractive feature of this plugin is that it is very handy to use. You just have to create an array containg the information of your device, content that you want to display in device popup and connection of the device. Then call the method with ccplMap with the with your selector element where you want to show the map.

eg:

var elementsarr = 
[
  { 
    lat: 26.80, lng:76.90, 
  name : 'Indore Office', 
	content : 'Hello world', 
	imgUrl : "images/1.png" , 
	id : "a",
	connect : ['b']
  },
  { 
    lat: 26.90, lng:76.80, 
	name : 'Jaipur Office', 
	content :  'Codescape consultent Pvt. Ltd.', 
	id : "b" ,connect : []
  } 
];
    
    $("#map_canvas").ccplMap({
	    title: "testing",
	    type: "ROADMAP",	       
		elements : elementsarr  
	});
