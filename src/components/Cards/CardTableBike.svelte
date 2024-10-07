<script>
  import { onMount } from "svelte";
  import KoloModal from "../Modals/kolo/KoloModal.svelte";
  import KoloDeleteModal from "../Modals/kolo/KoloDeleteModal.svelte";
  import KoloChangeModal from "../Modals/kolo/KoloChangeModal.svelte";
  import KoloInsertModal from "../Modals/kolo/KoloInsertModal.svelte";
  import Zvezdica from "./Zvezdica.svelte";

  import BikeInput from "../SearchInputs/BikeInput.svelte";

  export let kolesa;
  let renderedRows = [];

  onMount(async () => {
    renderedRows = kolesa.kolesa.map(kolo => ({
      id: kolo._id,
      serijska_stevilka: kolo.serijska_stevilka,
      mnenje_length: kolo.mnenje.length,
      averageMnenje: calculateAverage(kolo.mnenje).toFixed(2),
    }));
  });

  // informacije o kolesu
  function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  }

  let modalContent = null;
  let showModal = false;
  let score = 0;

  function prikaziModal(row) {
    modalContent = row;
    showModal = true;
    score = modalContent.averageMnenje;
  }

  function closeModal() {
    modalContent = null;
    showModal = false;
    score = 0;
  }

  // izbris kolesa iz baze
  let deleteContent = null;
  let showDelete = false;

  function prikaziDelete(row) {
    deleteContent = row;
    showDelete = true;
  }

  function closeDelete() {
    deleteContent = null;
    showDelete = false;
  }

  // urejanje kolesa v bazi

  let showChange = false;
  let urediContent = null;

  function prikaziChange(row) {
    urediContent = row;
    showChange = true;
  }

  function closeChange() {
    urediContent = null;
    showChange= false;
  }

  // insertiranje kolesa v bazo

  let showInsert = false;

  function prikaziInsert() {
    showInsert = true;
  }

  function closeInsert() {
    showInsert = false;
  }

  // iskanje po kolesih

  let searchTerm = "";

  let filteredKolo = [];

  // funkcija za filtriranje po kolesih
  const searchKolo = () => {
    return filteredKolo = renderedRows.filter(kolo => {
      let serijska = kolo.serijska_stevilka.toLowerCase();
      return serijska.includes(searchTerm.toLowerCase());
    });
  }

  export let color = "light";
</script>

<KoloModal bind:showModal bind:modalContent bind:score on:close={closeModal} />
<KoloDeleteModal bind:showDelete bind:deleteContent on:close={closeDelete} />
<KoloChangeModal bind:showChange bind:urediContent on:close={closeChange} />
<KoloInsertModal bind:showInsert on:close={closeInsert} />

<div
  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded {color === 'light' ? 'bg-white' : 'bg-red-800 text-white'}"
>
  <div class="rounded-t mb-0 px-4 py-3 border-0">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <h3
          class="font-semibold text-lg {color === 'light' ? 'text-blueGray-700' : 'text-white'}"
        >
          Kolesa
        </h3>
      </div>
      <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
        <BikeInput bind:searchTerm on:input={searchKolo} />
        <button
          class="bg-#447352 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded-full outline-none focus:outline-none ml-auto mb-1 ease-linear transition-all duration-150"
          type="button"
          on:click={prikaziInsert}
          style="background-color: #447352;"
        >
          <i class="fas fa-plus" style="color: white;"></i> Dodaj kolo
        </button>
      </div> 
    </div>
  </div>
  
  <div class="block w-full overflow-x-auto">
    <!-- Projects table -->
    <table class="items-center w-full bg-transparent border-collapse">
      <thead>
        <tr>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}"
            style="text-align: center;"
            >
            Serijska številka
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}"
            style="text-align: center;"
            >
            Število mnenj
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}"
            style="text-align: center;"
            >
            Povprečno mnenje
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}"
            style="text-align: center;"
            >
            Info
          </th>
        </tr>
      </thead>
      <tbody id="tableKoloBody">
        {#if searchTerm && filteredKolo.length === 0}
          <td colspan="4" class="text-center py-4">Ni zadetkov.</td>
        {:else if filteredKolo.length > 0}
          {#each filteredKolo as row (row.id)}
            <tr>
              <td class="..." style="text-align: center;"><i class="fas fa-bicycle"></i> {row.serijska_stevilka}</td>
              <td class="..." style="text-align: center;">{row.mnenje_length}</td>
              <td class="..." style="text-align: center;"><Zvezdica score={row.averageMnenje} /></td>
              <td class="..." style="text-align: center;">
                <div class="button-container">
                  <button on:click={() => prikaziModal(row)}><i class="fas fa-info"></i></button>
                  <button on:click={() => prikaziChange(row)}><i class="fas fa-wrench"></i></button>
                  <button on:click={() => prikaziDelete(row)}><i class="fas fa-trash-alt"></i></button>
                </div>
              </td>
            </tr>
          {/each}
        {:else}
          {#each renderedRows as row (row.id)}
            <tr>
              <td class="..." style="text-align: center;"><i class="fas fa-bicycle"></i> {row.serijska_stevilka}</td>
              <td class="..." style="text-align: center;">{row.mnenje_length}</td>
              <td class="..." style="text-align: center;"><Zvezdica score={row.averageMnenje} /></td>
              <td class="..." style="text-align: center;">
                <div class="button-container">
                  <button on:click={() => prikaziModal(row)}><i class="fas fa-info"></i></button>
                  <button on:click={() => prikaziChange(row)}><i class="fas fa-wrench"></i></button>
                  <button on:click={() => prikaziDelete(row)}><i class="fas fa-trash-alt"></i></button>
                </div>
              </td>
            </tr>
          {/each}
        {/if}
      </tbody>
    </table>
  </div>
</div>

<style>
  .button-container {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
</style>