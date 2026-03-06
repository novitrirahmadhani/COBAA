function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5aoHPV5kuia":
        Script1();
        break;
      case "5ccdGuxzeCX":
        Script2();
        break;
      case "6OVKePR6Ywa":
        Script3();
        break;
      case "5iltWU2sgsY":
        Script4();
        break;
      case "5w0veT7SlZ8":
        Script5();
        break;
      case "5spznXXh4T1":
        Script6();
        break;
      case "6DDCV7X0ZGe":
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

