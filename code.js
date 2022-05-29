let picReq = new XMLHttpRequest();
picReq.open(
    "GET",
    "https://api.unsplash.com/photos/random/?client_id=fJiaP6vTVdOLL99NUI9mg1Jb3HoI7tOvbYgZNI2FzlE&query=nature, lanscape, HD, sea, forest, desert, 1000px"
);
picReq.send();

let user = document.querySelector(".picAuthor p");
let userPorfolio = document.querySelector(".picAuthor a");

picReq.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let res = JSON.parse(this.responseText);
        user.textContent = `Picture By ${res.user.name} At`;
        userPorfolio.href = `https://www.unsplash.com/@${res.user.username}`;
        let img = res.urls.raw;
        document.body.style.cssText = `background-image: url(${img}); background-repeat: no-repeat; background-size: cover; height: 100%`;
    }
};

let req = new XMLHttpRequest();

req.open(
    "GET",
    "https://api.alquran.cloud/v1/ayah/random/editions/quran-uthmani,en.asad"
);
req.send();

let ayah = document.querySelector(".ayah");
let ayahEn = document.querySelector(".ayahEn");
let arSurahName = document.querySelector(".arMds p");
let arAyahNum = document.querySelector(".arMds span");
let enSurahName = document.querySelector(".enMds p");
let enAyahNum = document.querySelector(".enMds span");

req.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let res = JSON.parse(this.responseText);
        console.log(res);
        ayah.textContent = res.data["0"].text;
        ayahEn.textContent = res.data["1"].text;
        arSurahName.textContent = res.data["0"].surah.name;
        enSurahName.textContent = `surah: ${res.data["1"].surah.englishNameTranslation}`;
        arAyahNum.textContent = `${res.data["0"].numberInSurah} : الاية`;
        enAyahNum.textContent = `ayah: ${res.data["1"].numberInSurah}`;
        document.querySelector(".random").onclick = () => {
            window.location.reload();
        };
    }
};
