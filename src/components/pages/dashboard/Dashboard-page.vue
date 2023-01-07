<template>
    <div class="select-wallet">
        <SingleSelect
            ref="changeWallet"
            :options="optionsWallet"
            :dataArray="getWalletsArr"
            :changeFunction="changeWalletFunction"
        />
    </div>
    <section class="dashboard">
        <div class="grid-item dashboard__balance">
            <h1>Total Balance</h1>
            <strong>$ {{ data.select_wallet.balance }}</strong>
            <div class="dashboard__balance_btn">
                <button class="edit" @click="editWallet">Edit</button>
            </div>
        </div>

        <ChartBlock
            :chart_id="'report'"
            :settings_for_chart="data.reports"
            :is_grid_item="data.is_grid_item"
        />

        <div class="grid-item dashboard__transactions">
            <h1 class="mb-15">Latest Transactions</h1>
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
                                require(`../../../assets/images/transactions/${item.img_name}.svg`)
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

        <ChartBlock
            :chart_id="'spending'"
            :settings_for_chart="data.spending"
            :is_grid_item="data.is_grid_item"
        />
    </section>

    <ModalWindow
        v-if="data.is_modal_open"
        :is_modal_open="data.is_modal_open"
        @close-modal="closeModal"
    >
        <template v-slot:edit-wallet>
            <ModalEditWallet
                :editObj="data.select_wallet"
                @close-modal="closeModal"
                @update-wallets-arr="updateWalletsArr"
            />
        </template>
    </ModalWindow>
</template>

<script setup>
import ModalEditWallet from "@/components/helpers/modal/ModalEditWallet.vue";
import ModalWindow from "@/components/helpers/modal/ModalWindow.vue";
import ChartBlock from "@/components/blocks/chart_block/Chart-block.vue";
import SingleSelect from "@/components/helpers/single_select/SingleSelect.vue";
import { computed, ref, reactive, onBeforeMount } from "vue";
import { useStore } from "vuex";

const store = useStore();

const changeWallet = ref(null);

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

const data = reactive({
    is_grid_item: true,
    reports: null,
    spending: null,
    select_wallet: null,
    is_modal_open: false,
});

const getWalletsArr = computed(() => {
    return store.getters.getWalletsArr;
});

onBeforeMount(() => {
    data.select_wallet = getWalletsArr.value[0];
    data.reports = getWalletsArr.value[0].report_data;
    data.spending = getWalletsArr.value[0].spending_data;
});

const optionsWallet = computed(() => {
    return {
        disabled: false,
    };
});

function editWallet() {
    data.is_modal_open = true;
}

function closeModal(value) {
    data.is_modal_open = value;
}

function changeWalletFunction(item) {
    changeWallet.value.selectedValue = item.value;
    changeWallet.value.selectedText = item.name;

    data.select_wallet = getWalletsArr.value.find((a) => {
        return a.id === item.id;
    });

    data.reports = data.select_wallet.report_data;
    data.spending = data.select_wallet.spending_data;
}

function updateWalletsArr(updateObj) {
    store.commit("setWalletsArr", updateObj);
    data.is_modal_open = false;
}
</script>
