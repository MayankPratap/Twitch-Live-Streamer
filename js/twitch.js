include("jquery");
var arr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck","brunofin","habathcx", "RobotCaleb", "noobs2ninjas","comstor404"];
var len=arr.length;
//console.log(len);

for(var i=0;i<len;++i){

   //console.log(arr[i]);
   var url="https://api.twitch.tv/kraken/streams/"+arr[i];
  // console.log(url);

   $.getJSON(url,function(json){


     handleMyJSON(json);

   });

   function handleMyJSON(json){

      if(json.status=="404"){
       // console.log(url);
        console.log("Account Closed");
      }
      else{

         if(json.stream===null){

           // console.log(url);
            console.log("Account Inactive");
         }

         else{
          //  console.log(url);
            console.log(json.stream.game+":"+json.stream.channel.status);
         }

       }
   }
}  
