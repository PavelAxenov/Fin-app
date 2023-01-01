<template>
    <div class="reports-header">
        <h1 class="reports-header__title">Reports</h1>
        <ExportBotton :options="optionsForExport" />

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

<script setup>
import SingleSelect from "@/components/helpers/single_select/SingleSelect.vue";
import ExportBotton from "@/components/helpers/export_botton/ExportBotton.vue";

import { computed, reactive, ref } from "vue";

const data = reactive({
    typeReport: "full",
    month: "junuary",
    spending: {
        type: "line",
        labels: ["Personal", "Shopping", "Phone", "Other"],
        dataSets: [
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
    },
});

const changeTypeOfReport = ref(null);
const changePeriod = ref(null);

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

const optionsForExport = computed(() => {
    return {
        title: "Export report",
        id: "export-report-table",
    };
});

const optionsPeriod = computed(() => {
    return {
        disabled: false,
    };
});

const optionsType = computed(() => {
    return {
        disabled: false,
    };
});

const arrFromOptions = computed(() => {
    let objFromMonth = reportsArr.find((a) => {
        return a.id === data.month;
    });

    let arr_of_costs = [];
    return objFromMonth.costsArr.filter((item) => {
        if (data.typeReport === "full") {
            return objFromMonth.costsArr;
        } else if (item.type === data.typeReport) {
            arr_of_costs.push(item);
            return arr_of_costs;
        }
    });
});

function changePeriodFunction(item) {
    changePeriod.value.selectedValue = item.value;
    changePeriod.value.selectedText = item.name;
    data.month = item.value;
}

function changeTypeFunction(item) {
    changeTypeOfReport.value.selectedValue = item.value;
    changeTypeOfReport.value.selectedText = item.name;
    data.typeReport = item.value;
}
</script>
