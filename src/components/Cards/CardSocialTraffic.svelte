<script>
  import { onMount } from "svelte";
  import Zvezdica from "./Zvezdica.svelte";

  export let kolesa;

  let renderedRows = [];

  let top5Kolesa = null;

  console.log("Kolesa iz konca:");
  console.log(kolesa);

  function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  }

  onMount(async () => {
    kolesa.kolesa.forEach(kolo => {
      kolo.averageMnenje = calculateAverage(kolo.mnenje);
    });

    // Sort the kolesa array based on the calculated averages
    kolesa.kolesa.sort((a, b) => b.averageMnenje - a.averageMnenje);

    // Select the top 5 Kolo objects
    top5Kolesa = kolesa.kolesa.slice(0, 5);

    top5Kolesa.forEach(kolo => {
      
      const row = {
        serijska_stevilka: kolo.serijska_stevilka,
        mnenje_length: kolo.mnenje.length,
        averageMnenje: kolo.averageMnenje,
      };
      renderedRows = [...renderedRows, row];
    });
  });
</script>

<div
  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
>
  <div class="rounded-t mb-0 px-4 py-3 border-0">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <h3 class="font-semibold text-base text-blueGray-700">
          Najbolje ocenjena kolesa
        </h3>
      </div>
      <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
        <button
          class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          on:click={() => { svelte:window.location.href = '/admin/bikes'; }}
        >
          Pregled vseh
        </button>
      </div>
    </div>
  </div>
  <div class="block w-full overflow-x-auto">
    <!-- Projects table -->
    <table class="items-center w-full bg-transparent border-collapse">
      <thead class="thead-light">
        <tr>
          <th
            class="px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            style="text-align: center;"
            >
            Serijska številka
          </th>
          <th
            class="px-8 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"
            style="text-align: center;"
            >
            Ocena
          </th>
        </tr>
      </thead>
      <tbody id="tableOcena">
        {#each renderedRows as row (row.serijska_stevilka)}
          <tr>
            <td class="..." style="text-align: center;"><i class="fas fa-bicycle"></i> {row.serijska_stevilka}</td>
            <td class="..."><Zvezdica score={row.averageMnenje} /></td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
