<!--
props -> options [object]
placeholder: [string] - text of placeholder,
classes: [string] - classes for parent div

props -> dataArray
ordered array of data objects with params:
  name: option text (!)
  value: option value (!)
  checked: is selected
  disabled: makes option not clickable

props -> changeFunction
Callback function when option selecting changes by user
-->

<template>
    <div class="select-box" :class="props.options.classes">
        <button
            ref="buttonRef"
            type="button"
            class="select-box__btn"
            :class="{ disabled: data.disabled }"
            @click="toggleMenu()"
        >
            <div class="arrow mr-0 arrow-top"></div>

            <p
                class="text-elepsis"
                :class="{ 'placeholder-select': !data.selectedValue }"
            >
                {{ displayText }}
            </p>
        </button>
        <div ref="dropdownRef" v-show="dropdown" class="select-box__drop mt-5">
            <ul class="select-box__drop_list">
                <li
                    v-for="(item, index) in data.dataSet"
                    v-bind:key="index"
                    v-show="!item.hidden"
                    class="select-box__drop_list--item"
                    :class="{
                        selected: item.checked,
                    }"
                    @click="selectItem(item)"
                >
                    <label
                        data-type="radio"
                        :class="{ disabled: item.disabled }"
                    >
                        {{ item.name }}
                    </label>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { computed, reactive, ref, onBeforeUnmount, onBeforeMount } from "vue";

const props = defineProps({
    options: Object,
    dataArray: Array,
    changeFunction: Function,
});

const data = reactive({
    disabled: false,
    opened: false,
    dataSet: [],
    selectedValue: null,
    selectedText: "",
});

onBeforeMount(() => {
    if (props.options.disabled) {
        data.disabled = true;
    }

    reset();
    window.addEventListener("click", clickOutside);
});

onBeforeUnmount(() => {
    window.removeEventListener("click", clickOutside);
});

const displayText = computed(() => {
    {
        let result;
        if (data.selectedValue) {
            result = data.selectedText;
        } else {
            result = props.options.placeholder || "";
        }
        return result;
    }
});

const dropdown = computed(() => {
    return !data.disabled && data.opened;
});

function reset() {
    data.dataSet = [];

    for (let i = 0, j = props.dataArray.length; i < j; i++) {
        data.dataSet.push(props.dataArray[i]);
        if (props.dataArray[i].checked) {
            data.selectedValue = props.dataArray[i].value;
            data.selectedText = props.dataArray[i].name;
        }
    }
}
const dropdownRef = ref(null);
const buttonRef = ref(null);
/**
 * Клик вне меню
 */
function clickOutside(e) {
    if (!data.opened || !e) {
        return;
    }

    let $target = e.target,
        $dropdown = dropdownRef,
        $button = buttonRef;

    if (
        !$dropdown.value.contains($target) &&
        !$button.value.contains($target)
    ) {
        data.opened = false;
    }
}

function toggleMenu() {
    if (data.disabled) {
        return;
    }

    data.opened = !data.opened;
}

function selectItem(item, force = false) {
    if (item.disabled && !force) {
        return;
    }

    if (item.checked) {
        data.opened = false;
        return;
    }

    for (let i = 0, j = data.dataSet.length; i < j; i++) {
        if (data.dataSet[i].checked) {
            data.dataSet[i].checked = false;
        }
        if (data.dataSet[i].value === item.value) {
            data.dataSet[i].checked = true;
        }
    }

    data.selectedValue = item.value;
    data.selectedText = item.name;

    data.opened = false;
    props.changeFunction(item);
}
</script>
