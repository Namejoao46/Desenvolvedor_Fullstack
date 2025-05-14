class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        // Criando o elemento do título
        this.componentRoot = document.createElement("h1");

        // Aplicando estilos
        const style = document.createElement("style");
        style.textContent = `h1 { color: red; }`;

        // Adicionando elementos ao Shadow DOM
        shadow.appendChild(this.componentRoot);
        shadow.appendChild(style);
    }

    connectedCallback() {
        // Agora o atributo será lido após o elemento estar no DOM!
        this.componentRoot.textContent = this.getAttribute("titulo") || "Título padrão";
    }
}

customElements.define("titulo-dinamico", TituloDinamico);

