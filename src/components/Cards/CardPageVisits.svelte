<script>
    import { onMount } from "svelte";

    export let petIzposoj;

    function formatDuration(duration) {
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      return `${minutes} min ${seconds} s`;
    }
</script>

<div
  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
>
  <div class="rounded-t mb-0 px-4 py-3 border-0">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <h3 class="font-semibold text-base text-blueGray-700">
          Zadnjih 5 izposoj
        </h3>
      </div>
      <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
        <button
          class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          on:click={() => { svelte:window.location.href = '/admin/tables'; }}
        >
          Pregled vseh
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
            class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
          >
            Uporabnik
          </th>
          <th
            class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
          >
            Začetna postaja
          </th>
          <th
            class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
          >
            Končna postaja
          </th>
          <th
            class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
          >
            Trajanje
          </th>
        </tr>
      </thead>
      <tbody id="tableIzposoje">
        {#each petIzposoj as izposoja}
          <tr>
            <td class="px-6 py-2 text-xs whitespace-nowrap">{izposoja.username}</td>
            <td class="px-6 py-2 text-xs whitespace-nowrap">{izposoja.start_station}</td>
            <td class="px-6 py-2 text-xs whitespace-nowrap">{izposoja.end_station}</td>
            <td class="px-6 py-2 text-xs whitespace-nowrap">{formatDuration(Math.abs(izposoja.duration))}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
