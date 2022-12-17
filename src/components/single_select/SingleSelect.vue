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
  <div class="select-box" :class="options.classes">
    <button
      ref="button"
      type="button"
      class="select-box__btn"
      :class="{ disabled: disabled }"
      @click="toggleMenu()"
    >
      <div class="arrow arrow-top"></div>

      <p class="text-elepsis" :class="{ 'placeholder-select': !selectedValue }">
        {{ displayText }}
      </p>
    </button>
    <div ref="dropdown" v-show="dropdown" class="select-box__drop">
      <ul class="select-box__drop_list">
        <li
          v-for="(item, index) in dataSet"
          v-bind:key="index"
          v-show="!item.hidden"
          class="select-box__drop_list--item"
          :class="{
            selected: item.checked,
          }"
          @click="selectItem(item)"
        >
          <label data-type="radio" :class="{ disabled: item.disabled }">
            {{ item.name }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleSelect",

  props: {
    options: {
      type: Object,
    },
    dataArray: {
      type: Array,
    },
    changeFunction: {
      type: Function,
    },
  },

  data() {
    return {
      disabled: false,
      opened: false,
      dataSet: [],
      selectedValue: null,
      selectedText: "",
    };
  },

  created() {
    if (this.options.disabled) {
      this.disabled = true;
    }

    this.reset();
    window.addEventListener("click", this.clickOutside);
  },

  beforeUnmount() {
    window.removeEventListener("click", this.clickOutside);
  },

  computed: {
    displayText() {
      let result;
      if (this.selectedValue) {
        result = this.selectedText;
      } else {
        result = this.options.placeholder || "";
      }
      return result;
    },

    dropdown() {
      return !this.disabled && this.opened;
    },
  },

  methods: {
    reset() {
      this.dataSet = [];

      for (let i = 0, j = this.dataArray.length; i < j; i++) {
        this.dataSet.push(this.dataArray[i]);
        if (this.dataArray[i].checked) {
          this.selectedValue = this.dataArray[i].value;
          this.selectedText = this.dataArray[i].name;
        }
      }
    },

    /**
     * Клик вне меню
     */
    clickOutside(e) {
      if (!this.opened || !e) {
        return;
      }

      let $target = e.target,
        $dropdown = this.$refs.dropdown,
        $button = this.$refs.button;

      if (!$dropdown.contains($target) && !$button.contains($target)) {
        this.opened = false;
      }
    },

    toggleMenu() {
      if (this.disabled) {
        return;
      }

      this.opened = !this.opened;
    },

    selectItem(item, force = false) {
      if (item.disabled && !force) {
        return;
      }

      if (item.checked) {
        this.opened = false;
        return;
      }

      for (let i = 0, j = this.dataSet.length; i < j; i++) {
        if (this.dataSet[i].checked) {
          this.dataSet[i].checked = false;
        }
        if (this.dataSet[i].value === item.value) {
          this.dataSet[i].checked = true;
        }
      }

      this.selectedValue = item.value;
      this.selectedText = item.name;

      this.opened = false;
      this.changeFunction(item);
    },

    selectItemByIndex(index) {
      this.selectItem(this.dataSet[index], true);
    },

    enable() {
      this.disabled = false;
    },

    disable() {
      this.disabled = true;
      this.opened = false;
    },
  },
};
</script>
