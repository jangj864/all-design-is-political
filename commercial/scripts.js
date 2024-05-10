// The artworks data array
const artworksData = [
    {
      title: "PRODUCT – Raketa Watch",
      image: "image/1.png",
      year: "1961",
      artist: "Unknown",
      country: "Soviet Union",
      ideology: "Communism",
      description: "Sturdy and reliable wristwatches produced by the Petrodvorets Watch Factory (formerly known as the Raketa Watch Factory), reflecting Soviet emphasis on practicality and mass production of consumer goods."
    },
    {
      title: "TOY – Matryoshka Doll",
      image: "image/2.jpg",
      year: "Late 19th Century",
      artist: "Unknown",
      country: "Soviet Union",
      ideology: "Communism",
      description: "Symbolic nesting dolls representing unity and collectivism, often featuring traditional folk designs and portraying themes of family and community."
    },
    {
      title: "PACKAGING – Soviet Propaganda Book <Selected Works of Lenin>",
      image: "image/3.jpg",
      year: "1971",
      artist: "Vladimir llyich Lenin",
      country: "Soviet Union",
      ideology: "Communism",
      description: "Bold and colorful posters promoting socialist values, industrial achievements, and solidarity among workers, serving as packaging for ideological messages."
    },
    {
      title: "ADVERTISING",
      image: "image/4.png",
      year: "1930s",
      artist: "Various",
      country: "Soviet Union",
      ideology: "Communism",
      description: "Propaganda campaign celebrating the achievements of 'Stakhanovite' workers who exceeded production quotas, promoting the ideal of labor excellence and socialist emulation."
    },
    {
      title: "PRODUCT – Ford Model T",
      image: "image/5.jpg",
      year: "1908",
      artist: "Henry ford (designer)",
      country: "United States",
      ideology: "Capitalism",
      description: "Revolutionary automobile designed for mass production, symbolizing the advent of consumer culture and transportation accessibility in capitalist America."
    },
    {
      title: "TOY – Teddy Bear",
      image: "image/6.png",
      year: "1902",
      artist: "Morris Michtom",
      country: "United States",
      ideology: "Capitalism",
      description: "Iconic stuffed toy named after President Theodore Roosevelt, reflecting American sentimentality and the commercialization of childhood in the early 20th century."
    },
    {
      title: "PACKAGING – Campbell’s Soup Cans",
      image: "image/7.jpg",
      year: "late 19th Century",
      artist: "Andy Warhol",
      country: "United States",
      ideology: "Capitalism",
      description: "Classic tin cans featuring colorful labels, symbolizing the rise of branded products and mass-marketed goods in American households."
    },
    {
      title: "ADVERTISING – Coca-Cola 'Holidays Are Coming;",
      image: "image/8.png",
      year: "1995",
      artist: "Unknown",
      country: "United States",
      ideology: "Capitalism",
      description: "Iconic advertising campaign featuring festive imagery and catchy jingle, promoting Coca-Cola as a symbol of holiday joy and togetherness, embodying the spirit of American consumerism and brand loyalty."
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
