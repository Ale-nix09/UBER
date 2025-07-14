class DescNumComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="bg-gray-100 py-16">
            <style>
                .stats-container {
                    display: flex;
                    align-items: center;
                    gap: 60px;
                    margin-top: 3rem;
                    padding: 0 2rem;
                }

                .stats-group {
                    display: flex;
                    gap: 80px;
                    text-align: center;
                }

                .stat-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

            </style>

            <div> 
                <h1 class="text-4xl font-bold mb-4">Brindando un transporte seguro y eficiente a millones de clientes</h1> 
                
                <div class="stats-container">
                    <img src="Img/Airport-Fall.webp" alt="Airport people" class="class="h-10 w-auto rounded-lg mb-6"> 
                    
                    <div class="stats-group">

                        <div class="stat-item">
                            <h1 class="text-4xl font-bold mb-4">888</h1> 
                            <p class="text-lg mb-6">ciudades</p> 
                        </div>

                        <div class="stat-item">
                            <h1 class="text-4xl font-bold mb-4">48</h1> 
                            <p class="text-lg mb-6">países</p> 
                        </div>

                        <div class="stat-item">
                            <h1 class="text-4xl font-bold mb-4">280</h1> 
                            <p class="text-lg mb-6">millones de</p> 
                            <p class="text-lg mb-6">descargas</p> 
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('desc-num-component', DescNumComponent);