<script>
  // core components
  import CardTable from "components/Cards/CardTable.svelte";

  export let izposoje;
  export let izposojeZadnjih30;

  console.log("Izposoje od fotra:");
  console.log(izposojeZadnjih30);
</script>

<div class="flex flex-wrap mt-4">
  <div class="w-full mb-12 px-4">
    <CardTable {izposojeZadnjih30} {izposoje} />
  </div>
</div>
