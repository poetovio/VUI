<script>
  // core components
  import CardLineChart from "components/Cards/CardLineChart.svelte";
  import CardBarChart from "components/Cards/CardBarChart.svelte";
  import CardPageVisits from "components/Cards/CardPageVisits.svelte";
  import CardSocialTraffic from "components/Cards/CardSocialTraffic.svelte";

  export let izposojeNaDatum;
  export let postajalisca;
  export let kolesa;
  export let petIzposoj;

  console.log("Pridobljena postajalisca od fotra:");
  console.log(postajalisca);

  console.log("Pridobljena kolesa od fotra:");
  console.log(kolesa);

  console.log("Uporabniki od fotra:");
</script>

<div>
  <div class="flex flex-wrap">
    <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
      <CardLineChart {izposojeNaDatum} />
    </div>
    <div class="w-full xl:w-4/12 px-4">
      <CardBarChart {postajalisca} />
    </div>
  </div>
  <div class="flex flex-wrap mt-4">
    <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
      <CardPageVisits {petIzposoj} />
    </div>
    <div class="w-full xl:w-4/12 px-4">
      <CardSocialTraffic {kolesa} />
    </div>
  </div>
</div>
