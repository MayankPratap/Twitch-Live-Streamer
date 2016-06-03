include("jquery");
var arr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck","brunofin","habathcx", "RobotCaleb", "noobs2ninjas","comster404"];
var len=arr.length;
console.log(len);

for(var i=0;i<len;++i){

   //console.log(arr[i]);
   function makeUrl(which,val){

     if(which=="streams")
       return "https://api.twitch.tv/kraken/streams/"+val+"?callback=?";

     else if(which=="users")
       return "https://api.twitch.tv/kraken/users/"+val+"?callback=?";

   }

   $.getJSON(makeUrl("streams",arr[i]),function(json){

     val=handleMyJSON(json);

     $.getJSON(val,function(json){

        console.log(json.logo);
        console.log(json.display_name);
        console.log(json.game+" "+json.status);

     });


   });

   function handleMyJSON(json){

     if(json.stream===null){

         console.log("Offline");
        // console.log(json._links.channel);
         return json._links.channel;

     }

     else if(json.stream===undefined){

         console.log("Account Closed");

     }

     else{

         console.log("Online");
      //   console.log(json._links.channel);
         return json._links.channel;


     }

   }

}
