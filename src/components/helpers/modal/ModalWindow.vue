<template>
    <dialog
        :open="props.is_modal_open"
        :close="!props.is_modal_open"
        class="modal"
    >
        <div class="modal__close-icon" @click="closeModal"></div>

        <slot name="edit-wallet"></slot>
        <slot name="edit-user"></slot>
    </dialog>

    <div @click="closeModal" class="black-layout"></div>
</template>

<script setup>
const props = defineProps({
    is_modal_open: Boolean,
});
const emit = defineEmits(["close-modal"]);

function closeModal() {
    emit("close-modal", !props.is_modal_open);
}
</script>
