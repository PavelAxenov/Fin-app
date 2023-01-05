<template>
    <div class="chart" :class="{ 'grid-item': props.is_grid_item }">
        <canvas :id="props.chart_id"></canvas>
    </div>
</template>

<script setup>
import Chart from "chart.js/auto";
import { onMounted, onUpdated, reactive } from "vue";

const props = defineProps({
    chart_id: String,
    settings_for_chart: Object,
    is_grid_item: Boolean,
});

const data = reactive({
    myChart: null,
});

onMounted(() => {
    renderChart(props.settings_for_chart, props.chart_id);
});

onUpdated(() => {
    data.myChart.destroy();
    renderChart(props.settings_for_chart, props.chart_id);
});

function renderChart(params, chart_id) {
    data.myChart = new Chart(chart_id, {
        type: params.type,

        data: {
            labels: params.labels,
            datasets: params.dataSets,
        },
        options: params.options,
    });
}
</script>
