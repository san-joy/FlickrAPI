function FlikrImages() {
  var script = document.createElement("script");
  var search = document.getElementById("search");
  var head = document.querySelector("head");

  safe_search = 3;
  script.src = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags="${search.value}`;
  script.safe_search;
  head.appendChild(script);
}

function jsonFlickrFeed(data) {
  var images = "";
  var displayImages = document.getElementById("displayImages");

  data.items.forEach(function(element) {
    images += `<div class="card float-left"><img class="card-img" src="${element.media.m}"/><p class="card-title"><strong> <a href="${element.link}"/>${element.title}</a></strong> by ${element.author}</p></div>`;
  });
  displayImages.innerHTML = images;
}
