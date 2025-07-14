class impact extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="flex justify-center items-center px-6 py-20 bg-gray-100 ">
    <div class="relative w-full max-w-4xl">

      <div class="absolute left-[-10px] top-[40px] bg-[#CFE9F1] w-36 h-36 rounded-md flex flex-col items-center justify-center text-center shadow-md transform rotate-[12deg] z-10">
        <span class="text-3xl font-bold text-black">400</span>
        <span class="text-base text-black">projects</span>
      </div>

      <div class="absolute left-[-70px] top-[150px] bg-[#E7EAF6] w-36 h-36 rounded-md flex flex-col items-center justify-center text-center shadow-md transform -rotate-[4deg] z-0">
        <span class="text-3xl font-bold text-black">70+</span>
        <span class="text-base text-black">countries</span>
      </div>

      <div class="absolute right-[-10px] top-[180px] bg-[#EADCF8] w-36 h-36 rounded-md flex flex-col items-center justify-center text-center shadow-md transform rotate-[5deg] z-0">
        <span class="text-3xl font-bold text-black">50</span>
        <span class="text-base text-black text-center leading-tight">international<br />awards</span>
      </div>

      <div class="text-center z-20 relative">
        <div class="inline-block bg-black text-white text-lg px-6 py-2 font-semibold rounded-full shadow-md mb-6">
          Impact
        </div>

        <h1 class="sm:text-6xl text-4xl font-bold leading-tight">
          Social impact: making
        </h1>

        <div class="mt-2 mb-4 relative inline-block px-2">
          <span class="absolute inset-0 bg-gray-200 -skew-y-1 z-0 rounded-sm"></span>
          <span class="relative z-10 sm:text-5xl text-3xl font-extrabold text-black">a difference</span>
        </div>

        <p class="font-bold mt-5 text-xl sm:text-2xl text-black leading-snug">
          Uber is creating opportunities <br />
          and transforming mobility.
        </p>

        <a href="#" class="font-bold mt-5 text-xl sm:text-2xl inline-block underline">
          Learn more about Uber
        </a>
      </div>

    </div>

  </section class="">

  <div class="overflow-x-auto px-6 py-10 bg-gray-100">
  <div class="flex gap-6 w-max snap-x snap-mandatory">


    <div class="bg-white rounded-xl shadow-md flex flex-col justify-between w-80 flex-shrink-0 snap-start">
      <img src="conductor.webp" alt="" class="w-full h-64 object-cover rounded-t-xl">
      <div class="p-5">
        <p class="text-black text-lg font-medium">
          Earn income on your own schedule with deliveries, rides, or both. You can use your own car or choose a rental vehicle through the Uber app.
        </p>
      </div>
      <div class="px-5 pb-5">
        <button class="bg-black hover:bg-gray-400 text-white font-semibold py-2 px-4 rounded-md">
          Learn more
        </button>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-md flex flex-col justify-between w-80 flex-shrink-0 snap-start">
      <img src="Negocios.webp" alt="" class="w-full h-64 object-cover rounded-t-xl">
      <div class="p-5">
        <p class="text-black text-lg font-medium">
          Uber for Business is a platform that enables companies of all sizes to manage global rides and meals, as well as local deliveries.
        </p>
      </div>
      <div class="px-5 pb-5">
        <button class="bg-black hover:bg-gray-400 text-white font-semibold py-2 px-4 rounded-md">
          Learn more
        </button>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-md flex flex-col justify-between w-80 flex-shrink-0 snap-start">
      <img src="uber.jpg" alt="" class="w-full h-64 object-cover rounded-t-xl">
      <div class="p-5">
        <p class="text-black text-lg font-medium">
          It has driven innovation in the transportation industry by challenging traditional taxi services, introducing dynamic pricing models, GPS-based route tracking.
        </p>
      </div>
      <div class="px-5 pb-5">
        <button class="bg-black hover:bg-gray-400 text-white font-semibold py-2 px-4 rounded-md">
          Learn more
        </button>
      </div>
    </div>

    
    <div class="bg-white rounded-xl shadow-md flex flex-col justify-between w-80 flex-shrink-0 snap-start">
      <img src="seguridad.webp" alt="" class="w-full h-64 object-cover rounded-t-xl">
      <div class="p-5">
        <p class="text-black text-lg font-medium">
          Safety concerns have been raised regarding both passengers and drivers, especially in relation to regulation and liability in the event of accidents.
        </p>
      </div>
      <div class="px-5 pb-5">
        <button class="bg-black hover:bg-gray-400 text-white font-semibold py-2 px-4 rounded-md">
          Learn more
        </button>
      </div>
    </div>

  
    <div class="bg-white rounded-xl shadow-md flex flex-col justify-between w-80 flex-shrink-0 snap-start">
      <img src="Transparencia.webp" alt="" class="w-full h-64 object-cover rounded-t-xl">
      <div class="p-5">
        <p class="text-black text-lg font-medium">
          It has introduced greater transparency in pricing and driver selection—features that weren't always available with traditional transportation services.
        </p>
      </div>
      <div class="px-5 pb-5">
        <button class="bg-black hover:bg-gray-400 text-white font-semibold py-2 px-4 rounded-md">
          Learn more
        </button>
      </div>
    </div>

  </div>
</div>

        `
    }
}
customElements.define('mo-vil', impact);