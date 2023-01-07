<template>
    <div class="container autorization">
        <img
            class="autorization__logo"
            src="../../../assets/images/logo.svg"
            alt="logo"
        />
        <div class="autorization__form">
            <input
                type="text"
                name="login"
                id="login"
                class="mb-20 input"
                placeholder="Enter your login"
                v-model="data.user_login"
            />
            <input
                type="password"
                name="password"
                id="password"
                class="mb-20 input"
                placeholder="Enter your password"
                v-model="data.user_password"
            />
            <p class="autorization__form-question mb-20">
                Don't have an account?
                <a href="#" @click="openRegisterWindow">Register</a>
            </p>
            <Button label="Sign in" color="success" @click="signIn" rounded />
        </div>
    </div>
    <Loader v-if="data.is_loader" />
</template>

<script setup>
import Button from "@/components/ui/button/Button-ui.vue";
import Loader from "@/components/helpers/loader/Loader.vue";
import { useStore } from "vuex";
import { reactive } from "vue";

const store = useStore();

const data = reactive({
    user_password: "",
    user_login: "",
    user_name: "",
    is_loader: false,
});

function openRegisterWindow() {
    store.commit("setAutoriseStatus", false);
    store.commit("setRegisterStatus", true);
}

function signIn() {
    const user_info_obj = {
        name: "UserName",
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
