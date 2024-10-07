<script>
  export let showDelete;
  export let deleteContent;

  import { afterUpdate } from "svelte";

  import { apiStore } from "../../../stores/golangStore";

  async function onDelete() {
    await apiStore.deletePostajalisce(deleteContent.id);
    isDeleted = true;
  }

  afterUpdate(() => {
    if (!showDelete && isDeleted) {
      isDeleted = false;
      location.reload();
    }
  });

  let dialog; // HTMLDialogElement
  let isDeleted = false;

  $: if (dialog && showDelete) dialog.showModal();

</script>

<dialog
  bind:this={dialog}
  on:close={() => (showDelete = false)}
  on:click|self={() => dialog.close()}
>
  <div on:click|stopPropagation>
    <div class="modal-header">
      <h1 style="font-size: 24px;"><i class="fas fa-trash"></i> Izbris postajališča</h1>
    </div>
    <hr />
    {#if showDelete}
      <div class="modal-content">
        {#if isDeleted}
          <p>Postajališče je bilo uspešno izbrisano iz podatkovne baze.</p>
          <button class="btn-close-modal" on:click={() => dialog.close()}>Zapri</button>
        {:else}
          <p class="delete-question">
            Ali hočete izbrisati to postajališče iz podatkovne baze?
          </p>
          <div class="btn-container">
            <button class="btn-delete" autofocus on:click={() => onDelete()}>Izbriši</button>
            <button class="btn-close-modal" on:click={() => dialog.close()}>Prekliči</button>
          </div>
          {/if}
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

  .delete-question {
    font-size: 18px;
    margin-bottom: 16px;
  }

  .btn-delete {
    background-color: #d9534f;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 8px;
    transition: background-color 0.2s ease-in-out;
  }

  .btn-delete:hover {
    background-color: #c9302c;
  }
</style>