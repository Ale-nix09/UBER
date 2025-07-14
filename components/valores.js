
class ValoresComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <section class="bg-gray-100 py-16">
          <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10 text-center">
            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div class="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mx-auto mb-4">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 11c0-1.105.895-2 2-2s2 .895 2 2v1h-4v-1zM5 11V7a7 7 0 0114 0v4a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Seguridad</h3>
              <p class="text-gray-600">Protegemos los datos del usuario con cifrado y verificación constante.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div class="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mx-auto mb-4">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Propósito</h3>
              <p class="text-gray-600">Conectamos personas de forma eficiente, justa y confiable.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div class="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 mx-auto mb-4">
                <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Confianza</h3>
              <p class="text-gray-600">Construimos relaciones duraderas basadas en transparencia y compromiso.</p>
            </div>
          </div>
        </section>
      `;
    }
  }
  
  customElements.define('valores-component', ValoresComponent);
  