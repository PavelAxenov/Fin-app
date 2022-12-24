<template>
  <div class="reports-header">
    <h1 class="reports-header__title">Reports</h1>
    <button v-on:click="exportTable('export-report-table')" class="export-btn">
      Export report
    </button>

    <div class="reports-header__filters">
      <SingleSelect
        ref="changeTypeOfReport"
        :options="optionsType"
        :dataArray="typesReport"
        :changeFunction="changeTypeFunction"
      />

      <SingleSelect
        ref="changePeriod"
        :options="optionsPeriod"
        :dataArray="periodsReport"
        :changeFunction="changePeriodFunction"
      />
    </div>
  </div>

  <table id="export-report-table" class="reports-table">
    <thead>
      <tr>
        <th>Place</th>
        <th>Category</th>
        <th>Income</th>
        <th>Costs</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody class="reports-table__body">
      <tr v-for="item in arrFromOptions" v-bind:key="item.id">
        <td>{{ item.place }}</td>
        <td>{{ item.category }}</td>
        <td v-if="item.income > 0">+{{ item.income }} $</td>
        <td v-else>{{ item.income }} $</td>
        <td>{{ item.costs }} $</td>
        <td>{{ item.date }}</td>
      </tr>
    </tbody>
  </table>

  <div
    v-for="item in arrFromOptions"
    v-bind:key="item.id"
    class="reports-table__mob"
  >
    <div class="reports-table__mob--name">
      <p class="place">{{ item.place }}</p>
      <span class="category">{{ item.category }}</span>
    </div>
    <div class="reports-table__mob--transfer">
      <p
        v-if="item.income > 0 && item.costs === 0"
        class="transfer transfer--green"
      >
        +{{ item.income }} $
      </p>
      <p
        v-else-if="item.income === 0 && item.costs < 0"
        class="transfer transfer--red"
      >
        {{ item.costs }} $
      </p>
      <span class="transfer__date">{{ item.date }}</span>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
import SingleSelect from "@/components/single_select/SingleSelect.vue";

