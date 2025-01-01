fetch('Json/items.json')
	.then(response => response.json())
	.then(items => {

		let i = 0

		items.forEach(item => {
			const itemCard = document.createElement('div');
			itemCard.className = 'item-card';

			const itemImage = document.createElement('img');
			itemImage.src = "/images/" + item.Image + ".jpg";
			itemImage.alt = item.Name;
			itemCard.appendChild(itemImage);

			const itemDetails = document.createElement('div');

			const itemTitle = document.createElement('h3');
			itemTitle.textContent = item.Name;
			itemDetails.appendChild(itemTitle);

			const itemPrice = document.createElement('h5');
			itemPrice.textContent = "Price: " + item.Price;
			itemDetails.appendChild(itemPrice);

			const itemAddToCartButton = document.createElement('button');
			itemAddToCartButton.className = 'addtocart';
			itemAddToCartButton.textContent = 'Add to Cart';
			itemAddToCartButton.addEventListener("click", addToCart);
			itemDetails.appendChild(itemAddToCartButton);

			itemCard.appendChild(itemDetails);

			if (document.getElementById('items')) {
				document.getElementById('items').appendChild(itemCard);
			}

			if (document.getElementById('homeItems') && i < 4) {
				document.getElementById('homeItems').appendChild(itemCard);
			}

			i++
		})
	})
