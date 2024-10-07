<script>
  import { onMount } from "svelte";
  // library that creates chart objects in page

  export let izposojeNaDatum;

  import Chart from "chart.js";

  let myChart;

  // init chart
  onMount(async () => {

    console.log("Pridobljene izposoje:");
    console.log(izposojeNaDatum);

    let monthNames = [
      "Januar", "Februar", "Marec", "April", "Maj", "Junij",
      "Julij", "Avgust", "September", "Oktober", "November", "December"
    ];

    let buttonBox = document.getElementById("buttonBox");

    let datasetLabels = [];

    const datasets = monthNames.map((monthName, index) => ({
      label: monthName,
      backgroundColor: "rgba(75, 115, 82, 0.2)",
      borderColor: "#447352",
      borderWidth: 1,
      data: [],
      fill: false,
      hidden: true
    }));

    // Populate dataset data and labels
    Object.keys(izposojeNaDatum).forEach(date => {
      const [year, month, day] = date.split("-");
      const monthIndex = parseInt(month) - 1;
      datasets[monthIndex].data.push(izposojeNaDatum[date]);

      if (!datasetLabels[monthIndex]) {
        datasetLabels[monthIndex] = [];
      }
      datasetLabels[monthIndex].push(`${day}. ${monthNames[monthIndex]}`);
    });

    let chartData = {
      labels: [],
      datasets: datasets,
      hidden: true
    };

    datasets.forEach(dataset => {
      const dates = Object.keys(izposojeNaDatum).filter(date => {
        let [year, month, day] = date.split("-");
        return monthNames[parseInt(month) - 1] === dataset.label;
      });

      const sortedDates = dates.sort((a, b) => a.localeCompare(b));
      dataset.labels = sortedDates.map(date => {
        let [year, month, day] = date.split("-");
        return `${day}. ${monthNames[parseInt(month) - 1]}`;
      });
    });

    var config = {
      type: "line",
      data: chartData,
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "#447352",
        },
        legend: {
          labels: {
            fontColor: "#447352",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "#447352",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "#447352",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "#447352",
                zeroLineColor: "#447352",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "#447352",
                beginAtZero: true
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "#447352",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "#447352",
                zeroLineColor: "#447352",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    myChart = new Chart(ctx, config);
    window.myLine = myChart;

    monthNames.forEach((monthName, index) => {
      let button = document.createElement("button");
      button.textContent = monthName.substr(0, 3);
      button.style.margin = "5px";
      button.style.padding = "5px";
      button.style.backgroundColor = "transparent";
      button.style.color = "#447352";
      button.style.border = "1px solid #447352"; 
      button.style.borderRadius = "5px";
      button.style.cursor = "pointer";
      button.style.width = "100%";
      button.style.boxSizing = "border-box";
      button.addEventListener("click", () => {
        myChart.data.datasets[index].hidden = !myChart.data.datasets[index].hidden;
        if (!myChart.data.datasets[index].hidden) {
          myChart.data.labels = datasetLabels[index];
        } else {
          myChart.data.labels = [];
        }
        myChart.update();
      });
      buttonBox.appendChild(button);
    });
  });
</script>

<div
  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
>
  <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full max-w-full flex-grow flex-1">
        <h6 class="uppercase text-blueGray-500 mb-1 text-xs font-semibold">
          Število izposoj
        </h6>
        <h2 class="text-blueGray-600 text-xl font-semibold">
          Število dnevnih izposoj
        </h2>
      </div>
    </div>
  </div>
  <div class="p-4 flex-auto">
    <!-- Chart -->
    <div class="relative h-350-px">
      <canvas id="line-chart"></canvas>
    </div>
  </div>
<div class="buttonBox" id="buttonBox"></div>
</div>

<style>
  .month-button {
    margin: 5px 10px;
    padding: 5px 10px;
    background-color: transparent;
    color: #447352;
    border: 1px solid #447352;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;
  }

  .buttonBox {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }

   @media (max-width: 1000px) {
    .buttonBox {
      flex-wrap: wrap;
    }
  }
</style>