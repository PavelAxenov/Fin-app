<template>
    <div class="container registration">
        <img
            class="registration__logo"
            src="../../../assets/images/logo.svg"
            alt="logo"
        />
        <div class="registration__form">
            <input
                type="text"
                name="login"
                id="login"
                minlength="3"
                class="registration__form-input"
                placeholder="Enter your name"
                v-model="data.user_name"
            />
            <input
                type="text"
                name="login"
                id="login"
                minlength="5"
                class="registration__form-input"
                placeholder="Enter your login"
                v-model="data.user_login"
            />
            <input
                type="password"
                name="password"
                id="password"
                minlength="6"
                class="registration__form-input"
                placeholder="Enter your password"
                v-model="data.user_password"
            />
            <p class="registration__form-question">
                Already have an account?
                <a href="#" @click="openAutorizeWindow">Autorize</a>
            </p>

            <button class="registration__form-btn" @click="registration">
                Registration
            </button>
        </div>
    </div>
    <Loader v-if="data.is_loader" />
</template>

<script setup>
import Loader from "@/components/helpers/loader/Loader.vue";

import { reactive } from "vue";
import { useStore } from "vuex";

const store = useStore();

const data = reactive({
    user_password: "",
    user_login: "",
    user_name: "",
    is_loader: false,
});

function openAutorizeWindow() {
    store.commit("setAutoriseStatus", true);
    store.commit("setRegisterStatus", false);
}

function registration() {
    const user_info_obj = {
        name: data.user_name,
        login: data.user_login,
        password: data.user_password,
    };
    data.is_loader = true;

    setTimeout(() => {
        store.commit("setUserInfo", user_info_obj);
        data.is_loader = false;
        store.commit("setRegisterStatus", false);
        store.commit("setAutoriseStatus", false);
    }, 2000);
}
</script>
