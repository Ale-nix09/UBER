class footer extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <section class="bg-gray-100 py-16">
    <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
            <h1 class="text-4xl font-bold mb-4">De desvalido a empresa global</h1>
            <p class="text-lg mb-6">La verdadera historia del fenómeno tecnológico que es Uber, contada por su CEO.</p>
            <button class="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">Descargar</button>
        </div>

        <div class="w-full h-96 flex items-center justify-center">
        <div class="text-gray-500 rounded-lg"><img src="https://www.lavanguardia.com/uploads/2018/01/05/5fa4322979dc5.jpeg" alt=""></div>
        </div>
    </div>
    </section>

    <footer class="bg-black text-white px-6 py-12">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
            <img src="https://tse4.mm.bing.net/th/id/OIP.GwyUERaVJrdL0VbUjpFBbQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" class="h-10 w-auto rounded-lg mb-6"> 
        </div>

        <div>
            <h3 class="text-lg font-semibold mb-4">Our services</h3>
            <ul class="space-y-2 text-sm mb-6">
            <li>City rides</li>
            <li>City to city rides</li>
            <li>Courier delivery</li>
            <li>Freight delivery</li>
            <li>Why Uber</li>
            </ul>

            <h3 class="text-lg font-semibold mb-4">Impact</h3>
            <ul class="space-y-2 text-sm">
                <li>Social impact</li>
                <li>Sustainability</li>
                <li>Community programs</li>
            </ul>
        </div>

        <div>
            <h3 class="text-lg font-semibold mb-4">Earn with Uber</h3>
            <ul class="space-y-2 text-sm mb-6">
                <li>City rides</li>
                <li>City to city rides</li>
                <li>Courier delivery</li>
                <li>Freight delivery</li>
                <li>Uber Money</li>
            </ul>

            <h3 class="text-lg font-semibold mb-4">About us</h3>
            <ul class="space-y-2 text-sm">
                <li>Company</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Contact</li>
            </ul>
        </div>

        <div>
            <h3 class="text-lg font-semibold mb-4">For business</h3>
            <ul class="space-y-2 text-sm">
                <li>B2B solutions</li>
                <li>Corporate rides</li>
                <li>Delivery services</li>
            </ul>
        </div>
    </div>

        <div class=" border-gray-700 my-8"></div>

        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div class="flex space-x-4">
                <a href="#"><img src="https://static.vecteezy.com/system/resources/previews/017/221/797/original/facebook-logo-transparent-background-free-png.png" alt="" class="h-12 w-auto"></a>
                <a href="#"><img src="https://static.vecteezy.com/system/resources/previews/018/930/413/original/instagram-logo-instagram-icon-transparent-free-png.png" alt="" class="h-12 w-auto"></a>
                <a href="#"><img src="https://th.bing.com/th/id/R.540ac9c1933114dfaa1e70fc5ee7be40?rik=qlJHp4KtdpD6qg&riu=http%3a%2f%2fsguru.org%2fwp-content%2fuploads%2f2018%2f02%2fLogo-LinkedIn-Round.png&ehk=9uNZBLNU7noGFIC%2f%2ftj04WaVLb%2b9rptqOONbqmNJl2s%3d&risl=&pid=ImgRaw&r=0" alt="" class="h-10 w-auto"></a>
        </div>

        <div class="flex space-x-4">
                <a href="#"><img src="https://tse4.mm.bing.net/th/id/OIP.zCVKv6egajMMLV99BmH0RAHaCZ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" class="rounded-xl h-10"></a>
                <a href="#"><img src="https://th.bing.com/th/id/R.740290f9116c87003761b797ec0b8978?rik=vEiGPdXPIWY9Nw&pid=ImgRaw&r=0" alt="" class="h-10"></a>
        </div>
    </div>
    </footer>

        
        `
    }


}

customElements.define('ca-tito', footer);
 