include("jquery");
var channels = ["ESL_SC2","OgamingSC2","cretetion","freecodecamp","storbeck","brunofin","habathcx","RobotCaleb","noobs2ninjas","comster404"];
var len=channels.length;
//console.log(len);

channels.forEach(function(channel){

   //console.log(arr[i]);
   function makeUrl(which,val){
      if(which=="streams")
        return "https://api.twitch.tv/kraken/streams/"+val+"?callback=?";
      else if(which=="channels")
        return "https://api.twitch.tv/kraken/channels/"+val+"?callback=?";
   }

   var game,status;

   $.getJSON(makeUrl("streams",channel),function(json){

     if(json.stream===null){
        game="Offline";
        status="offline";
     }

     else if(json.stream===undefined){
        game="Account Closed";
        status="offline";
     }

     else{
        game=json.stream.game;
        status=json.stream.channel.status;
     }

     var logo,display_name;

     $.getJSON(makeUrl("channels",channel),function(json){

         if(status=="offline"){

           logo=(game=="Offline")?json.logo:"https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
           display_name=(game=="Offline")?json.display_name:channel;
           console.log(logo);
           console.log(display_name);
           console.log(game);

         }

         else{

           logo=json.logo;
           display_name=json.display_name;
           console.log(logo);
           console.log(display_name);
           console.log(game+":"+status);

         }

     });
  });
});
