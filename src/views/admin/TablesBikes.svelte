<script>
  // core components
  import CardTableBike from "../../components/Cards/CardTableBike.svelte";

  export let kolesa;

  console.log("Kolesa kartice od fotra:");
  console.log(kolesa);
</script>

<div class="flex flex-wrap mt-4">
  <div class="w-full mb-12 px-4">
    <CardTableBike {kolesa} />
  </div>
</div>
