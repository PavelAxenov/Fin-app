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

        <ChartItem :chart_id="'report'" />

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
                            :src="
                                require(`../../assets/images/transactions/${item.img_name}.svg`)
                            "
                            :alt="item.img_name"
                        />
                        <p class="payments__item-category">
                            {{ item.category }}
                        </p>
                    </div>

                    <p v-if="item.sum > 0" class="payments__item-sum">
                        +{{ item.sum }}$
                    </p>
                    <p v-else class="payments__item-sum">{{ item.sum }}$</p>
                </div>
            </div>
        </div>

        <ChartItem :chart_id="'spending'" />
    </section>
</template>

<script>
import ChartItem from "@/components/chart/ChartItem.vue";

export default {
    name: "Dashboard-component",

    components: {
        ChartItem,
    },

    data() {
        return {};
    },

    setup() {
        const transactions_list = [
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
        ];

        return { transactions_list };
    },
};
</script>
