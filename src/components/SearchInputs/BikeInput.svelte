<script>
	export let searchTerm;
</script>


<i class="fas fa-search" style="margin-right: 5px;"></i><input type="text" 
				 id="search-field" 
				 placeholder="Serijska številka" 
				 autocomplete="off"
				 bind:value={searchTerm}
				 on:input
                 class="rounded-md" />
