let style = document.getElementById('style');
style.innerHTML = `
/*  audio{
    margin: 20px 0px 20px 40px;
    background:#38396a;
  }*/
  
  video {
    
    width: 100%;
    margin: 20px 0px 20px 0px;
    background:#38396a;
  }
  
  ul {
    padding: 0px 30px 0px 50px;
    margin:0% 0% 0% 15%;
    font-size:20px;
  }
  
  p{
    color:rgb(255,255,255);
    background:#000000;
    
    
  }
  iframe{
    width: 100%;
  }
  `;
let header = document.getElementById('header');
header.innerHTML = `
<h1>TVApp</h1>
<p>Внимание! Это приложение еще в стадии разроботки.</p>
`;

/*function onload_file(video_play) {
  let section = document.getElementById('section');
section.innerHTML  = video_play;
}
function get_file(open_file) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', "video_player.txt");
  xhr.onload = function() {
    if (xhr.status == 200) {
      open_file(this.responseText);
    } else {
      open_file("Error: " + xhr.status);
    }
  }
  xhr.send();
}

get_file(onload_file); */





let section = document.getElementById('section');
section.innerHTML = `
<div id="video_player">
<p>Euronews/ Новостное Европейское телевидение</p>
<iframe width="" height="" src="https://www.youtube.com/embed/YG0lEwYLaxk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>
<p>Tv-плеер для прочик каналов из списка</p>
<video controls id="video">

<source src="https://rfe-lh.akamaihd.net/i/rfe_tvmc5@383630/master.m3u8" type="video/mp4">

</video>

<hr />
<ul>Телеканалы:
<hr />
<!--li>Euronews/ Новостное Европейское телевидение.
<br>
<br>
<iframe width="350" height="300" src="https://www.youtube.com/embed/YG0lEwYLaxk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>
<hr />
</li-->
<li> Настоящее Время/ Общественное Европейское телевидение.
<br>
<br>
<a href="https://rfe-lh.akamaihd.net/i/rfe_tvmc5@383630/master.m3u8">
▶️ Настоящее Время
</a>
<hr />
</li>
<li> Универсмотри/ Студенческое телевидение.
<br>
<br>
<a href="https://cdn.universmotri.ru/live/hq.sdp/playlist.m3u8">
▶️ Универсмотри
</a>
<hr />
</li>

<li> Kan 11/ Общественное Израильское телевидение.
<br>
<br>
<a href="https://kanlivep2event-i.akamaihd.net/hls/live/747610/747610/source1_2.5k/chunklist.m3u8">
▶️ Kan 11
</a>
</li>
<hr />

<li> Kan-Hanukit/ Молодежное Израильское телевидение.
<br>
<br>
<a href="https://kanlivep2event-i.akamaihd.net/hls/live/747600/747600/source1_2.5k/chunklist.m3u8">
▶️ Kan-Hanukit  
</a>
</li>
<hr />
<li>СССР КИНО/ Развлекательное телевидение.
<br>
<br>
<a href="https://cache-1.catcast.tv/content/38821/index.m3u8">
▶️ СССР КИНО
</a>
</li>
<hr />
<li>Red Bull/ Спортивное Американское телевидение.
<br>
<br>
<a href="https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master_3360.m3u8?denmstv.m3u8">
▶️ Red Bull
</a>
</li>
<hr />
<li>Street Music/ Музыкальное Американское телевидение.
<br>
<br>
<a href="https://59d39900ebfb8.streamlock.net/streetmusic/streetmusic/playlist.m3u8">
▶️ Street Music
</a>
</li>
<hr />
</ul>
</div>`;
section.style.textAlign = 'left';
let footer = document.getElementById('footer');
footer.innerHTML = '<p>С уважением, Берлин Андрей.</p>';




let video_player = document.getElementById("video_player"); //сохранение аудиоплеер

let links = video_player.getElementsByTagName('a'); //сохранение <a> с интернет ресурсами
console.log(links.length);

