<script>
  export let showChange; // boolean
  export let urediContent;

  import { afterUpdate } from "svelte";

  import { apiStore } from "../../../stores/golangStore";

  let dialog; // HTMLDialogElement
  let isDeleted = false;

  let naziv = "";
  let naslov = "";
  let latitude = "";
  let longitude = "";

  $: if (dialog && showChange) {
    dialog.showModal();
    naziv = urediContent.name;
    naslov = urediContent.address;
    latitude = urediContent.latitude;
    longitude = urediContent.longitude;
  }

  afterUpdate(() => {
    if (!showChange && isDeleted) {
      isDeleted = false;
      location.reload();
    }
  });


  async function handleUrediClick() {
    await apiStore.updatePostajalisce(urediContent.id, document.getElementById('name').value, document.getElementById('naslov').value,
       document.getElementById('latitude').value, document.getElementById('longitude').value);
    isDeleted = true;
  }
</script>

<dialog
  bind:this={dialog}
  on:close={() => (showChange = false)}
  on:click|self={() => dialog.close()}
>
  <div on:click|stopPropagation>
    <div class="modal-header">
      <h1 style="font-size: 24px;"><i class="fas fa-wrench"></i> Uredi postajališče</h1>
    </div>
    <hr />
    {#if isDeleted}
      <div class="modal-content">
        <p>Postajališče je bilo uspešno spremenjeno.</p>
        <button class="btn-close-modal" on:click={() => dialog.close()}>Zapri</button>
      </div>
    {:else}
      {#if urediContent}
      <form class="modal-content">
        <div class="property">
          <label><i class="fas fa-hashtag"></i> ID postajalisca</label>
          <input type="text" value={urediContent.id} readonly />
        </div>
        <div class="property">
          <label><i class="fas fa-signature"></i> Naziv</label>
          <input type="text" id="name" value={naziv} />
        </div>
        <div class="property">
          <label><i class="fas fa-location-arrow"></i> Naslov</label>
          <input type="text" id="naslov" value={naslov} />
        </div>
        <div class="property">
          <label><i class="fas fa-map-pin"></i> Latitude</label>
          <input type="text" id="latitude" value={latitude} />
        </div>
        <div class="property">
          <label><i class="fas fa-map-pin"></i> Longitude</label>
          <input type="text" id="longitude" value={longitude} />
        </div>
      </form>
      {/if}
      
    <hr />
    <div class="btn-container">
      <button class="btn-uredi" on:click={handleUrediClick}>Uredi</button>
      <button class="btn-close-modal" autofocus on:click={() => dialog.close()}>Prekliči</button>
    </div>
    {/if}
  </div>
</dialog>

<style>
	dialog {
		max-width: 32em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
    dl {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 8px;
    }
    .modal-content {
    display: grid;
    gap: 16px;
    padding: 16px;
  }
  .property {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 4px;
    }
    label {
        font-weight: bold;
    }
    input {
        padding: 4px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #f8f8f8;
        width: 100%;
    }
  .modal-header {
    background-color: transparent;
    justify-content: center;
    color: #447352;
    padding: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    border-top-left-radius: 0.2em;
    border-top-right-radius: 0.2em;
  }
  .btn-close-modal {
    transition: background-color 0.2s ease-in-out;
  }
  .btn-container {
    display: flex;
    justify-content: center;
    margin-top: 16px; /* Add some spacing between form and button */
    
  }

  .btn-uredi,
  .btn-preklici {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  }
  
  .btn-uredi {
    background-color: #447352;
    color: white;
    margin-right: 10px;
  }
  
  .btn-preklici {
    background-color: #ccc;
    color: #333;
  }
  
  .btn-uredi:hover,
  .btn-preklici:hover {
    background-color: #335e46;
    color: white;
  }
  
  .btn-container {
    display: flex;
    justify-content: center;
    margin-top: 16px; /* Add some spacing between form and buttons */
  }
</style>