// The artworks data array
const artworksData = [
    {
      title: "Dress designs",
      image: "image/1.jpg",
      year: "1938",
      artist: "Unknown",
      country: "Soviet Union",
      ideology: "Communism",
      description: "Dress designs from an issue of a Russian fashion magazine Modeli Sezona."
    },
    {
      title: "A clipping",
      image: "image/2.jpg",
      year: "1971",
      artist: "Unknown",
      country: "Soviet Union",
      ideology: "Communism",
      description: "A clipping from Zena A Moda magazine of a do-it-yourself guide to making hand-knitted Chanel-style suits."
    },
    {
      title: "Sports Outfits",
      image: "image/3.jpg",
      year: "1928",
      artist: "Varvara Stepanova",
      country: "Soviet Union",
      ideology: "Communism",
      description: "Avant-Garde fashion designs & a 1980’s recreation."
    },
    {
      title: "Liubov’ Popova",
      image: "image/4.jpg",
      year: "1924",
      artist: "Liubov’ Popova",
      country: "Soviet Union",
      ideology: "Communism",
      description: "One Line Description: Liubov’ Popova, Design for a shop window."
    },
    {
      title: "Sketches",
      image: "image/5.png",
      year: "1962",
      artist: "Photo by Miroslav Murazov",
      country: "Soviet Union",
      ideology: "Communism",
      description: "Fashion designer Vyacheslav Zaitsev with sketches of new clothing models."
    },
    {
      title: "Lana Lobell",
      image: "image/6.png",
      year: "1961",
      artist: "Unknown",
      country: "United States",
      ideology: "Capitalism",
      description: "A spread from a fashion magazine Lana Lobell."
    },
    {
      title: "Lady Ronson",
      image: "image/7.png",
      year: "1956",
      artist: "Unknown",
      country: "United States",
      ideology: "Capitalism",
      description: "Lady Ronson Electric Shaver advertisement."
    },
    {
      title: "h.i.s.",
      image: "image/8.png",
      year: "1969",
      artist: "Unknown",
      country: "United States",
      ideology: "Capitalism",
      description: "h.i.s. menswear magazine advertisement."
    },
    {
      title: "Calvin Klein",
      image: "image/9.png",
      year: "1980",
      artist: "Shot by Richard Avedon",
      country: "United States",
      ideology: "Capitalism",
      description: "Brooke Shields modeling for a Calvin Klein Jeans ad."
    },
    {
      title: "Bob Mackie Creation",
      image: "image/10.png",
      year: "1978",
      artist: "Harry Langton",
      country: "United States",
      ideology: "Capitalism",
      description: "Singer and actress Cher poses for a Fashion Session in a Bob Mackie Creation."
    }
  ];
  
  let currentIndex = 0;


  // artworksData array as you provided...

// Ensure there is a 'hide' class in your CSS that sets display to none
// .hide { display: none; }

function renderArtworks(ideology) {
  const galleryElement = document.getElementById(ideology.toLowerCase() + 'Artworks');
  const indicatorsElement = document.getElementById(ideology.toLowerCase() + 'Indicators');
  galleryElement.innerHTML = '';
  indicatorsElement.innerHTML = '';
  const filteredArtworks = artworksData.filter(art => art.ideology === ideology);

  filteredArtworks.forEach((artwork, index) => {
    const artworkElement = document.createElement('div');
    artworkElement.classList.add('artwork');
    if (index !== 0) artworkElement.classList.add('hide'); // Initially hide the artwork
    artworkElement.innerHTML = `
    <div class="description">
      <h2>${artwork.title}</h2>
      <img src="${artwork.image}" alt="${artwork.title}" class="artwork-image"> <!-- Set the image source -->
      <p>Year: ${artwork.year}</p>
      <p>Artist: ${artwork.artist}</p>
      <p>Country of Origin: ${artwork.country}</p>
      <p>Ideology: ${artwork.ideology}</p>
      <h3>${artwork.description}</h3>
    </div>
  `;
    galleryElement.appendChild(artworkElement);

    const indicatorElement = document.createElement('div');
    indicatorElement.classList.add('indicator');
    if(index === 0) indicatorElement.classList.add('active'); // First one is active
    indicatorElement.addEventListener('click', () => setActiveArtwork(ideology, index));
    indicatorsElement.appendChild(indicatorElement);
  });

  setActiveArtwork(ideology, 0); // Set the first artwork as active
}

function setActiveArtwork(ideology, index) {
  const artworks = document.querySelectorAll('#' + ideology.toLowerCase() + 'Artworks .artwork');
  const indicators = document.querySelectorAll('#' + ideology.toLowerCase() + 'Indicators .indicator');
  artworks.forEach(art => art.classList.add('hide'));
  indicators.forEach(ind => ind.classList.remove('active'));
  artworks[index].classList.remove('hide');
  indicators[index].classList.add('active');
}

function navigate(ideology, change) {
  const artworks = document.querySelectorAll('#' + ideology.toLowerCase() + 'Artworks .artwork');
  let activeIndex = Array.from(artworks).findIndex(art => !art.classList.contains('hide'));
  let newIndex = (activeIndex + change + artworks.length) % artworks.length;
  setActiveArtwork(ideology, newIndex);
}

// Call renderArtworks for both ideologies on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  renderArtworks('Communism');
  renderArtworks('Capitalism');
});


document.addEventListener('DOMContentLoaded', function() {
  var detailsButtons = document.querySelectorAll('.detailsButton'); // Select all detail buttons
  detailsButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          var content = this.closest('.subtitle').querySelector('.detailsContent'); // Find the closest .detailsContent to the button
          if (content.style.maxHeight) {
              content.style.maxHeight = null; // Collapse the section
              content.classList.remove('expanded');
          } else {
              content.style.maxHeight = content.scrollHeight + "px"; // Expand the section
              content.classList.add('expanded');
          }
      });
  });
});
