<template>
  <div class="reports-header">
    <h1 class="reports-header__title">Reports</h1>
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

  <!-- <table class="reports">
    <thead class="reports__head">
      <tr>
        <th>place</th>
        <th>category</th>
        <th>income</th>
        <th>costs</th>
        <th>date</th>
      </tr>
    </thead>
    <tbody class="reports__body">
      <tr>
        <td>Пятерочка</td>
        <td>products and service</td>
        <td></td>
        <td>-800p</td>
        <td>20.05.2026</td>
      </tr>
      <tr>
        <td>Пятерочка</td>
        <td>debit</td>
        <td></td>
        <td>-800p</td>
        <td>21.05.2026</td>
      </tr>
      <tr>
        <td>Пятерочка</td>
        <td>transfer</td>
        <td></td>
        <td>+1800p</td>
        <td>22.05.2026</td>
      </tr>
    </tbody>
  </table> -->
</template>

<script>
import SingleSelect from "@/components/single_select/SingleSelect.vue";

export default {
  name: "Reports-component",

  components: {
    SingleSelect,
  },

  data() {
    return {
      periodsReport: [
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
      ],

      typesReport: [
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
      ],
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
  },

  methods: {
    changePeriodFunction(item) {
      this.$refs.changePeriod.selectedValue = item.value;
      this.$refs.changePeriod.selectedText = item.name;
    },

    changeTypeFunction(item) {
      this.$refs.changeTypeOfReport.selectedValue = item.value;
      this.$refs.changeTypeOfReport.selectedText = item.name;
    },
  },
};
</script>
