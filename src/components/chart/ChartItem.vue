<template>
    <div :class="`grid-item dashboard__${chart_id}`">
        <canvas :id="chart_id"></canvas>
    </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
    name: "ChartItem-component",

    props: {
        chart_id: {
            type: String,
        },
    },

    mounted() {
        if (this.chart_id === "report") {
            this.renderReportChart();
        } else if (this.chart_id === "spending") {
            this.renderSpendingChart();
        }
    },

    methods: {
        renderReportChart() {
            new Chart(this.chart_id, {
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
            new Chart(this.chart_id, {
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
