fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => response.json())

    .then(data => {
        for (let i = 0; i < data.length; i++) {
            const dataEl = data[i];
            console.log(dataEl);

            const changeImg = document.querySelectorAll("img")
            changeImg[i].src = dataEl.url

            const changeDate = document.querySelectorAll(".date")
            changeDate[i].innerHTML = dataEl.date

            const changeTitle = document.querySelectorAll(".title_card")
            changeTitle[i].innerHTML = toUpperChase(dataEl.title)






        }
    })
    .catch(error => {
        console.error(error);
    });
