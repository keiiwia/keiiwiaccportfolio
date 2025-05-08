document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded");
  
    const cookieArea = document.getElementById("cookie-area");
    const cookieWhole = document.getElementById("cookie-whole");
    const cookieHalves = document.querySelector(".cookie-halves");
    const cookieLabel = document.querySelector(".cookie-label");
    const fortuneReveal = document.getElementById("fortune-reveal");
    const fortuneHeader = document.getElementById("fortuneheader");
    const luckyNumbersElement = document.getElementById("lucky-numbers");
    const checkLotteryButton = document.getElementById("check-lottery");
    const lotteryResultElement = document.getElementById("lottery-result");
    const resetBtn = document.getElementById("reset-btn");
    
    // Initialize animations
    const animations = new FortuneCookieAnimations();
    
    // check to ensure everything loads 
    if (!cookieArea || !cookieWhole || !cookieHalves || !cookieLabel || !fortuneReveal || !fortuneHeader || !luckyNumbersElement || !checkLotteryButton || !lotteryResultElement || !resetBtn) {
      console.error("Required elements not found.");
      return;
    }

    // Helper to show/hide
    function show(el) { el.classList.remove('hidden'); }
    function hide(el) { el.classList.add('hidden'); }

    // Generate 5 random numbers between 1 and 69
    function generateLuckyNumbers() {
        const numbers = new Set();
        while(numbers.size < 5) {
            numbers.add(Math.floor(Math.random() * 69) + 1);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    // Check if numbers match any recent lottery results
    async function checkLotteryNumbers(numbers) {
        try {
            const response = await fetch('https://data.ny.gov/resource/d6yy-54nr.json?$limit=30');
            const data = await response.json();
            
            // Check if any of our numbers match the winning numbers
            for (const draw of data) {
                const winningNumbers = draw.winning_numbers.split(' ').map(Number);
                const matches = numbers.filter(num => winningNumbers.includes(num));
                if (matches.length >= 3) {
                    return {
                        matched: true,
                        message: `Congratulations! Your numbers matched ${matches.length} numbers from the ${draw.draw_date} drawing! Consider buying a lottery ticket!`
                    };
                }
            }
            return {
                matched: false,
                message: "Your numbers didn't match any recent drawings. Try again later!"
            };
        } catch (error) {
            console.error("Error checking lottery numbers:", error);
            return {
                matched: false,
                message: "Unable to check lottery numbers. Please try again later."
            };
        }
    }
  
    let fortune = "";
    let luckyNumbers = [];
  
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
        fortune = fortune.replace(/^🥠 your fortune reads:/i, '').trim();
      })
      .catch(() => { fortune = "Failed to fetch fortune."; });
  
    // Cookie click: split halves, then show fortune
    cookieWhole.addEventListener("click", () => {
        hide(cookieWhole);
        show(cookieHalves);
        cookieArea.classList.add("cracked");
        cookieLabel.textContent = "";
        setTimeout(() => {
            show(fortuneReveal);
            fortuneHeader.textContent = fortune;
            luckyNumbers = generateLuckyNumbers();
            luckyNumbersElement.textContent = luckyNumbers.join(' - ');
            // Fade in the button after fortune and numbers
            setTimeout(() => {
                checkLotteryButton.classList.add('visible');
            }, 900); // matches the lucky-numbers animation delay
        }, 700);
    });

    // Prevent double trigger on halves
    cookieHalves.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    // Check lottery button
    checkLotteryButton.addEventListener("click", async () => {
        checkLotteryButton.classList.remove('visible');
        // Fade out cookie halves
        cookieHalves.classList.add('fade-out');
        hide(fortuneReveal);
        setTimeout(() => {
            show(lotteryResultElement);
            const resultPromise = checkLotteryNumbers(luckyNumbers);
            resultPromise.then(result => {
                lotteryResultElement.textContent = result.message;
                show(resetBtn);
                resetBtn.classList.add('visible');
            });
        }, 500); // Wait for fade-out
    });

    // Reset button
    resetBtn.addEventListener("click", () => {
        // Reset all UI
        hide(fortuneReveal);
        hide(lotteryResultElement);
        hide(resetBtn);
        resetBtn.classList.remove('visible');
        hide(cookieHalves);
        show(cookieWhole);
        cookieArea.classList.remove("cracked");
        show(cookieLabel);
        cookieLabel.textContent = "Tap cookie to open";
        checkLotteryButton.classList.remove('visible');
        // Remove fade-out for next time
        cookieHalves.classList.remove('fade-out');
        // Animate whole cookie and label flying up
        cookieWhole.classList.add('fly-up');
        cookieLabel.classList.add('fly-up');
        setTimeout(() => {
            cookieWhole.classList.remove('fly-up');
            cookieLabel.classList.remove('fly-up');
        }, 700);
    });

    // On load, show only cookie area
    hide(fortuneReveal);
    hide(lotteryResultElement);
    hide(resetBtn);
    hide(cookieHalves);
    show(cookieWhole);
    show(cookieLabel);
    checkLotteryButton.classList.remove('visible');
});
  

// const parentElement = document.getElementById("parent");
// const newElement = document.createElement("div");
// newElement.textContent = "This is a new element.";
// parentElement.appendChild(newElement);