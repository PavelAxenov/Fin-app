<template>
    <li class="wallets-content__blocks-item">
        <div class="item-info">
            <span class="item-info__name">{{ props.item.name }}</span>
            <span class="item-info__balance">{{ props.item.balance }} $</span>
            <span
                v-if="props.item.last_transac > 0"
                class="item-info__transfer--green"
            >
                +{{ props.item.last_transac }} $
            </span>

            <span v-else class="item-info__transfer--red">
                {{ props.item.last_transac }} $
            </span>
        </div>
        <div class="item-settings">
            <img
                class="item-settings--img w-15"
                src="../../../assets/images/wallets/edit.svg"
                alt="edit"
                @click="editWallet(props.item)"
            />
            <img
                class="item-settings--img w-15"
                src="../../../assets/images/wallets/delete.svg"
                alt="delete"
                @click="deleteWallet(props.item)"
            />
        </div>
    </li>
</template>

<script setup>
const emit = defineEmits(["edit-wallet", "delete-wallet"]);

const props = defineProps({
    item: Object,
});

function editWallet(item) {
    emit("edit-wallet", item, true);
}

function deleteWallet(item) {
    emit("delete-wallet", item);
}
</script>
