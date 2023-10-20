import { API } from "./scripts/api.js";
import { ele, renderCards, renderPlayingInfo,renderLoader, } from "./scripts/ui.js";



//clasın bir örneğini oluşturma
const api = new API();

document.addEventListener("DOMContentLoaded", async () => {
    renderLoader()
  await api.getPopular();
  renderCards(api.songs.tracks);
});

//müzük listelerinin tıklanma olaylarını izler
ele.list.addEventListener("click", (e) => {
  if (e.target.id === "play-btn") {
    const parent = e.target.closest(".card");

    //müziğin bilgilerine ekrana basma

    renderPlayingInfo(parent.dataset);

   

  }

});

//arama formu gönderildiğinde

ele.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //aranılan terime erişme
  const query = e.target[0].value;
//form boşsa fonksiyonu durdurma
  if (!query) return;
  renderLoader()


  //başlığı güncelleme
  ele.title.innerHTML = ` ${query} İçin Sonuçlar `;

  //api'den şarkıları alma

  api.searchMusic(query);
});



