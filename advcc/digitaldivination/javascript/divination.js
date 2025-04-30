document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded");
  
    const submitButton = document.getElementById("fortunebutton");
    const myResponseElement = document.getElementById("fortuneheader");
    
    //check to ensure everything loads 
    // if (!submitButton) {
    //   console.error("No button with ID 'fortunebutton' found.");
    //   return;
    // }
  
    // if (!myResponseElement) {
    //   console.error("No element with ID 'fortuneheader' found.");
    //   return;
    // }
  
    let fortune;
  
    fetch('https://fortune-cookie4.p.rapidapi.com/slack', {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '0b5a7203f7msh59a513908927fddp1fcf8cjsn2e9a778ab1b1',
        'x-rapidapi-host': 'fortune-cookie4.p.rapidapi.com'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("API response:", data);
        fortune = data.text;
      })
      .catch(error => {
        console.error("Fetch error:", error);
        fortune = "Failed to fetch fortune.";
      });
  
    submitButton.addEventListener("click", () => {
      console.log("clicked");
      myResponseElement.textContent = fortune;
    });
  });
  