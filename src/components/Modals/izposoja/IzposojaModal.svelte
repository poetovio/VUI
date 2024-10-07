<script>
  export let showModal; // boolean
  export let modalContent;

  let dialog; // HTMLDialogElement

  $: if (dialog && showModal) dialog.showModal();
</script>

<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
>
  <div on:click|stopPropagation>
    <div class="modal-header">
      <h1 style="font-size: 24px;"><i class="fas fa-info-circle"></i> Podatki o izposoji</h1>
    </div>
    <hr />
    {#if modalContent}
      <form class="modal-content">
        <div class="property">
          <label><i class="fas fa-hashtag"></i> ID izposoje</label>
          <input type="text" value={modalContent.id} readonly />
        </div>
        <div class="property">
          <label><i class="fas fa-user-circle"></i> Uporabnik</label>
          <input type="text" value={modalContent.username} readonly />
        </div>
        <div class="property">
          <label><i class="fas fa-map-pin"></i> Začetna postaja</label>
          <input type="text" value={modalContent.start_station} readonly />
        </div>
        <div class="property">
          <label><i class="fas fa-flag-checkered"></i> Končna postaja</label>
          <input type="text" value={modalContent.end_station} readonly />
        </div>
        <div class="property">
          <label><i class="far fa-calendar"></i> Začetek vožnje</label>
          <input type="text" value={modalContent.start_date} readonly />
        </div>
        <div class="property">
          <label><i class="fas fa-calendar"></i> Konec vožnje</label>
          <input type="text" value={modalContent.end_date} readonly />
        </div>
        <div class="property">
          <label><i class="fas fa-cloud-sun"></i> Vreme</label>
          <input type="text" value={modalContent.weather} readonly />
        </div>
        <div class="property">
          <label><i class="fas fa-hourglass-half"></i> Trajanje</label>
          <input type="text" value={modalContent.duration} readonly />
        </div>
      </form>
    {/if}
    <hr />
    <div class="btn-container">
        <button class="btn-close-modal" autofocus on:click={() => dialog.close()}>Zapri</button>
    </div>
  </div>
</dialog>

<style>
	dialog {
        width: 500px;
		max-width: 100%;
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
</style>