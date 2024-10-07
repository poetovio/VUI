<script>
    import StarRating from "@ernane/svelte-star-rating";
    export let score;

    console.log("Score zvezdice:");
    console.log(score);

    let config = {
    readOnly: true,
    countStars: 5,
    range: {
      min: 0, 
      max: 5, 
      step: 0.001
    },
    score: score,
    showScore: false,
    scoreFormat: function(){ return `(${this.score}/${this.countStars})` },
    starConfig: {
      size: 30,
      fillColor: '#F9ED4F',
      strokeColor: "#BB8511",
      unfilledColor: '#FFF',
      strokeUnfilledColor: '#000'
    }
  }
</script>

<StarRating {config} />