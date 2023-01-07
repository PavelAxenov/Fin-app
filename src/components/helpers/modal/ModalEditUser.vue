<template>
    <input
        class="edit__input mb-20"
        type="text"
        placeholder="Enter new name"
        v-model="data.user_name"
    />
    <input
        class="edit__input"
        type="text"
        placeholder="Enter new login"
        v-model="data.user_login"
    />
    <input
        class="edit__input"
        type="password"
        placeholder="Enter new password"
        v-model="data.user_password"
    />
    <button class="edit__btn" @click="saveUserSettings">Save</button>

    <Loader v-if="data.is_loader" />
</template>

<script setup>
import Loader from "@/components/helpers/loader/Loader.vue";

import { reactive } from "vue";
import { useStore } from "vuex";

const store = useStore();
const emit = defineEmits(["close-modal"]);

const props = defineProps({
    is_modal_open: Boolean,
});

const data = reactive({
    is_loader: false,
    user_name: "",
    user_login: "",
    user_password: "",
});

function validate() {
    if (data.user_name === "") {
        return false;
    } else if (data.user_login === "") {
        return false;
    } else if (data.user_password === "") {
        return false;
    } else {
        return true;
    }
}

function saveUserSettings() {
    if (validate()) {
        const userObj = {
            name: data.user_name,
            login: data.user_login,
            password: data.user_password,
        };

        store.commit("setUserInfo", userObj);

        setTimeout(() => {
            store.commit("setUserInfo", userObj);
            closeModal();
            data.user_name = "";
            data.user_login = "";
            data.user_password = "";
            data.is_loader = false;
        }, 2000);

        data.is_loader = true;
    } else {
        alert("Ошибка заполнения формы");
    }
}

function closeModal() {
    emit("close-modal", !props.is_modal_open);
}
</script>
