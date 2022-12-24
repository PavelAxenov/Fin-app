export default {
    state: {
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
    },
    getters: {
        getWalletsArr(state) {
            return state.walletsArr;
        },
    },
    mutations: {
        setWalletsArr(state, updateObj) {
            let obj_for_update = state.walletsArr.find((a) => {
                return a.id === updateObj.id;
            });
            obj_for_update.name = updateObj.name;
            obj_for_update.balance = obj_for_update.balance + updateObj.summ;
            obj_for_update.last_transac = updateObj.summ;
        },
        setDeleteWallet(state, id) {
            state.walletsArr.find((a) => {
                if (a.id === id) {
                    let index = state.walletsArr.indexOf(a);
                    state.walletsArr.splice(index, 1);
                    return state.walletsArr;
                }
            });
        },
    },
    actions: {},
};
