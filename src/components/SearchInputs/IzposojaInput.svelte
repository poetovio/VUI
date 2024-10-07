<script>
	export let searchTerm;
    export let search;
    export let izposojaByUser;
    export let izposoje;
</script>


<input type="text" 
				 id="search-field" 
				 placeholder="Uporabniško ime" 
				 autocomplete="off"
				 bind:value={searchTerm}
				 on:input
                 class="rounded-md" />
<button
          class="bg-#447352 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded-full outline-none focus:outline-none ml-auto mb-1 ease-linear transition-all duration-150"
          type="button"
          on:click={() => {izposojaByUser(searchTerm)}}
          style="background-color: #447352;"
        >
          <i class="fas fa-search"></i>Poišči izposoje uporabnika
        </button>
<button
        class="bg-#447352 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded-full outline-none focus:outline-none ml-auto mb-1 ease-linear transition-all duration-150"
        type="button"
        on:click={() => {searchTerm = ""; search = false;}}
        style="background-color: #447352;"
    >
        <i class="fas fa-times"></i>
    </button>