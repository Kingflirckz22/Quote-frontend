// --- 1. SET UP YOUR VARIABLES ---

// Find the HTML elements we need to work with
const quoteDisplay = document.getElementById('quote-display');
const newQuoteBtn = document.getElementById('new-quote-btn');

// !!!!!!!!!!!!!!!!!!
// !!   IMPORTANT  !!
// !!!!!!!!!!!!!!!!!!
// PASTE YOUR RENDER BACKEND URL HERE:
// const BACKEND_URL = 'https://simple-quote-api-iw77.onrender.com';
// PASTE YOUR DOKPLOY BACKEND URL HERE:
const BACKEND_URL = 'quote-e8kzl2-ccff97-3-150-110-170.traefik.me';


// --- 2. DEFINE YOUR FUNCTIONS ---

async function getNewQuote() {
  // Show a loading message
  quoteDisplay.textContent = 'Loading...';

  try {
    // Use fetch() to make a request to your backend API
    const response = await fetch(BACKEND_URL + '/quote');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse the JSON data from the response
    const data = await response.json();

    // Update the blockquote with the new quote
    quoteDisplay.textContent = data.quote;

  } catch (error) {
    // If something goes wrong, show an error message
    console.error('Error fetching quote:', error);
    quoteDisplay.textContent = 'Sorry, could not fetch a quote. Please try again.';
  }
}


// --- 3. ADD EVENT LISTENERS ---

// Run the function once when the page loads
document.addEventListener('DOMContentLoaded', getNewQuote);

// Add a click event listener to the button
newQuoteBtn.addEventListener('click', getNewQuote);