function createCard(packageData) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardImage = document.createElement("div");
  cardImage.classList.add("card-image");
  cardImage.style.backgroundImage = `url(${packageData.image})`;
  card.appendChild(cardImage);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = packageData.title;
  cardContent.appendChild(cardTitle);

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("card-description");
  cardDescription.textContent = packageData.description;
  cardContent.appendChild(cardDescription);

  const cardDetails = document.createElement("div");
  cardDetails.classList.add("card-details");

  const cardDuration = document.createElement("span");
  cardDuration.textContent = packageData.duration;
  cardDetails.appendChild(cardDuration);

  const cardPrice = document.createElement("span");
  cardPrice.textContent = packageData.price;
  cardDetails.appendChild(cardPrice);

  const cardProvider = document.createElement("span");
  cardProvider.textContent = `by ${packageData.provider}`;
  cardDetails.appendChild(cardProvider);

  cardContent.appendChild(cardDetails);
  card.appendChild(cardContent);

  return card;
}

// Loop through tour packages and create cards (the missing part)
export function createCards(tourPackages, cardContainer) {
  tourPackages.forEach((packageData) => {
    const card = createCard(packageData);
    cardContainer.appendChild(card);
  });
}
