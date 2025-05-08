class FortuneCookieAnimations {
    constructor() {
        this.fortuneCookie = document.querySelector(".fortune-cookie");
        this.fortuneContent = document.querySelector(".fortune-content");
        this.lotteryResult = document.getElementById("lottery-result");
    }

    flipFortuneCookie() {
        this.fortuneCookie.classList.add("flipped");
    }

    showFortuneContent() {
        setTimeout(() => {
            this.fortuneContent.classList.add("visible");
        }, 300);
    }

    hideFortuneCookie() {
        this.fortuneCookie.style.opacity = "0";
        this.fortuneCookie.style.transform = "translateY(-20px)";
    }

    showLotteryResult() {
        setTimeout(() => {
            this.lotteryResult.classList.add("visible");
        }, 300);
    }

    reset() {
        this.fortuneCookie.classList.remove("flipped");
        this.fortuneContent.classList.remove("visible");
        this.lotteryResult.classList.remove("visible");
        this.fortuneCookie.style.opacity = "1";
        this.fortuneCookie.style.transform = "translateY(0)";
    }
} 