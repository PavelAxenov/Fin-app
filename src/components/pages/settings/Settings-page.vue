<template>
    <div class="settings-header">
        <h1 class="settings-header__title">Settings</h1>
        <button class="settings-header__btn" @click="editUserSettings">
            Edit
        </button>
    </div>
    <div class="settings-content">
        <h2>User settings</h2>
        <div class="user-info">
            <span><strong>User name:</strong> {{ getUserInfo.name }} </span>
            <span><strong>Login:</strong> {{ getUserInfo.login }}</span>

            <div class="password">
                <span v-if="!data.is_password_show">
                    <strong>Password:</strong>
                    {{ data.hidden_pass }}
                </span>

                <span v-else>
                    <strong>Password:</strong>
                    {{ getUserInfo.password }}
                </span>

                <img
                    v-if="!data.is_password_show"
                    src="../../../assets/images/edit_user/eye_show.svg"
                    alt="eye_hide"
                    class="eye"
                    @click="changeViewPassword"
                />
                <img
                    v-else
                    src="../../../assets/images/edit_user/eye_hide.svg"
                    alt="eye_hide"
                    class="eye"
                    @click="changeViewPassword"
                />
            </div>
        </div>

        <h2>Open an account</h2>
        <div class="create-account">
            <input
                type="text"
                name="create-account"
                placeholder="Enter account name"
                required
                maxlength="15"
                class="input wallet-name"
                v-model="data.new_wallet_name"
            />
            <SingleSelect
                ref="tariffsList"
                :options="optionsTarifs"
                :dataArray="getTariffs"
                :changeFunction="changeTariffFunction"
            />
            <SingleSelect
                ref="currencyList"
                :options="optionsCurrency"
                :dataArray="getCurrency"
                :changeFunction="changeCurrencyFunction"
            />
            <button class="btn-submit" @click="createNewWallet">Create</button>
        </div>

        <details class="details">
            <summary>Show account details</summary>
            <ul class="details__list">
                <li class="details__list-item">
                    Owner: {{ getUserInfo.name }}
                </li>
                <li class="details__list-item">Bank BIC: 123456789</li>
                <li class="details__list-item">
                    Account number: 1234567890123456789
                </li>
                <li class="details__list-item">Bank: BankName</li>
                <li class="details__list-item">SWIFT-code: CODFORSWIFT</li>
                <li class="details__list-item">Currency: dollar</li>
            </ul>
        </details>
    </div>

    <ModalWindow
        v-if="data.is_modal_open"
        :is_modal_open="data.is_modal_open"
        @close-modal="closeModal"
    >
        <template v-slot:edit-user>
            <ModalEditUser
                @close-modal="closeModal"
                :is_modal_open="data.is_modal_open"
            />
        </template>
    </ModalWindow>
</template>

<script setup>
import SingleSelect from "@/components/helpers/single_select/SingleSelect.vue";
import ModalEditUser from "@/components/helpers/modal/ModalEditUser.vue";
import ModalWindow from "@/components/helpers/modal/ModalWindow.vue";
import { computed, ref, reactive, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const tariffsList = ref(null);
const currencyList = ref(null);
const data = reactive({
    new_wallet_name: "",
    is_modal_open: false,
    hidden_pass: "",
    is_password_show: false,
});

const getCurrency = computed(() => {
    return store.getters.getCurrency;
});
const getUserInfo = computed(() => {
    return store.getters.getUserInfo;
});
const getTariffs = computed(() => {
    return store.getters.getTariffs;
});
const optionsTarifs = computed(() => {
    if (getTariffs.value.length) {
        return {
            disabled: false,
        };
    } else {
        return {
            disabled: true,
        };
    }
});
const optionsCurrency = computed(() => {
    if (getTariffs.value.length) {
        return {
            disabled: false,
        };
    } else {
        return {
            disabled: true,
        };
    }
});

onMounted(() => {
    encryptionPassword();
});

function encryptionPassword() {
    let password_arr = getUserInfo.value.password.split("");

    for (let i = 0; i < password_arr.length; i++) {
        password_arr[i] = "*";
    }
    data.hidden_pass = password_arr.join("");
}
function changeViewPassword() {
    data.is_password_show = !data.is_password_show;
}
function closeModal(value) {
    data.is_modal_open = value;
}
function changeTariffFunction(item) {
    tariffsList.value.selectedValue = item.id;
    tariffsList.value.selectedText = item.name;
}
function changeCurrencyFunction(item) {
    currencyList.value.selectedValue = item.id;
    currencyList.value.selectedText = item.name;
}
function validateForm() {
    if (data.new_wallet_name === "") {
        alert("Неправильное название");
        return false;
    }
    return true;
}
function createNewWallet() {
    if (validateForm()) {
        let walletInfo = {
            id: Math.random(100) * 10000,
            value: `${data.new_wallet_name}`,
            name: data.new_wallet_name,
            balance: 0,
            last_transac: 0,
            checked: false,
            currency: currencyList.value.selectedValue,
            tariff: tariffsList.value.selectedValue,
        };
        store.commit("createNewWallet", walletInfo);
        data.new_wallet_name = "";

        alert("Счет успешно создан");
    }
}
function editUserSettings() {
    data.is_modal_open = true;
}
</script>
