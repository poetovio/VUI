<script>
  // core components
  import CardSettings from "components/Cards/CardSettings.svelte";
  import CardProfile from "components/Cards/CardProfile.svelte";
  import { firestoreInstance } from "../../stores/fireStore";
  import { onMount } from "svelte";

  import { auth } from "../../lib/firebase/firebase.client";

  export let prijavljenUporabnik;
  
  onMount(async () => {
    await firestoreInstance.getUser(auth.currentUser.email).then((data) => {
      prijavljenUporabnik = data;
    });
  });

  console.log("Uporabnik od fotra:");
  console.log(prijavljenUporabnik);
</script>

<div class="flex flex-wrap">
  <div class="w-full lg:w-8/12 px-4">
    <CardSettings {prijavljenUporabnik} />
  </div>
  <div class="w-full lg:w-4/12 px-4">
    <CardProfile {prijavljenUporabnik} />
  </div>
</div>
