Codehunk_EasyGoogleMap v1.0


What is it?
------------

The Google Map plugin is a useful plugin for a web application. Where you want to use the Google map javascript API functionality to present your desired information on the Map. Even you do not need to know how google map api works. You just need to pass an array containg the information the you want to plot on the map.



The Latest Version
-------------------

Latest version of this plugin is 1.0 Please visit. http://www.codehunk.com


Contact
-------

If you want any query regaring this plugin, you may contact on this mail id.
aroradeepak.mca@gmail.com

How to use
----------

We assume that you have a container on your page where you want to show map. In this example this element has the id map_canvas. You can take it as you want. You just need to call the ckMap function on that element.

The most attractive feature of this plugin is that it is very handy to use. You just have to create an array containg the information of your device, content that you want to display in device popup and connection of the device. Then call the method with ckMap with the with your selector element where you want to show the map.

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
    
    $("#map_canvas").ckMap({
	    title: "testing",
	    type: "ROADMAP",	       
		elements : elementsarr  
	});
	
	
That's it.

If you face any problem in using this. Add your comments or mail me at darora85@live.com. I will be happy to help you.
