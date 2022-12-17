<template>
  <div class="wallets-header">
    <h1 class="wallets-header__title">Wallets</h1>

    <div class="wallets-header__info">
      <span class="wallets-header__info-count">
        Total wallets: {{ walletsArr.length }}
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
          <span v-if="item.last_transac > 0" class="item-info__transfer--green">
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
          />
          <img
            class="item-settings--delete"
            src="../../assets/images/wallets/delete.svg"
            alt="delete"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Wallets-component",

  components: {},

  data() {
    return {
      search: "",
      walletsArr: [
        {
          id: 1,
          name: "wallet 1",
          balance: 4500,
          last_transac: 10,
        },
        {
          id: 2,
          name: "wallet 2",
          balance: 5500,
          last_transac: 50,
        },
        {
          id: 3,
          name: "wallet 3",
          balance: 4000,
          last_transac: -10,
        },
        {
          id: 4,
          name: "wallet 4",
          balance: 6000,
          last_transac: -10,
        },
        {
          id: 5,
          name: "wallet 5",
          balance: 5500,
          last_transac: 60,
        },
      ],
    };
  },

  computed: {
    searchName() {
      return this.walletsArr.filter((item) => {
        return item.name.includes(this.search.toLowerCase());
      });
    },
  },

  created() {
    this.walletsArr.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  },
  mounted() {},

  methods: {},
};
</script>
