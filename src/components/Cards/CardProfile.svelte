<script>

  // core components
  const team2 = "../assets/img/avatar.png";

  import { auth } from "../../lib/firebase/firebase.client";

  export let prijavljenUporabnik;

</script>

<div
  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16"
>
  <div class="px-6">
    <div class="flex flex-wrap justify-center">
      <div class="w-full px-4 flex justify-center">
        <div class="relative">
          <img
            alt="..."
            src="{team2}"
            class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
          />
        </div>
      </div>
      <div class="w-full px-4 text-center mt-20">
        <div class="flex justify-center py-4 lg:pt-4 pt-8">
          <div class="mr-4 p-3 text-center">
            <span
              class="text-xl font-bold block uppercase tracking-wide text-white"
            >
              22
            </span>
            <span class="text-sm text-white">Friends</span>
          </div>
          <div class="mr-4 p-3 text-center">
            <span
              class="text-xl font-bold block uppercase tracking-wide text-white"
            >
              10
            </span>
            <span class="text-sm text-white">Photos</span>
          </div>
          <div class="lg:mr-4 p-3 text-center">
            <span
              class="text-xl font-bold block uppercase tracking-wide text-white"
            >
              89
            </span>
            <span class="text-sm text-white">Comments</span>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-12">
      <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
        {auth.currentUser.displayName}
      </h3>
      <div
        class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
      >
        <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
        {prijavljenUporabnik.city}, {prijavljenUporabnik.country}
      </div>
      <div class="mb-2 text-blueGray-600 mt-10">
        <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
        {prijavljenUporabnik.work}
      </div>
      <div class="mb-2 text-blueGray-600">
        <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
        {prijavljenUporabnik.university}
      </div>
    </div>
    <div class="mt-10 py-10 border-t border-blueGray-200 text-center"></div>
  </div>
</div>
