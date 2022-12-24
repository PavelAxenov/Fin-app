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
                v-model="search"
            />
        </div>
    </div>

    <div class="wallets">
        <ul class="wallets__blocks">
            <li
                v-for="item in searchName"
                v-bind:key="item.id"
                class="wallets__blocks-item"
            >
                <div class="item-info">
                    <span class="item-info__name">{{ item.name }}</span>
                    <span class="item-info__balance">{{ item.balance }} $</span>
                    <span
                        v-if="item.last_transac > 0"
                        class="item-info__transfer--green"
                    >
                        +{{ item.last_transac }} $
                    </span>

                    <span v-else class="item-info__transfer--red">
                        {{ item.last_transac }} $
                    </span>
                </div>
                <div class="item-settings">
                    <img
                        class="item-settings--edit"
                        src="../../assets/images/wallets/edit.svg"
                        alt="edit"
                        @click="editWallet(item)"
                    />
                    <img
                        class="item-settings--delete"
                        src="../../assets/images/wallets/delete.svg"
                        alt="delete"
                        @click="deleteWallet(item)"
                    />
                </div>
            </li>
        </ul>
        <span v-if="getWalletsArr.length === 0">
            No wallets created yet.
            <br />
            You can create a wallet in Settings.
            <router-link to="/settings">
                <button>Create wallet</button>
            </router-link>
        </span>
    </div>

    <ModalWindow
        v-if="is_modal_open"
        :is_modal_open="is_modal_open"
        :editObj="editObj"
        @changeModalOpen="changeModalOpen"
        @changeWalletsArr="changeWalletsArr"
    />
</template>

<script>
import ModalWindow from "@/components/modal/ModalWindow.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
    name: "Wallets-component",

    components: {
        ModalWindow,
    },

    data() {
        return {
            is_modal_open: false,
            search: "",
            editObj: null,
        };
    },

    computed: {
        ...mapGetters(["getWalletsArr"]),

        searchName() {
            return this.getWalletsArr.filter((item) => {
                return item.name.includes(this.search.toLowerCase());
            });
        },
    },

    created() {
        this.getWalletsArr.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    },

    methods: {
        ...mapMutations(["setWalletsArr", "setDeleteWallet"]),

        changeModalOpen(value) {
            this.is_modal_open = value;
        },

        editWallet(item) {
            this.editObj = item;
            this.is_modal_open = true;
        },

        deleteWallet(item) {
            this.setDeleteWallet(item.id);
        },

        changeWalletsArr(updateObj) {
            this.setWalletsArr(updateObj);
            this.is_modal_open = false;
        },
    },
};
</script>
