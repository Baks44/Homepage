{
    const welcome = () => {
        console.log("Dzień dobry witam Cię na mojej stronie!");
    }

    welcome();

    const setHowMuch = () => {
        const howMuch = document.querySelector(".howMuch");
        const day = document.querySelector(".day").innerText;

        switch (day) {
            case "Poniedziałek":
                return howMuch.innerText = "5";
            case "Wtorek":
                return howMuch.innerText = "4";
            case "Środa":
                return howMuch.innerText = "3";
            case "Czwartek":
                return howMuch.innerText = "2";
            case "Piątek":
                return howMuch.innerText = "1";
            case "Sobota":
                return howMuch.innerText = "Mamy weekend!";
            case "Niedziela":
                return howMuch.innerText = "Mamy weekend!";
        }
    }

    setHowMuch();
}