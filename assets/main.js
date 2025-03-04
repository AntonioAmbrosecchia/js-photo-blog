fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => response.json())
    .then(data => {
        const cards = document.querySelectorAll(".cards");
        const changeImg = document.querySelectorAll(".img_cards");
        const changeDate = document.querySelectorAll(".date");
        const changeTitle = document.querySelectorAll(".title_card");


        const overlay = document.getElementById("overlay");
        const overlayImg = document.getElementById("over_img");
        const closeButton = document.getElementById("close");

        data.forEach((dataEl, i) => {
            if (i < cards.length) {
                changeImg[i].src = dataEl.url;
                changeDate[i].innerHTML = dataEl.date;
                changeTitle[i].innerHTML = dataEl.title.toUpperCase();


                cards[i].addEventListener('click', function () {
                    console.log("Cliccata card:", dataEl.title);
                    overlay.style.display = "flex";
                    overlayImg.src = dataEl.url;
                });
            }
        });


        closeButton.addEventListener('click', function () {
            overlay.style.display = "none";
        });
    })
    .catch(error => {
        console.error("Errore nel caricamento dei dati:", error);
    });