# YouTube Music Widget

<html lang="en">
<head>
<meta charset="utf-8" />
</head>
<body>
<div>
<p>
I was using Notion the other day and discovered numerous add-ons for displaying weather, calendars, and even music. Unfortunately, there isn't an official YouTube Music widget available. Since the API is public, and I'm not typically well-versed in JavaScript, I decided to take an amateur approach to developing a custom YouTube Music widget using JavaScript, HTML, and CSS.
</p>
<p>
The fundamental idea is to use the YouTube API to establish communication with YouTube Music and replace the frame with a minimalist media player interface.
</p>

```javascript {linenos=true}
var tag = document.createElement("script");
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 
var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player("playlist", {
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
}
```
<p>
Therefore, the player should be capable of substituing a frame like this:
</p>
<p align="center">
<iframe
    id="playlist" src="https://www.youtube.com/embed/videoseries?list=PLsPOpWGyXltiLvUT-KOsH_oBp2FPLIDXq&si=I_2ysTc-ZDlLYhwM&enablejsapi=1" height="200" width="400" frameborder="0">
</iframe>
</p>
<p>
Current Outcome (by now):
</p>
<div id="buttons">
    <div class="button1">
        <input class="backward" type="button" value="Backward" id=BACKWARD />
    </div>
    <div class="playpause">
        <input type="checkbox" value="None" id="playpause" name="check" />
        <label for="playpause"></label>
    </div>
    <div class="button2">
        <input class="forward" type="button" value="Forward" id=FORWARD />
    </div>
</div>
  
<div class="slidecontainer" id=VOLUME>
    <input type="range" min="0" max="100" value="50" class="slider" id="myRange">
</div>
<hr>
<p>
<a href="[url](https://github.com/JHermosillaD/YoutubeMusicWidget)">Widget Source Repository</a>
</p>

</body>

<style>
	body {
        display: flex;
        flex-flow: column wrap;
     }
    #playlist {
        display: block;
    }
    div {
        text-align: justify;
        text-justify: inter-word;
    }
    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
    .forward {
    	border: 0;
        background: transparent;
        box-sizing: border-box;
        width: 74px;
        height: 74px;
        border-color: transparent transparent transparent #59d3d4;
        transition: 100ms all ease;
        cursor: pointer;
        border-style: solid;
        border-width: 37px 0 37px 60px;
    }
    .backward {
    	border: 0;
        background: transparent;
        box-sizing: border-box;
        width: 74px;
        height: 74px;
        border-color: transparent #59d3d4 transparent transparent;
        transition: 100ms all ease;
        cursor: pointer;
        border-style: solid;
        border-width: 37px 60px 37px 0px;
    }
    .playpause {
      label {
        display: block;
        box-sizing: border-box;
        width: 0;
        height: 74px;

        border-color: transparent transparent transparent #59d3d4;
        transition: 100ms all ease;
        cursor: pointer;
        border-style: double;
        border-width: 0px 0 0px 60px;
      }
      input[type="checkbox"] {
        position: absolute;
        left: -9999px;
        &:checked + label {
          border-style: solid;
          border-width: 37px 0 37px 60px;
        }
        &:focus + label {
          box-shadow: 0 0 5px lightblue;
    	border-color: transparent transparent transparent #404040;
        }
      }
    }
    .slider {
        -webkit-appearance: none;
        margin-left: 70px;
        border-radius: 30px;
        background-color: #59d3d4;
        height: 15px;
        opacity: 1;
        -webkit-transition: .5s;
        transition: opacity .5s;
    }
 
    .slider:hover {
        opacity: 0.8;
    }
    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border: 10px double #333333;
        border-radius: 20%;
        background: #ffffff;
    }
</style>

<script>
    var tag = document.createElement("script");
    tag.src = "//www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 
    var player;
    function onYouTubePlayerAPIReady() {
      player = new YT.Player("playlist", {
          events: {
              onReady: onPlayerReady,
              onStateChange: onPlayerStateChange
          }
      });
    }

    function onPlayerReady(event) {   
    var playButton = document.getElementById("playpause");
    playButton.addEventListener("click", function() {
        player.playVideo();
        $('.buttonn').toggleClass('backward');
    }, false);
    var forwardButton = document.getElementById("FORWARD");
    forwardButton.addEventListener("click", function() {
          player.nextVideo();
      });
      var forwardButton = document.getElementById("BACKWARD");
      forwardButton.addEventListener("click", function() {
          player.previousVideo();
      });
      document.getElementById("myRange").addEventListener("change", function() {
      	var volume = this.value;
        player.setVolume(volume);
      });
      document.getElementById("title").innerText = player.getVideoData().title;
    }
    
    function onPlayerStateChange(event) {
    	var playButton = document.getElementById("playpause");
        playButton.addEventListener("click", function() {
      	if (player.getPlayerState() == 1) {
        	player.pauseVideo();
      	}
      }, false);
      document.getElementById("title").innerText = player.getVideoData().title;
    }
  </script>