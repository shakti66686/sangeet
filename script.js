const songs = [
  {
    id: 1,
    songName: `<h5>Roohedaariya<br><span class="artist"> B
    praag</span></h5>`,
    poster: "songs_img/img1.jpg",
  },
  {
    id: 2,
    songName: `<h5>Gallan Teriya<br><span class="artist"> B
    praag</span></h5>`,
    poster: "songs_img/img2.jpg",
  },
  {
    id: 3,
    songName: `<h5>kaun Hoyega<br><span class="artist"> B
    praag</span></h5>`,
    poster: "songs_img/img3.jpg",
  },
  {
    id: 4,
    songName: `<h5>Pinjrra<br><span class="artist"> B
    praag</span></h5>`,
    poster: "songs_img/img4.jpg",
  },
  {
    id: 5,
    songName: `<h5>Pachtaaoge<br><span class="artist">jaani</span></h5>`,
    poster: "songs_img/img5.jpg",
  },
  {
    id: 6,
    songName: `<h5>Kyon<br><span class="artist"> B
    praag</span></h5>`,
    poster: "songs_img/img6.jpg",
  },
  {
    id: 7,
    songName: `<h5>Mann Bharya<br><span class="artist"> B
    praag</span></h5>`,
    poster: "songs_img/img7.jpg",
  },
  {
    id: 8,
    songName: `<h5>Koi hor<br><span class="artist"> B
    praag</span></h5>`,
    poster: "songs_img/img8.jpg",
  },
  {
    id: 9,
    songName: `<h5>Barris ki jaae<br><span class="artist"> B
    praag</span></h5>`,
    poster: "songs_img/img9.jpg",
  },
  {
    id: 10,
    songName: `<h5>Ik mili mainu apsara<br><span class="artist"> B
    praag</span></h5>`,
    poster: "songs_img/img10.jpg",
  },
  {
    id: 11,
    songName: `<h5>Udd Gaya<br><span class="artist"> B
    praag</span></h5>`,
    poster: "songs_img/img11.jpg",
  },
  {
    id: 12,
    songName: `<h5>Mera Yaar<br><span class="artist"> B
    praag</span></h5>`,
    poster: "songs_img/img12.jpg",
  },
  {
    id: 13,
    songName: `<h5>Bewafai kar gaya<br><span class="artist"> B
    praag</span></h5>`,
    poster: "songs_img/img13.jpg",
  },
  {
    id: 14,
    songName: `<h5>Sab kuch<br><span class="artist"> B
    praag</span></h5>`,
    poster: "songs_img/img14.jpg",
  },
  {
    id: 15,
    songName: `<h5>Salooq<br><span class="artist"> B
    praag</span></h5>`,
    poster: "songs_img/img15.jpg",
  },
  {
    id: 16,
    songName: `<h5>Aa chaliye<br><span class="artist"> B
    praag</span></h5>`,
    poster: "songs_img/img16.jpg",
  },
  {
    id: 17,
    songName: `<h5>Jhaanjar<br><span class="artist"> B
    praag</span></h5>`,
    poster: "songs_img/img17.jpg",
  },
  {
    id: 18,
    songName: `<h5>Chum chum rakheya<br><span class="artist"> B
    praag</span></h5>`,
    poster: "songs_img/img18.jpg",
  },
  {
    id: 19,
    songName: `<h5>Accha sila diya<br><span class="artist"> B
    praag</span></h5>`,
    poster: "songs_img/img19.jpg",
  },
  {
    id: 20,
    songName: `<h5>Aaj meri gali me kal kishi our ki<br><span class="artist"> B
    praag</span></h5>`,
    poster: "songs_img/img20.jpg",
  },
];

// array for artist img
const artist_img = [
  {
    id: 21,
    artist: "popularartist/arijit singh.jpeg",
  },
  {
    id: 22,
    artist: "popularartist/b praag.jpg",
  },
  {
    id: 23,
    artist: "popularartist/badshah.jpeg",
  },
  {
    id: 24,
    artist: "popularartist/garry sandhu.jpeg",
  },
  {
    id: 25,
    artist: "popularartist/hardy sandhu.jpeg",
  },
  {
    id: 26,
    artist: "popularartist/honey singh.jpeg",
  },
  {
    id: 27,
    artist: "popularartist/jassi gill.jpeg",
  },
  {
    id: 28,
    artist: "popularartist/raftaar.jpeg",
  },
  {
    id: 29,
    artist: "popularartist/sherly sethiya.jpeg",
  },
  {
    id: 30,
    artist: "popularartist/sonu nigam.jpeg",
  },
  {
    id: 31,
    artist: "popularartist/udit narayan.jpeg",
  },
];

//script for arrow buttons
let song_left_arrow = document.getElementById("song_left_arrow");
let song_right_arrow = document.getElementById("song_right_arrow");
let song_popular_div = document.getElementsByClassName("popular-song-div")[0];

let art_left_arrow = document.getElementById("art_left_arrow");
let art_right_arrow = document.getElementById("art_right_arrow");
let artist_img_div = document.getElementsByClassName("artist-img-div")[0];

song_left_arrow.addEventListener("click", () => {
  song_popular_div.scrollLeft -= 400;
});
song_right_arrow.addEventListener("click", () => {
  song_popular_div.scrollLeft += 400;
});
art_left_arrow.addEventListener("click", () => {
  artist_img_div.scrollLeft -= 400;
});
art_right_arrow.addEventListener("click", () => {
  artist_img_div.scrollLeft += 400;
});

// get poster from arrey

Array.from(document.getElementsByClassName("songs-class")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});
Array.from(document.getElementsByClassName("singer-img")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = artist_img[i].artist;
});

//music control

const music = new Audio("music/3.mp3");

let master_play = document.getElementById("master-play");
master_play.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    master_play.classList.remove("bi-play-fill");
    master_play.classList.add("bi-pause-fill");
  } else {
    music.pause();

    master_play.classList.remove("bi-pause-fill");
    master_play.classList.add("bi-play-fill");
  }
});
let index = 0;
let skip_back = document.getElementById("skip_back");
let skip_forward = document.getElementById("skip_forward");

let masterplay_img = document.getElementById("masterplay-img");
Array.from(document.getElementsByClassName("songs-class")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    console.log(index);
    music.src = `music/${index}.mp3`;

    masterplay_img.src = `songs_img/${index}.jpg`;
    music.play();

    if (music.play()) {
      master_play.classList.remove("bi-play-fill");
      master_play.classList.add("bi-pause-fill");
    } else {
      master_play.classList.remove("bi-pause-fill");
      master_play.classList.add("bi-play-fill");
    }
  });
});

skip_back.addEventListener("click", () => {
  music.src = `music/${index--}.mp3`;
  music.play();
});
skip_forward.addEventListener("click", () => {
  music.src = `music/${index++}.mp3`;
  music.play();
});

// let bottom_play = document.getElementsByClassName("bottom_play");
// let mastersong = songs.filter((elm) => {
//   return elm.id == index;
// });

// mastersong.forEach((elss) => {
//   let songName = elss;
//   bottom_play.innerHTML = songName;
// }  );

let song_class = document.getElementsByClassName("song-class");
Array.from(song_class).forEach((el) => {
  index = el.target.id;
});
let play_button = document.getElementsByClassName("bi songs-bi bi-play-circle");
play_button.addEventListener("click", () => {
  if (music.play) {
    master_play.classList.remove("bi-play-circle-fill");
    master_play.classList.add("bi-pause-circle-fil");
  } else {
    master_play.classList.remove("bi-pause-circle-fil");
    master_play.classList.add("bi-play-circle-fill");
  }
});
