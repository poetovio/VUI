<script>
  import { onMount, onDestroy } from "svelte";
  import maplibregl, { Map } from 'maplibre-gl';

  import { apiStore } from "../../stores/golangStore";

  import PostajalisceModal from "../Modals/postajalisce/PostajalisceModal.svelte";
  import PostajalisceDeleteModal from "../Modals/postajalisce/PostajalisceDeleteModal.svelte";
  import PostajalisceUpdateModal from "../Modals/postajalisce/PostajalisceUpdateModal.svelte";
  import PostajalisceInsertModal from "../Modals/postajalisce/PostajalisceInsertModal.svelte";

  export let postajalisca;

  // @ts-ignore
  let map;
  // @ts-ignore
  let mapContainer;

  const apiKey = "bKZHAEghGhX0hIIzZk9Y";

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

  // izbris postajališča iz baze
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

  // urejanje postajališča v bazi

  let showChange = false;
  let urediContent = null;

  function prikaziChange(row) {
    urediContent = row;
    showChange = true;
  }

  function closeChange() {
    urediContent = null;
    showChange = false;
  }

  // vstavljanje postajališča v bazo

  let showInsert = false;

  function prikaziInsert() {
    showInsert = true;
  }

  function closeInsert() {
    showInsert = false;
  }

  // init google maps
  onMount(async () => {
    const initialState = { lng: 15.64667, lat: 46.55472, zoom: 14 };

    postajalisca = await apiStore.getPostajalisca();

    map = new Map({
      // @ts-ignore
      container: mapContainer,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });

    mapContainer.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-action]");
      if (button) {
        const action = button.getAttribute("data-action");
        const postId = button.getAttribute("data-id");
        const postajalisce = postajalisca.postajalisca[postId];

        const row = {
          id: postajalisce._id,
          name: postajalisce.ime,
          address: postajalisce.naslov,
          latitude: postajalisce.latitude,
          longitude: postajalisce.longitude
        };

        if (action === "info") {
          prikaziModal(row);
        } else if (action === "edit") {
          prikaziChange(row);
        } else if (action === "delete") {
          prikaziDelete(row);
        }
      }
    });

    if (postajalisca != null) {
      Object.keys(postajalisca.postajalisca).forEach((key, index) => {
        const location = postajalisca.postajalisca[index];
        const marker = new maplibregl.Marker()
          .setLngLat({ lng: location.longitude, lat: location.latitude })
          .setPopup(new maplibregl.Popup().setHTML(`
            <div class="popup-content" style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
              <h1 style="text-align: center;"><i class="fas fa-map-pin" style="color: red;"></i> ${location.ime}</h1>
              <div style="text-align: center;">
                <div class="button-container">
                  <button data-action="info" data-id="${index}" style="margin-right: 15px;" class="no-outline">
                    <i class="fas fa-info"></i>
                  </button>
                  <button data-action="edit" data-id="${index}" style="margin-right: 15px;" class="no-outline">
                    <i class="fas fa-wrench"></i>
                  </button>
                  <button data-action="delete" data-id="${index}" class="no-outline">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          `))
          .addTo(map);
      });
    }

  });

  onDestroy(() => {
    // @ts-ignore
    map.remove();
  });

  export let color = "light";
</script>

<PostajalisceModal bind:showModal bind:modalContent on:close={closeModal} />
<PostajalisceDeleteModal bind:showDelete bind:deleteContent on:close={closeDelete} />
<PostajalisceUpdateModal bind:showChange bind:urediContent on:close={closeChange} />
<PostajalisceInsertModal bind:showInsert on:close={closeInsert} />

 <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded {color === 'light' ? 'bg-white' : 'bg-red-800 text-white'}">
   <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-lg {color === 'light' ? 'text-blueGray-700' : 'text-white'}"
          >
            Postajališča
          </h3>
        </div>
        <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <button
            class="bg-#447352 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded-full outline-none focus:outline-none ml-auto mb-1 ease-linear transition-all duration-150"
            type="button"
            on:click={prikaziInsert}
            style="background-color: #447352;"
          >
             <i class="fas fa-plus" style="color: white;"></i> Dodaj postajališče
          </button>
        </div> 
      </div>
    </div>
   
    <div
      id="map-canvas"
      class="relative w-full rounded h-600-px"
    >
     <div class="map-wrap">
       <a href="https://www.maptiler.com" class="watermark"><img
         src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo"/></a>
       <div class="map" bind:this={mapContainer}></div>
     </div>  
   </div>
 </div>

<style>
  .map-wrap {
    position: relative;
    width: 100%;
    height: calc(100vh - 77px); /* calculate height of the screen minus the heading */
  }

  .map {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .watermark {
    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 999;
  }
  .button-container {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  .no-outline {
    outline: none;
  }
  .no-outline:focus {
    outline: none;
  }
</style>