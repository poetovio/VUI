<script>
  // core components
  import CardStats from "components/Cards/CardStats.svelte";

  export let steviloPostajalisc;
  export let steviloKoles;
  export let steviloIzposoj;
  export let steviloUporabnikov;
</script>

<!-- Header -->
<div class="relative md:pt-32 pb-32 pt-12" style="background-color: #293444;">
  <div class="px-4 md:px-10 mx-auto w-full">
    <div>
      <!-- Card stats -->
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="Kolesa"
            statTitle="{steviloKoles}"
            statArrow="up"
            statPercent="3.48"
            statPercentColor="text-emerald-500"
            statDescripiron="Since last month"
            statIconName="fas fa-bicycle"
            statIconColor="bg-red-500"
          />
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="Postajališča"
            statTitle="{steviloPostajalisc}"
            statArrow="down"
            statPercent="3.48"
            statPercentColor="text-red-500"
            statDescripiron="Since last week"
            statIconName="fas fa-map-marked-alt"
            statIconColor="bg-orange-500"
          />
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="Izposoje"
            statTitle="{steviloIzposoj}"
            statArrow="down"
            statPercent="1.10"
            statPercentColor="text-orange-500"
            statDescripiron="Since yesterday"
            statIconName="fas fa-retweet"
            statIconColor="bg-pink-500"
          />
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="Število uporabnikov"
            statTitle="{steviloUporabnikov}"
            statArrow="up"
            statPercent="12"
            statPercentColor="text-emerald-500"
            statDescripiron="Since last month"
            statIconName="fas fa-users"
            statIconColor="bg-emerald-500"
          />
        </div>
      </div>
    </div>
  </div>
</div>
