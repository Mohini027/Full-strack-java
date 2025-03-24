async function getData() {
    try {
        const resonse = await fetch("https://fakestoreapi.com/products");
        const data = await resonse.json()
        let card = document.createElement("div")
        card.style.backgroundColor = "blue"
        card.style.width = "400"
        card.style.display = "flex"
        card.style.flexWrap = "wrap"
        card.style.gap = "10px"
        card.style.justifyContent = "center"

        document.body.append(card)
        for (i = 0; i <= data.length; i++) {

            let img = document.createElement("img")
            img.src = data[i].image
            img.width = "400"
            img.style.border = "2px solid green"
            img.style.margin = "5px"
            console.log(img)

            card.append(img)
        }
        console.log(data)
    } catch (err) {
        console.log("error fetching in data", err)
    }
} getData()