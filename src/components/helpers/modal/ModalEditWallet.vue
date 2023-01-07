<template>
    <input
        class="w-270 mb-15"
        type="text"
        maxlength="15"
        v-model="data.name_of_wallet"
    />
    <span class="modal__balance">{{ props.editObj.balance }} $</span>
    <input
        type="number"
        class="w-270 mb-15 mt-15"
        step="10"
        min="10"
        max="1000000"
        placeholder="Enter amount"
        v-model="data.input_sum"
    />
    <div class="btn-box">
        <Button
            label="Withdraw"
            color="info"
            @click="withdrawMoney"
            rounded
            outlined
            :disabled="props.editObj.balance === 0"
        />
        <Button label="Top up" color="info" @click="topUpMoney" rounded />
    </div>

    <Loader v-if="data.is_loader" />
</template>

<script setup>
import Button from "@/components/ui/button/Button-ui.vue";
import Loader from "@/components/helpers/loader/Loader.vue";
import { reactive } from "vue";

const props = defineProps({
    editObj: Object,
});

const emit = defineEmits(["update-wallets-arr"]);

const data = reactive({
    is_loader: false,
    input_sum: null,
    name_of_wallet: props.editObj.name,
    data_for_change_wallet: {},
});

function validateForm() {
    data.data_for_change_wallet.id = props.editObj.id;
    data.data_for_change_wallet.name = data.name_of_wallet;
    data.data_for_change_wallet.summ = data.input_sum;
}

function withdrawMoney() {
    validateForm();
    data.data_for_change_wallet.summ = data.data_for_change_wallet.summ * -1;

    setTimeout(() => {
        emit("update-wallets-arr", data.data_for_change_wallet);
        data.is_loader = false;
    }, 2000);

    data.is_loader = true;
}

function topUpMoney() {
    validateForm();

    setTimeout(() => {
        emit("update-wallets-arr", data.data_for_change_wallet);
        data.is_loader = false;
    }, 2000);

    data.is_loader = true;
}
</script>
