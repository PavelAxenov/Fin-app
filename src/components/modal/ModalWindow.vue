<template>
    <dialog :open="is_modal_open" :close="!is_modal_open" class="modal">
        <div class="modal__close-icon" @click="closeModal"></div>

        <input
            class="modal__title"
            type="text"
            maxlength="15"
            v-model="name_of_wallet"
        />
        <span class="modal__balance">{{ editObj.balance }} $</span>
        <input
            type="number"
            class="modal__sum"
            step="10"
            min="10"
            max="1000000"
            placeholder="Enter amount"
            v-model="input_sum"
        />
        <div class="btn-box">
            <button
                class="btn"
                :class="{ disabled: changeDisabledButton }"
                :disabled="changeDisabledButton"
                @click="withdrawMoney"
            >
                withdraw
            </button>
            <button class="btn" @click="topUpMoney">top up</button>
        </div>

        <Loader v-if="is_loader" />
    </dialog>

    <div @click="closeModal" class="black-layout"></div>
</template>

<script>
import Loader from "@/components/loader/Loader.vue";

export default {
    name: "Modal-component",

    emits: ["changeModalOpen", "changeWalletsArr"],

    components: {
        Loader,
    },

    props: {
        is_modal_open: {
            type: Boolean,
        },
        editObj: {
            type: Object,
        },
    },

    data() {
        return {
            is_loader: false,
            input_sum: null,
            name_of_wallet: this.editObj.name,
            data_for_change_wallet: {},
        };
    },

    methods: {
        closeModal() {
            this.$emit("changeModalOpen", !this.is_modal_open);
        },

        validateForm() {
            this.data_for_change_wallet.id = this.editObj.id;
            this.data_for_change_wallet.name = this.name_of_wallet;
            this.data_for_change_wallet.summ = this.input_sum;
        },

        withdrawMoney() {
            this.validateForm();
            this.data_for_change_wallet.summ =
                this.data_for_change_wallet.summ * -1;

            setTimeout(() => {
                this.$emit("changeWalletsArr", this.data_for_change_wallet);
                this.is_loader = false;
            }, 2000);

            this.is_loader = true;
        },

        topUpMoney() {
            this.validateForm();

            setTimeout(() => {
                this.$emit("changeWalletsArr", this.data_for_change_wallet);
                this.is_loader = false;
            }, 2000);

            this.is_loader = true;
        },
    },
};
</script>
