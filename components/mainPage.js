class mainPage extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <div id="fondo">
        <div class="flex pt-6">

        <section class="pl-7 pr-6">
            <img src="images/Uber_logo_2018.png" alt="" width="110px">
        </section>

        <section class="pl-20 pb-1">
            <button class="hover:bg-gray-300 bg-white pt-2 pb-2 pl-2 pr-3 rounded-full font-bold text-lg flex text-stone-800"><img class="w-8 rounded-full pr-1" src="images/español.jpg" alt="">Es</button>
        </section>
            
        <section class="pl-4 pb-1 flex justify-center">
            <button class="hover:bg-gray-300 bg-white pt-2 pb-2 pl-3 pr-4 rounded-full font-bold text-lg flex text-stone-800"><img class="h-6 pr-2 mt-1" src="images/amburgesa.png" alt="">Menú</button>
        </section>
    </div>

    <div class="text-6xl font-bold text-white pt-14 pl-5 pb-20">
        <h1>Una forma más justa de </h1>
        <h1>hacer negocios es algo en lo</h1>
        <h1>que todos podemos estar </h1>
        <h1>de acuerdo</h1>
    </div>

    <div class="pl-4 pt-45">
        <button class="hover:bg-gray-800 py-4 px-12 font-semibold text-xl bg-zinc-900 text-white rounded-xl ">Descarga la app</button>
    </div>
    </div>
        
        `
    }


}

customElements.define('keep-calm', mainPage);
 