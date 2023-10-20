import { url, options } from "./constant.js";
import { renderCards, renderLoader } from "./ui.js";


//api sitekleri


export class API {
  constructor() {
    this.songs = [];
  }

  //popüler müzikleri getir istek atma
  async getPopular() {
    try {
      //api isteği atar
      const res = await fetch(url, options);
      const data = await res.json();
   
    
      //class ta tuttuğumuz değişkeni günceller
      this.songs = data;
    } catch (err) {
      console.log("popüler verileri alırken hata oluştu", err);
    }
  }



//aratlan içeriği  erişme
async searchMusic(query){
  const res = await fetch(`https://shazam.p.rapidapi.com/search?term=${query} &locale=TR&offset=0&limit=5` ,options);
  const data = await res.json();

  console.log('eski hali',data.tracks.hits);


  const newData = data.tracks.hits.map((song) =>({

    ...song.track,}));


 renderCards(newData);


  
}

}