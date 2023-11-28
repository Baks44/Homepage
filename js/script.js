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
                howMuch.innerText = "5";
                break;
            case "Wtorek":
                howMuch.innerText = "4";
                break;
            case "Środa":
                howMuch.innerText = "3";
                break;
            case "Czwartek":
                howMuch.innerText = "2";
                break;
            case "Piątek":
                howMuch.innerText = "1";
                break;
            case "Sobota":
            case "Niedziela":
                howMuch.innerText = "Mamy weekend!";
                break;

        }
    }

    setHowMuch();
}