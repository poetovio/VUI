<script>

  import { onMount } from "svelte";

  import IzposojaModal from "../Modals/izposoja/IzposojaModal.svelte";
  import IzposojaDeleteModal from "../Modals/izposoja/IzposojaDeleteModal.svelte";
  import IzposojaInput from "../SearchInputs/IzposojaInput.svelte";

  export let izposojeZadnjih30;
  export let izposoje;

  let searchTerm = "";
  let search = false;

  let renderedRows = [];
  let allRenderedRows = [];
  let filteredRows = [];

  console.log("Pridobljene izposoje:");

  console.log(izposojeZadnjih30);
  console.log(izposoje);

  function transformToMin(time) {
    return Math.round(time / 60) + " min " + time % 60 + " sec"; 
  }

  function izposojaByUser(user) {
    filteredRows = allRenderedRows.filter(row => row.username === user);
    console.log(filteredRows);
    search = true;
  }

  // transformacija datumov

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${day}.${month}.${year} ob ${hours}:${minutes}:${seconds}`;
  }

  onMount(async () => {

      renderedRows = izposojeZadnjih30.map(izposoja => ({
        id: izposoja._id,
        start_date: formatDate(izposoja.start_date),
        end_date: formatDate(izposoja.end_date),
        username: izposoja.username,
        start_station: izposoja.start_station,
        end_station: izposoja.end_station,
        weather: izposoja.weather,
        bike_id: izposoja.bike_id,
        duration: transformToMin(Math.abs(izposoja.duration))
      }));

      allRenderedRows = izposoje.izposoje.map(izposoja => ({
        id: izposoja._id,
        start_date: formatDate(izposoja.start_date),
        end_date: formatDate(izposoja.end_date),
        username: izposoja.username,
        start_station: izposoja.start_station,
        end_station: izposoja.end_station,
        weather: izposoja.weather,
        bike_id: izposoja.bike_id,
        duration: transformToMin(Math.abs(izposoja.duration))
      }));
  });

  // prikaz podatkov izposoje

  let modalContent = null;
  let showModal = false;

  function prikaziModal(row) {
    modalContent = row;
    showModal = true;
  }

  function closeModal() {
    modalContent = null;
    showModal = false;
  }

  // izbris izposoje iz baze
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

  // can be one of light or dark
  export let color = "light";
</script>

<IzposojaModal bind:showModal bind:modalContent on:close={closeModal} />
<IzposojaDeleteModal bind:showDelete bind:deleteContent on:close={closeDelete} />

<div
  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded {color === 'light' ? 'bg-white' : 'bg-red-800 text-white'}"
>
  <div class="rounded-t mb-0 px-4 py-3 border-0">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <h3
          class="font-semibold text-lg {color === 'light' ? 'text-blueGray-700' : 'text-white'}"
        >
          Izposoje
        </h3>
      </div>
      <div>
        <IzposojaInput bind:searchTerm bind:search izposojaByUser={izposojaByUser} izposoje={izposoje} />
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
            Začetek izposoje
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}"
            style="text-align: center;"
            >
            Konec izposoje
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}"
            style="text-align: center;"
            >
            Uporabnik
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}"
            style="text-align: center;"
            >
            Začetna postaja
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}"
            style="text-align: center;"
            >
            Končna postaja
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}"
          >Info</th>
        </tr>
      </thead>
      <tbody id="tableBody">
        {#if search}
          {#each filteredRows as row}
            <tr>
              <td class="..." style="text-align: center;">{row.start_date}</td>
              <td class="..." style="text-align: center;">{row.end_date}</td>
              <td class="..." style="text-align: center;">{row.username}</td>
              <td class="..." style="text-align: center;">{row.start_station}</td>
              <td class="..." style="text-align: center;">{row.end_station}</td>
              <td class="..." style="text-align: center;">
                <div class="button-container">
                  <button on:click={() => prikaziModal(row)}><i class="fas fa-info"></i></button>
                  <button on:click={() => prikaziDelete(row)}><i class="fas fa-trash-alt"></i></button>
                </div>
              </td>
            </tr>
          {/each}
        {:else}
          {#each renderedRows as row}
            <tr>
              <td class="..." style="text-align: center;">{row.start_date}</td>
              <td class="..." style="text-align: center;">{row.end_date}</td>
              <td class="..." style="text-align: center;">{row.username}</td>
              <td class="..." style="text-align: center;">{row.start_station}</td>
              <td class="..." style="text-align: center;">{row.end_station}</td>
              <td class="..." style="text-align: center;">
                <div class="button-container">
                  <button on:click={() => prikaziModal(row)}><i class="fas fa-info"></i></button>
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