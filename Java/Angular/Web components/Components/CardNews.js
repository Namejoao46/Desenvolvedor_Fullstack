class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("url-link");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");


        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newsImg = document.createElement("img");
        newsImg.src = this.getAttribute("photo") || "/Java/Web components/assets/img/foto Default.jpg";
        newsImg.alt = "Darth Vader"

        cardRight.appendChild(newsImg);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 700px;
                border: 1px solid gray;
                box-shadow: 10px 8px 18px 5px rgba(0,0,0,0.6);
                -webkit-box-shadow: 10px 8px 18px 5px rgba(0,0,0,0.6);
                -moz-box-shadow: 10px 8px 18px 5px rgba(0,0,0,0.6);
                display: flex;
                flex-direction: row;
            }

            .card_left > span {
                font-weight: 350;
            }

            .card_left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;

            }

            .card_left > h1 {
                margin-top: 15px;
                font-size: 20px;

            }

            .card_left > p{
                color: #393152;
            }

            .card_right > img {
                width: 300px;
            }
        `;

        return style;
    }

}

customElements.define("card-news", CardNews)