export default {
  name: "Reports-component",

  components: {
    SingleSelect,
  },

  setup() {
    const reportsArr = [
      {
        id: "junuary",
        costsArr: [
          {
            id: 1,
            place: "Пятерочка",
            category: "products",
            income: 0,
            costs: -800,
            date: "12.01.2020",
            type: "costs",
          },
          {
            id: 2,
            place: "Магнит",
            category: "products",
            income: 0,
            costs: -100,
            type: "costs",
            date: "14.01.2020",
          },
          {
            id: 3,
            place: "Перекресток",
            category: "products",
            income: 0,
            costs: -800,
            type: "costs",
            date: "17.01.2020",
          },
          {
            id: 4,
            place: "Банк",
            category: "transfer",
            income: +200000,
            costs: 0,
            type: "income",
            date: "20.01.2020",
          },
        ],
      },
      {
        id: "february",
        costsArr: [
          {
            id: 1,
            place: "Пятерочка",
            category: "products",
            income: 0,
            type: "costs",
            costs: -100,
            date: "12.02.2020",
          },
          {
            id: 2,
            place: "Магнит",
            category: "products",
            income: 0,
            type: "costs",
            costs: -100,
            date: "14.02.2020",
          },
          {
            id: 3,
            place: "Банк",
            category: "transfer",
            income: 0,
            costs: -800,
            type: "costs",
            date: "17.02.2020",
          },
          {
            id: 4,
            place: "Перекресток",
            category: "products",
            income: 0,
            type: "costs",
            costs: -100,
            date: "20.02.2020",
          },
        ],
      },
      {
        id: "march",
        costsArr: [
          {
            id: 1,
            place: "Пятерочка",
            category: "products",
            income: 0,
            costs: -200,
            type: "costs",
            date: "12.03.2020",
          },
          {
            id: 2,
            place: "Банк",
            category: "transfer",
            income: +500,
            costs: 0,
            type: "income",
            date: "14.03.2020",
          },
          {
            id: 3,
            place: "Перекресток",
            category: "products",
            income: 0,
            type: "costs",
            costs: -800,
            date: "17.03.2020",
          },
          {
            id: 4,
            place: "Магнит",
            category: "products",
            income: 0,
            type: "costs",
            costs: -300,
            date: "20.03.2020",
          },
        ],
      },
      {
        id: "april",
        costsArr: [
          {
            id: 1,
            place: "Пятерочка",
            category: "products",
            income: 0,
            costs: -800,
            type: "costs",
            date: "12.04.2020",
          },
          {
            id: 2,
            place: "Банк",
            category: "transfer",
            income: 0,
            costs: -100,
            type: "costs",
            date: "14.04.2020",
          },
          {
            id: 3,
            place: "Банк",
            category: "transfer",
            income: 0,
            costs: -800,
            type: "costs",
            date: "17.04.2020",
          },
          {
            id: 4,
            place: "Банк",
            category: "transfer",
            income: +200000,
            type: "income",
            costs: 0,
            date: "20.04.2020",
          },
        ],
      },
      {
        id: "may",
        costsArr: [
          {
            id: 1,
            place: "Банк",
            category: "transfer",
            income: 0,
            costs: -800,
            type: "costs",
            date: "12.05.2020",
          },
          {
            id: 2,
            place: "Магнит",
            category: "products",
            income: 0,
            costs: -100,
            type: "costs",
            date: "14.05.2020",
          },
          {
            id: 3,
            place: "Перекресток",
            category: "products",
            income: 0,
            costs: -800,
            type: "costs",
            date: "17.05.2020",
          },
          {
            id: 4,
            place: "Банк",
            category: "transfer",
            income: +250000,
            costs: 0,
            type: "income",
            date: "20.05.2020",
          },
        ],
      },
    ];

    const typesReport = [
      {
        name: "Full report",
        value: "full",
        checked: true,
      },
      {
        name: "Income",
        value: "income",
        checked: false,
      },
      {
        name: "Costs",
        value: "costs",
        checked: false,
      },
    ];

    const periodsReport = [
      {
        name: "Junuary",
        value: "junuary",
        checked: true,
      },
      {
        name: "February",
        value: "february",
        checked: false,
      },
      {
        name: "March",
        value: "march",
        checked: false,
      },
      {
        name: "April",
        value: "april",
        checked: false,
      },
      {
        name: "May",
        value: "may",
        checked: false,
      },
    ];

    return {
      typesReport,
      periodsReport,
      reportsArr,
    };
  },

  data() {
    return {
      typeReport: "full",
      month: "junuary",
    };
  },

  computed: {
    optionsPeriod() {
      return {
        disabled: false,
      };
    },
    optionsType() {
      return {
        disabled: false,
      };
    },

    arrFromOptions() {
      let objFromMonth = this.reportsArr.find((a) => {
        return a.id === this.month;
      });

      let arr_of_costs = [];
      return objFromMonth.costsArr.filter((item) => {
        if (this.typeReport === "full") {
          return objFromMonth.costsArr;
        } else if (item.type === this.typeReport) {
          arr_of_costs.push(item);
          return arr_of_costs;
        }
      });
    },
  },

  methods: {
    changePeriodFunction(item) {
      this.$refs.changePeriod.selectedValue = item.value;
      this.$refs.changePeriod.selectedText = item.name;
      this.month = item.value;
    },

    changeTypeFunction(item) {
      this.$refs.changeTypeOfReport.selectedValue = item.value;
      this.$refs.changeTypeOfReport.selectedText = item.name;
      this.typeReport = item.value;
    },

    exportTable(tableID, filename = "") {
      let downloadLink;
      let dataType = "application/vnd.ms-excel";
      let tableSelect = document.getElementById(tableID);
      let tableHTML = tableSelect.outerHTML.replace(/ /g, "%20");

      // Specify file name
      filename = filename ? filename + ".xls" : "excel_data.xls";

      // Create download link element
      downloadLink = document.createElement("a");

      document.body.appendChild(downloadLink);

      if (navigator.msSaveOrOpenBlob) {
        let blob = new Blob(["\ufeff", tableHTML], {
          type: dataType,
        });
        navigator.msSaveOrOpenBlob(blob, filename);
      } else {
        // Create a link to the file
        downloadLink.href = "data:" + dataType + ", " + tableHTML;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
      }
    },
  },
};
</script>
