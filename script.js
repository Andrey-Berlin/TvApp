// 



function audioPlayer() {
  
  let style = document.getElementById('style');
  style.innerHTML = `
  audio{
    margin: 30px 0px 0px 0px;
    
  }
  
  ul {
    padding: 0px 30px 0px 50px;
  }
  
  video {
    
    width: 100%;
    margin: 30px 0px 0px 0px;
  }
p{
    color:rgb(255,255,255);
    background:#000000;
    
    
  }
  
  `;
let header = document.getElementById('header');
header.innerHTML = `
<h1>TvApp</h1>
<p>Внимание! Это приложение еще в стадии разроботки.</p>
`;
let section = document.getElementById('section');
section.innerHTML = `
<hr />
<ul>Телеканалы:
<hr />
<li>Euronews/ Новостное Европейское телевидение.
<br>
<video controls id = "video1"></video></li>
<hr />
<li>Настоящее время/ Общественное Европейское телевидение.
<br>
<video controls id = "video2"></video></li>
<hr />
<!--li> Радио Эйлат/ Музыкальное радио Израиля.
<br>
<audio controls id = "audio3"></audio></li-->
<hr />

</ul>
`;
section.style.textAlign = 'center';
/*section.style.margin = '1em';*/
let video1 = document.getElementById("video1");
video1.innerHTML = `<source id = "source1" type="video/mp4">`;
let video2 = document.getElementById('video2');
video2.innerHTML = `<source id = "source2" type="video/mp4">`;
/*audio.style.fontSize = '50px';*/

let links = ['https://evronovosti.mediacdn.ru/sr1/evronovosti/playlist.m3u8','https://rfe-lh.akamaihd.net/i/rfe_tvmc5@383630/master.m3u8'];

let source1 = document.getElementById("source1");
source1.src = links[0];
let source2 = document.getElementById('source2');
source2.src = links[1];
}
audioPlayer();