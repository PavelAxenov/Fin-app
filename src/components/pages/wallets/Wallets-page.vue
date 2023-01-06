<template>
    <div class="wallets-header">
        <h1 class="wallets-header__title">Wallets</h1>

        <div class="wallets-header__info">
            <span class="wallets-header__info-count">
                Total wallets: {{ getWalletsArr.length }}
            </span>
            <input
                type="text"
                placeholder="name of wallet"
                class="wallets-header__info-search"
                v-model="data.search_value"
            />
        </div>
    </div>

    <div class="wallets">
        <ul class="wallets__blocks">
            <WalletItem
                v-for="item in searchName"
                v-bind:key="item.id"
                :item="item"
                @edit-wallet="editWallet"
                @delete-wallet="deleteWallet"
            />
        </ul>
        <span v-if="getWalletsArr.length === 0">
            No wallets created yet.
            <br />
            You can create a wallet in Settings.
            <router-link to="/settings">
                <button class="create-wallet-btn">Create wallet</button>
            </router-link>
        </span>
    </div>

    <ModalWindow
        v-if="data.is_modal_open"
        :is_modal_open="data.is_modal_open"
        @close-modal="closeModal"
    >
        <template v-slot:edit-wallet>
            <ModalEditWallet
                v-if="data.edit_wallet"
                :editObj="data.editObj"
                @close-modal="closeModal"
                @update-wallets-arr="updateWalletsArr"
            />
        </template>
        <template v-slot:delete-wallet>
            <ModalDeleteWallet
                v-if="data.delete_wallet"
                :editObj="data.editObj"
                @close-modal="closeModal"
                @delete-wallet="deleteWalletConfirm"
                @cancel-delete="closeModal"
            />
        </template>
    </ModalWindow>
</template>

<script setup>
import ModalEditWallet from "@/components/helpers/modal/ModalEditWallet.vue";
import ModalDeleteWallet from "@/components/helpers/modal/ModalDeleteWallet.vue";
import ModalWindow from "@/components/helpers/modal/ModalWindow.vue";
import WalletItem from "@/components/pages/wallets/WalletItem.vue";

import { computed, reactive, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const data = reactive({
    is_modal_open: false,
    search_value: "",
    editObj: null,
    edit_wallet: false,
    delete_wallet: false,
    is_loader: false,
});

const getWalletsArr = computed(() => {
    return store.getters.getWalletsArr;
});

const searchName = computed(() => {
    return getWalletsArr.value.filter((item) => {
        return item.name.includes(data.search_value.toLowerCase());
    });
});

onMounted(() => {
    getWalletsArr.value.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
});

function closeModal(value) {
    data.is_modal_open = value;
}

function editWallet(item, value) {
    data.edit_wallet = true;
    data.editObj = item;
    data.is_modal_open = value;
}

function deleteWallet(item) {
    data.delete_wallet = true;
    data.editObj = item;
    data.is_modal_open = true;
}

function deleteWalletConfirm(id) {
    store.commit("setDeleteWallet", id);
    closeModal(false);
}

function updateWalletsArr(updateObj) {
    store.commit("setWalletsArr", updateObj);
    data.is_modal_open = false;
}
</script>
