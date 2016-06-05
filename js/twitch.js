$(document).ready(function(){
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
           var html="";
           html+="<div class='well channel-offline row'><div class='col-sm-4'><img class='img-responsive logo' src='"+logo+"'></img></div><div class='col-sm-4'><a href='https://www.twitch.tv/"+display_name+"' target='_blank'>"+display_name+"</a></div><div class='col-sm-4'><p><i>"+game+"</i></p></div></div>";
           //console.log(logo);
           //console.log(display_name);
           //console.log(game);
           console.log(html);
           $('.container').append(html);

         }

         else{

           logo=json.logo;
           display_name=json.display_name;
           //console.log(logo);
           //console.log(display_name);  // Use <a href="https://www.twitchtv.com/freecodecamp">display_name</a>
           //console.log(game+":"+status);

           var html="";
           html+="<div class='well channel-online row'><div class='col-sm-4'><img class='img-responsive logo' src='"+logo+"'></img></div><div class='col-sm-4'><a href='https://www.twitch.tv/"+display_name+"' target='_blank'>"+display_name+"</a></div><div class='col-sm-4'><p><i>"+game+":"+status+"</i></p></div></div>";
           console.log(html);
           $('.container').append(html);

         }

      });
    });
  });

});
