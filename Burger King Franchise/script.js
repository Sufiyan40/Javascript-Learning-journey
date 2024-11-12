// Generate random time for the order (2 to 5 seconds)
function getRandomTime() {
    return Math.floor(Math.random() * 3000) + 2000;
  }
  
  // Generate random Order ID
  function getRandomOrderId() {
    return Math.floor(Math.random() * 1000) + 100;
  }
  
  document.getElementById('orderButton').addEventListener('click', function () {
    const selectedItems = [];
    const checkBoxes = document.querySelectorAll('input[name="foodItem"]:checked');
  
    checkBoxes.forEach((checkbox) => selectedItems.push(checkbox.value));
  
    // If no item is selected, alert the user
    if (selectedItems.length === 0) {
      alert("Please select at least one item to order.");
      return;
    }
  
    const orderButton = document.getElementById('orderButton');
    const foodImage = document.getElementById('foodImage');
    const orderIdElement = document.getElementById('orderId');
    const orderIdValueElement = document.getElementById('orderIdValue');
    const orderStatus = document.getElementById('orderStatus');
    const loader = document.getElementById('loader');
  
    // Resetting states for new order
    foodImage.classList.add('hidden');
    orderIdElement.classList.add('hidden');
    orderStatus.classList.remove('hidden');
    loader.classList.remove('hidden');
    orderButton.disabled = true;
  
    // Simulate order preparation with a timeout
    setTimeout(() => {
      const orderId = getRandomOrderId();
      orderIdValueElement.textContent = orderId;
      orderIdElement.classList.remove('hidden');
  
      // Select a random item to show its image
      const randomItem = selectedItems[Math.floor(Math.random() * selectedItems.length)];
  
      switch (randomItem) {
        case 'Burger':
          foodImage.src = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=60';
          break;
        case 'Fries':
          foodImage.src = 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=800&q=60';
          break;
        case 'Drink':
          foodImage.src = 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?auto=format&fit=crop&w=800&q=60';
          break;
        default:
          foodImage.src = 'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?auto=format&fit=crop&w=800&q=60';
      }
  
      // Show the selected food image and hide loading elements
      foodImage.classList.remove('hidden');
      orderStatus.classList.add('hidden');
      loader.classList.add('hidden');
      orderButton.disabled = false;
    }, getRandomTime());
  });
  