<template>
  <section class="dashboard">
    <div class="grid-item dashboard__balance">
      <h1>Total Balance</h1>
      <strong>$ 4000.18</strong>
      <div class="dashboard__balance_btn">
        <button class="top">top up</button>
        <button class="withdraw">withdraw</button>
      </div>
    </div>
    <div class="grid-item dashboard__report">
      <canvas id="report"></canvas>
    </div>
    <div class="grid-item dashboard__transactions">
      <h1>Latest Transactions</h1>
      <div class="payments">
        <div
          v-for="item in transactions_list"
          v-bind:key="item.id"
          class="payments__item"
        >
          <div class="payments__name">
            <img
              class="payments__item-logo"
              :src="require(`../../images/transactions/${item.img_name}.svg`)"
              :alt="item.img_name"
            />
            <p class="payments__item-category">{{ item.category }}</p>
          </div>

          <p v-if="item.sum > 0" class="payments__item-sum">+{{ item.sum }}$</p>
          <p v-else class="payments__item-sum">{{ item.sum }}$</p>
        </div>
      </div>
    </div>

    <div class="grid-item dashboard__spending">
      <canvas id="spending"></canvas>
    </div>
  </section>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "Dashboard-component",

  components: {},

  data() {
    return {
      transactions_list: [
        {
          id: 100,
          img_name: "johdi",
          category: "Personal payment",
          sum: -35.0,
        },
        {
          id: 101,
          img_name: "nike",
          category: "Shopping",
          sum: -128.0,
        },
        {
          id: 102,
          img_name: "mobile",
          category: "Communication",
          sum: -10.0,
        },
        {
          id: 103,
          img_name: "balance_up",
          category: "Personal payment",
          sum: 300.0,
        },
        {
          id: 104,
          img_name: "balance_down",
          category: "Personal payment",
          sum: -35.0,
        },
      ],
    };
  },

  mounted() {
    this.renderReportChart();
    this.renderSpendingChart();
  },

  methods: {
    renderReportChart() {
      const report = document.getElementById("report");

      new Chart(report, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Benefit",
              data: [2000, 500, 1000, 1900, 800, 1250],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
                "rgb(28, 117, 219)",
                "rgb(28, 219, 69)",
                "rgb(111, 28, 219)",
              ],
            },
            {
              label: "Spending",
              data: [1000, 700, 1300, 1700, 950, 1300],
              backgroundColor: [
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 205, 86, 0.5)",
                "rgba(28, 117, 219, 0.5)",
                "rgba(28, 219, 69, 0.5)",
                "rgba(111, 28, 219, 0.5)",
              ],
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: "Report",
              padding: {
                top: 10,
                bottom: 15,
              },
              color: "#000",
              font: {
                weight: "bold",
                size: 20,
              },
              fullSize: true,
            },
            legend: {
              display: false, // легенда графика
              position: "bottom",
            },
          },
        },
      });
    },

    renderSpendingChart() {
      const spending = document.getElementById("spending");

      new Chart(spending, {
        type: "pie",
        data: {
          labels: ["Personal", "Shopping", "Phone", "Other"],
          datasets: [
            {
              label: "My First Dataset",
              data: [2000, 500, 1000, 1700],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
                "rgb(28, 117, 219)",
              ],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          cutout: 100,
          scales: {
            gridLines: {
              display: false,
              drawBorder: false,
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Spending this month",
              padding: {
                top: 10,
                bottom: 15,
              },
              color: "#000",
              font: {
                weight: "bold",
                size: 20,
              },
              fullSize: true,
            },
            legend: {
              display: true, // легенда графика
              position: "bottom",
            },
            tooltips: {
              cornerRadius: 0,
              caretSize: 0,
              xPadding: 16,
              yPadding: 10,
              backgroundColor: "rgba(0, 150, 100, 0.9)",
              titleFontStyle: "normal",
              titleMarginBottom: 15,
            },
          },
        },
      });
    },
  },
};
</script>
