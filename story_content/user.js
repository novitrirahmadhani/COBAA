function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6qjQdTfTlCw":
        Script1();
        break;
      case "6f0JRzqebnS":
        Script2();
        break;
      case "604THDGP53F":
        Script3();
        break;
      case "5Yyfezp4KUi":
        Script4();
        break;
      case "5iGM0IfkDkh":
        Script5();
        break;
      case "6GEo7YNDpl6":
        Script6();
        break;
      case "6VgXQTWoM1r":
        Script7();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="backsound.mp3";
audio.load();
audio.play();
audio.volume=0.5
}

function Script2()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.0;
}

function Script3()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.1;
}

function Script4()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.2;
}

function Script5()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.3;
}

function Script6()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.4;
}

function Script7()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.5;
}

