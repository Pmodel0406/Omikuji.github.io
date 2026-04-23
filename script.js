function Click() {
    const result = document.getElementsByClassName("ResultText");
    const kuji = ["大吉","中吉","小吉","吉","末吉","凶","大凶"];   
    const image = document.getElementsByClassName("OmikujiImage");
    for (let i = 0; i<5; i++){
        image[0].animate(
            [
                {transform: "translateY(0)"},
                {transform: "translateY(30px)"},
                {transform: "translateY(0"},
                {transform:"TranslateY(-30px"},
                {transform:"TranslateY(0"}      
            ],
            {
                duration:500,
                iterations:5,
            },
        );
    }
    const total = 500 * 5;
    setTimeout(() => {
        const random = Math.floor(Math.random() * kuji.length);
        result[0].innerHTML = kuji[random];
    },total);
}