for (var i = 0; i < links.length; i++) { //Поиск всех <a> с интернет ресурсами 
    console.log(links[i]);
    console.log(i);
    links[i].onclick = function(e) { //Событие нажатия - вызов функции по работе с <a> с интернет ресурсами
        //Загрузка данных из плей листа ->
        e.preventDefault(); //Метод, который не допускает загрузку ресурсов по умолчанию
        console.log(e);

        let href = this.getAttribute("href"); //Поиск и сохранение интернет ресурсов по аттрибуту href
        console.log(href);


        let source = document.querySelectorAll("#video_player video source"); //Поиск и сохранение аудио тега c аттрибутом src
        source[0].src = href; //Сохранение интернет ресурсов по аттрибуту href в аттрибут src
        console.log(source);

        // -> в аудиоплеер
        let video = document.querySelector("#video_player video"); //Поиск и сохранение аудио тега
        video.removeAttribute('poster');
        video.load(); //загрузка в аудиоплеер интернет ресурс
        video.play(); //включение аудиоплеера с интернет ресурсом
        console.log(vide);







        /* video.buffer();*/
    }

}
/*section.style.margin = '1em';*/
/*let audio1 = document.getElementById("audio1");
audio1.innerHTML = `<source id = "source1" type="audio/mpeg">`;
let audio2 = document.getElementById('audio2');
audio2.innerHTML = `<source id = "source2" type="audio/mpeg">`;
let audio3 = document.getElementById('audio3');
audio3.innerHTML = `<source id = "source3" type="audio/mpeg">`;
audio.style.fontSize = '50px';*/

/*let links = ['https://kanliveicy.media.kan.org.il/icy/kanreka_mp3','https://emgregion.hostingradio.ru:8064/moscow.europaplus.mp3','https://n0d.radiojar.com/hcrb063nn3quv?rj-ttl=5&rj-tok=AAABf0cR0TcAuolkyeDIQy7HGg'];

let source1 = document.getElementById("source1");
source1.src = links[0];
let source2 = document.getElementById('source2');
source2.src = links[1];
let source3 = document.getElementById('source3');
source3.src = links[2];*/
let style = document.getElementById('style');
style.innerHTML = `
/*  audio{
    margin: 20px 0px 20px 40px;
    background:#38396a;
  }*/
  
  video {
    
    width: 100%;
    margin: 20px 0px 20px 0px;
    background:#38396a;
  }
  
  ul {
    padding: 0px 30px 0px 50px;
    margin:0% 0% 0% 15%;
    font-size:20px;
  }
  
  p{
    color:rgb(255,255,255);
    background:#000000;
    
    
  }
  iframe{
    width: 100%;
  }
  `;
let header = document.getElementById('header');
header.innerHTML = `
<h1>TVApp</h1>
<p>Внимание! Это приложение еще в стадии разроботки.</p>
`;

/*function onload_file(video_play) {
  let section = document.getElementById('section');
section.innerHTML  = video_play;
}
function get_file(open_file) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', "video_player.txt");
  xhr.onload = function() {
    if (xhr.status == 200) {
      open_file(this.responseText);
    } else {
      open_file("Error: " + xhr.status);
    }
  }
  xhr.send();
}

get_file(onload_file); */





