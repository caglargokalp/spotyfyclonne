//html den gelenler
export const ele = {
  list: document.querySelector("#list"),
  playingInfo: document.querySelector(".playing"),
  searchForm: document.querySelector("#search-form"),
  title: document.querySelector('.songs #title'),


};



//arayüz işlemleri

export const renderCards = (songs) => {
  //eski şarkılaeı sil
  ele.list.innerHTML=""
  songs.forEach((song) => {
    const div = document.createElement("div");


    //kart elemanına ileride js den erişmek için bazı veriler ekliycez

    div.dataset.url = song.hub?.actions.pop().uri;
    div.dataset.title = song.title;
    div.dataset.photo = song.images.coverart;

    div.className = "card";

    div.innerHTML = `
  

    <figure>
        <img src="${song.images?.coverart} ">
        <div class="play">
            <i   id="play-btn" class="bi bi-play-fill"></i>
        </div>
    </figure>
    <h4>${song.subtitle} </h4>
    <p>${song.title} </p>
    
    `;
    ele.list.appendChild(div);

  
  });
  
};




//müzük bilgilerini ekrana basar

export const renderPlayingInfo = (data) => {

  

  ele.playingInfo.innerHTML = `<div class="info">
 <img
 class="animate"
   src="${data.photo}"/>
 <div>
   <p>Şuan Oynatilıyor</p>
   <h3>${data.title}</h3>
 </div> 
</div>

<audio controls id="aud" autoplay>
 <source
   src="${data.url}"
 />
</audio>
 `;

};




export const renderLoader =()=>{
  ele.list.innerHTML=`
  <div class="loader">
  <div class="loader-bar bar-1"></div>
  <div class="loader-bar bar-2"></div>
  <div class="loader-bar bar-3"></div>
  <div class="loader-bar bar-4"></div>
</div>
`

}


