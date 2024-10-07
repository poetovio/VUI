<script>

  export let prijavljenUporabnik;

  console.log("Uspesno pridobljen uporabnik");
  console.log(prijavljenUporabnik);
</script>

<div
  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
>
  <div class="rounded-t bg-white mb-0 px-6 py-6">
    <div class="text-center flex justify-between">
      <h6 class="text-blueGray-700 text-xl font-bold">Profil uporabnika</h6>
    </div>
  </div>
  <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
    <form>
      <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
        Podatki uporabnika
      </h6>
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              for="grid-username"
            >
              Uporabniško ime
            </label>
            <input
              disabled
              id="grid-username"
              type="text"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              value="{prijavljenUporabnik.username}"
            />
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              for="grid-email"
            >
              Email naslov
            </label>
            <input
              disabled
              id="grid-email"
              type="email"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              value="{prijavljenUporabnik.email}"
            />
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Ime
            </label>
            <input
              disabled
              id="grid-first-name"
              type="text"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              value="{prijavljenUporabnik.name}"
            />
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Priimek
            </label>
            <input
              disabled
              id="grid-last-name"
              type="text"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              value="{prijavljenUporabnik.surname}"
            />
          </div>
        </div>
      </div>

      <hr class="mt-6 border-b-1 border-blueGray-300" />

      <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
        Kontaktni podatki
      </h6>
      <div class="flex flex-wrap">
        <div class="w-full lg:w-12/12 px-4">
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              for="grid-address"
            >
              Naslov
            </label>
            <input
              disabled
              id="grid-address"
              type="text"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              value="{prijavljenUporabnik.address}"
            />
          </div>
        </div>
        <div class="w-full lg:w-4/12 px-4">
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              for="grid-city"
            >
              Mesto
            </label>
            <input
              disabled
              id="grid-city"
              type="email"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              value="{prijavljenUporabnik.city}"
            />
          </div>
        </div>
        <div class="w-full lg:w-4/12 px-4">
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              for="grid-country"
            >
              Država
            </label>
            <input
              disabled
              id="grid-country"
              type="text"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              value="{prijavljenUporabnik.country}"
            />
          </div>
        </div>
        <div class="w-full lg:w-4/12 px-4">
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              for="grid-postal-code"
            >
              Poštna številka
            </label>
            <input
              disabled
              id="grid-postal-code"
              type="text"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              value="{prijavljenUporabnik.postalCode}"
            />
          </div>
        </div>
      </div>

      <hr class="mt-6 border-b-1 border-blueGray-300" />
    </form>
  </div>
</div>
