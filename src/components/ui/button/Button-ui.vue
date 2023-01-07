<template>
    <button
        :class="[
            'btn',
            `btn_${props.color}`,
            { btn_rounded: props.rounded },
            { btn_outlined: props.outlined },
            { btn_large: props.size === 'large' },
            { btn_small: props.size === 'small' },
        ]"
        :disabled="disabled"
        @click="clickOnButton"
    >
        {{ props.label }}
    </button>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        default: "Button",
    },
    color: {
        type: String,
        default: "primary",
    },
    disabled: {
        type: Boolean,
        required: false,
    },
    rounded: {
        type: Boolean,
        required: false,
    },
    outlined: {
        type: Boolean,
        required: false,
    },
    size: {
        type: String,
        default: "normal",
    },
});
const emit = defineEmits(["click"]);
const clickOnButton = () => {
    emit("click");
};
</script>
