include("jquery");
var arr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck","brunofin","habathcx", "RobotCaleb", "noobs2ninjas","comster404"];
var len=arr.length;
console.log(len);

for(var i=0;i<len;++i){

   //console.log(arr[i]);
   var url="https://api.twitch.tv/kraken/streams/"+arr[i]+"?callback=?";
   console.log(url);
   $.getJSON(url,function(json){

     handleMyJSON(json);

   });

   function handleMyJSON(json){

     if(json.stream===null){

         console.log("Offline");

     }

     else if(json.stream===undefined){

         console.log("Account Closed");
     }

     else{

         console.log("Online");
     }

   }

}  
