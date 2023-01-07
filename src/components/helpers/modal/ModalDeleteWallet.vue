<template>
    <div class="delete">
        <p class="mb-15">
            Are you sure you want to delete your wallet "{{
                props.editObj.name
            }}"?
        </p>
        <button class="delete__btn mr-15" @click="deleteWallet">Delete</button>
        <button class="delete__btn mr-15" @click="cancelDeleteWallet">
            Cancel
        </button>
    </div>
    <Loader v-if="data.is_loader" />
</template>

<script setup>
import Loader from "@/components/helpers/loader/Loader.vue";
import { reactive } from "vue";

const props = defineProps({
    editObj: Object,
});

const data = reactive({
    is_loader: false,
});

const emit = defineEmits(["delete-wallet", "cancel-delete"]);

function deleteWallet() {
    setTimeout(() => {
        data.is_loader = false;
        emit("delete-wallet", props.editObj.id);
    }, 2000);

    data.is_loader = true;
}

function cancelDeleteWallet() {
    emit("cancel-delete", false);
}
</script>
