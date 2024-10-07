<script>
  let loadingText = "Loading ...";
</script>

<style>
  .loading-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #447352;
  }

  .loading-circle {
    width: 60px;
    height: 60px;
  }

  .loading-text {
    font-size: 24px;
    color: white;
    text-align: center;
    font-weight: bold;
    margin-top: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
</style>

<div class="loading-container">
  <img src="/assets/img/loading.gif" alt="Loading Circle" class="loading-circle" />
  <div class="loading-text">{loadingText}</div>
</div>