let section = document.getElementById('section');
section.innerHTML = `
<div id="video_player">
<p>Euronews/ Новостное Европейское телевидение</p>
<iframe width="" height="" src="https://www.youtube.com/embed/YG0lEwYLaxk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>
<p>Tv-плеер для прочик каналов из списка</p>
<video controls id="video">

<source src="https://rfe-lh.akamaihd.net/i/rfe_tvmc5@383630/master.m3u8" type="video/mp4">

</video>

<hr />
<ul>Телеканалы:
<hr />
<!--li>Euronews/ Новостное Европейское телевидение.
<br>
<br>
<iframe width="350" height="300" src="https://www.youtube.com/embed/YG0lEwYLaxk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>
<hr />
</li-->
<li> Настоящее Время/ Общественное Европейское телевидение.
<br>
<br>
<a href="https://rfe-lh.akamaihd.net/i/rfe_tvmc5@383630/master.m3u8">
▶️ Настоящее Время
</a>
<hr />
</li>
<li> Универсмотри/ Студенческое телевидение.
<br>
<br>
<a href="https://cdn.universmotri.ru/live/hq.sdp/playlist.m3u8">
▶️ Универсмотри
</a>
<hr />
</li>

<li> Kan 11/ Общественное Израильское телевидение.
<br>
<br>
<a href="https://kanlivep2event-i.akamaihd.net/hls/live/747610/747610/source1_2.5k/chunklist.m3u8">
▶️ Kan 11
</a>
</li>
<hr />

<li> Kan-Hanukit/ Молодежное Израильское телевидение.
<br>
<br>
<a href="https://kanlivep2event-i.akamaihd.net/hls/live/747600/747600/source1_2.5k/chunklist.m3u8">
▶️ Kan-Hanukit  
</a>
</li>
<hr />
<li>СССР КИНО/ Развлекательное телевидение.
<br>
<br>
<a href="https://cache-1.catcast.tv/content/38821/index.m3u8">
▶️ СССР КИНО
</a>
</li>
<hr />
<li>Red Bull/ Спортивное Американское телевидение.
<br>
<br>
<a href="https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master_3360.m3u8?denmstv.m3u8">
▶️ Red Bull
</a>
</li>
<hr />
<li>Street Music/ Музыкальное Американское телевидение.
<br>
<br>
<a href="https://59d39900ebfb8.streamlock.net/streetmusic/streetmusic/playlist.m3u8">
▶️ Street Music
</a>
</li>
<hr />
</ul>
</div>`;
section.style.textAlign = 'left';
let footer = document.getElementById('footer');
footer.innerHTML = '<p>С уважением, Берлин Андрей.</p>';




let video_player = document.getElementById("video_player"); //сохранение аудиоплеер

let links = video_player.getElementsByTagName('a'); //сохранение <a> с интернет ресурсами
console.log(links.length);

for (var i = 0; i < links.length; i++) { //Поиск всех <a> с интернет ресурсами 
    console.log(links[i]);
    console.log(i);
    links[i].onclick = function(e) { //Событие нажатия - вызов функции по работе с <a> с интернет ресурсами
        //Загрузка данных из плей листа ->
        e.preventDefault(); //Метод, который не допускает загрузку ресурсов по умолчанию
        console.log(e);

        let href = this.getAttribute("href"); //Поиск и сохранение интернет ресурсов по аттрибуту href
        console.log(href);


        let source = document.querySelectorAll("#video_player video source"); //Поиск и сохранение аудио тега c аттрибутом src
        source[0].src = href; //Сохранение интернет ресурсов по аттрибуту href в аттрибут src
        console.log(source);

        // -> в аудиоплеер
        let video = document.querySelector("#video_player video"); //Поиск и сохранение аудио тега
        video.removeAttribute('poster');
        video.load(); //загрузка в аудиоплеер интернет ресурс
        video.play(); //включение аудиоплеера с интернет ресурсом
        console.log(vide);







        /* video.buffer();*/
    }

}
/*section.style.margin = '1em';*/
/*let audio1 = document.getElementById("audio1");
audio1.innerHTML = `<source id = "source1" type="audio/mpeg">`;
let audio2 = document.getElementById('audio2');
audio2.innerHTML = `<source id = "source2" type="audio/mpeg">`;
let audio3 = document.getElementById('audio3');
audio3.innerHTML = `<source id = "source3" type="audio/mpeg">`;
audio.style.fontSize = '50px';*/

/*let links = ['https://kanliveicy.media.kan.org.il/icy/kanreka_mp3','https://emgregion.hostingradio.ru:8064/moscow.europaplus.mp3','https://n0d.radiojar.com/hcrb063nn3quv?rj-ttl=5&rj-tok=AAABf0cR0TcAuolkyeDIQy7HGg'];

let source1 = document.getElementById("source1");
source1.src = links[0];
let source2 = document.getElementById('source2');
source2.src = links[1];
let source3 = document.getElementById('source3');
source3.src = links[2];*/
