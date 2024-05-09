// The artworks data array
const artworksData = [
    {
      title: "Vkhutemas",
      image: "image/1.png",
      year: "1920-1930",
      artist: "Unknown",
      country: "Soviet Union",
      ideology: "Communism",
      description: "Vkhutemas was a school of design in Moscow, and a center for three major Avant-Garde movements (constructivism, rationalism, & suprematism)."
    },
    {
      title: "Russian Avant-Garde",
      image: "image/2.jpg",
      year: "1917-1932",
      artist: "El Lissitzky (Lazar Lisitsky)",
      country: "Soviet Union",
      ideology: "Communism",
      description: "A work by a famous soviet Avant-Garde artist, the text translating to 'Beat the Whites with the Red Wedge.'"
    },
    {
      title: "Rabotnitsa",
      image: "image/3.jpg",
      year: "1914",
      artist: "Unknown",
      country: "Soviet Union",
      ideology: "Communism",
      description: "The cover of the 1923 inaugural issue of Rabotnitsa, the first Soviet women’s magazine found in 1914."
    },
    {
      title: "Socialist Realism",
      image: "image/4.jpg",
      year: "1934",
      artist: "Isaak Brodsky",
      country: "Soviet Union",
      ideology: "Communism",
      description: "This artwork represents the Socialist Realism movement of visual arts and literature, that aimed to idealise life under Soviet socialism."
    },
    {
      title: "The Museum of Modern Art (MoMA)",
      image: "image/5.png",
      year: "1929-",
      artist: "Photo by Soichi Sunami",
      country: "United States",
      ideology: "Capitalism",
      description: "While we typically know the MoMA as a major art museum, mid-20th century the institution played an incredibly important role is establishing our understanding of design today."
    },
    {
      title: "Pop Art",
      image: "image/6.jpg",
      year: "1964",
      artist: "Andy Warhol",
      country: "United States",
      ideology: "Capitalism",
      description: "This image of Marilyn Monroe is one of the most iconic pieces to come out of the Pop Art movement, that is arguably the quintessential capitalist art & design style.."
    },
    {
      title: "Mid-Century Modern",
      image: "image/7.png",
      year: "1956",
      artist: "Charles and Ray Eames",
      country: "United States",
      ideology: "Capitalism",
      description: "This is the famous Eames Lounge Chair and Ottoman, an iconic representation of the Mid-Century Modern design movement."
    },
    {
      title: "Art Deco",
      image: "image/8.jpg",
      year: "1926",
      artist: "Eduardo Garcia Benito",
      country: "United States",
      ideology: "Capitalism",
      description: "This is a Vogue magazine cover made in the design style of Art Deco- which became synonymous with the opulence and glamour of pre-Great Depression America."
    },

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
