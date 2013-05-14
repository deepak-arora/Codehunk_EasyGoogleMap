// JavaScript Document

 function initialize() {
   /*------------- Putting the map -------------*/
	var elementsarr = 
	[
	    { lat: 26.80, lng:76.90, name : 'Indore Office', content : 'Hello world', imgUrl : "images/1.png" , id : "a",connect : ['b']},
	    { lat: 26.90, lng:76.80, name : 'Jaipur Office', content :  'www.codehunk.com', id : "b" ,connect : []}
	];

/*    {"result":[{"UserId":"f395022e-81db-4205-a9f1-945870309419","UserName":"preeti","Address":"jaipur,raj","BranchId":"225b0dc0-834a-4efa-a53a-ae6c8df9c3d1"},{"UserId":"9f9ad96f-b032-4294-ac2b-7918a9450e38","UserName":"praveen","Address":"jaipur,raj","BranchId":"225b0dc0-834a-4efa-a53a-ae6c8df9c3d1"}]}
   */ 
    $("#map_canvas").ckMap({
	    title: "testing",
	    type: "ROADMAP",	       
		elements : elementsarr  
	});
  }
  