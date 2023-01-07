import Vuex from "vuex";

export default new Vuex.Store({
    modules: {},

    state: {
        isAutorise: false,
        isRegister: false,
        isMenuOpen: false,
        walletsArr: [
            {
                id: 1,
                name: "wallet 1",
                value: "1",
                balance: 4500,
                last_transac: 10,
                checked: true,
                report_data: {
                    type: "bar",
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    dataSets: [
                        {
                            label: "Benefit",
                            data: [2000, 500, 1000, 1900, 800, 1250],
                            backgroundColor: [
                                "rgb(255, 99, 132)",
                                "rgb(54, 162, 235)",
                                "rgb(255, 205, 86)",
                                "rgb(28, 117, 219)",
                                "rgb(28, 219, 69)",
                                "rgb(111, 28, 219)",
                            ],
                        },
                        {
                            label: "Spending",
                            data: [1000, 700, 1300, 1700, 950, 1300],
                            backgroundColor: [
                                "rgba(255, 99, 132, 0.5)",
                                "rgba(54, 162, 235, 0.5)",
                                "rgba(255, 205, 86, 0.5)",
                                "rgba(28, 117, 219, 0.5)",
                                "rgba(28, 219, 69, 0.5)",
                                "rgba(111, 28, 219, 0.5)",
                            ],
                        },
                    ],
                    options: {
                        plugins: {
                            title: {
                                display: true,
                                text: "Report",
                                padding: {
                                    top: 10,
                                    bottom: 15,
                                },
                                color: "#000",
                                font: {
                                    weight: "bold",
                                    size: 20,
                                },
                                fullSize: true,
                            },
                            legend: {
                                display: false, // легенда графика
                                position: "bottom",
                            },
                        },
                    },
                },
                spending_data: {
                    type: "pie",
                    labels: ["Personal", "Shopping", "Phone", "Other"],
                    dataSets: [
                        {
                            label: "My First Dataset",
                            data: [2000, 500, 1000, 1700],
                            backgroundColor: [
                                "rgb(255, 99, 132)",
                                "rgb(54, 162, 235)",
                                "rgb(255, 205, 86)",
                                "rgb(28, 117, 219)",
                            ],
                            hoverOffset: 4,
                        },
                    ],
                    options: {
                        cutout: 100,
                        scales: {
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                        },
                        plugins: {
                            title: {
                                display: true,
                                text: "Spending this month",
                                padding: {
                                    top: 10,
                                    bottom: 15,
                                },
                                color: "#000",
                                font: {
                                    weight: "bold",
                                    size: 20,
                                },
                                fullSize: true,
                            },
                            legend: {
                                display: true, // легенда графика
                                position: "bottom",
                            },
                            tooltips: {
                                cornerRadius: 0,
                                caretSize: 0,
                                xPadding: 16,
                                yPadding: 10,
                                backgroundColor: "rgba(0, 150, 100, 0.9)",
                                titleFontStyle: "normal",
                                titleMarginBottom: 15,
                            },
                        },
                    },
                },
            },
            {
                id: 2,
                name: "wallet 2",
                value: "2",
                balance: 5500,
                last_transac: 50,
                checked: false,
                report_data: {
                    type: "bar",
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    dataSets: [
                        {
                            label: "Benefit",
                            data: [1000, 1500, 11000, 11900, 810, 1150],
                            backgroundColor: [
                                "rgb(255, 99, 132)",
                                "rgb(54, 162, 235)",
                                "rgb(255, 205, 86)",
                                "rgb(28, 117, 219)",
                                "rgb(28, 219, 69)",
                                "rgb(111, 28, 219)",
                            ],
                        },
                        {
                            label: "Spending",
                            data: [1000, 700, 1300, 1700, 950, 1300],
                            backgroundColor: [
                                "rgba(255, 99, 132, 0.5)",
                                "rgba(54, 162, 235, 0.5)",
                                "rgba(255, 205, 86, 0.5)",
                                "rgba(28, 117, 219, 0.5)",
                                "rgba(28, 219, 69, 0.5)",
                                "rgba(111, 28, 219, 0.5)",
                            ],
                        },
                    ],
                    options: {
                        plugins: {
                            title: {
                                display: true,
                                text: "Report",
                                padding: {
                                    top: 10,
                                    bottom: 15,
                                },
                                color: "#000",
                                font: {
                                    weight: "bold",
                                    size: 20,
                                },
                                fullSize: true,
                            },
                            legend: {
                                display: false, // легенда графика
                                position: "bottom",
                            },
                        },
                    },
                },
                spending_data: {
                    type: "pie",
                    labels: ["Personal", "Shopping", "Phone", "Other"],
                    dataSets: [
                        {
                            label: "My First Dataset",
                            data: [2000, 500, 1000, 1700],
                            backgroundColor: [
                                "rgb(255, 99, 132)",
                                "rgb(54, 162, 235)",
                                "rgb(255, 205, 86)",
                                "rgb(28, 117, 219)",
                            ],
                            hoverOffset: 4,
                        },
                    ],
                    options: {
                        cutout: 100,
                        scales: {
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                        },
                        plugins: {
                            title: {
                                display: true,
                                text: "Spending this month",
                                padding: {
                                    top: 10,
                                    bottom: 15,
                                },
                                color: "#000",
                                font: {
                                    weight: "bold",
                                    size: 20,
                                },
                                fullSize: true,
                            },
                            legend: {
                                display: true, // легенда графика
                                position: "bottom",
                            },
                            tooltips: {
                                cornerRadius: 0,
                                caretSize: 0,
                                xPadding: 16,
                                yPadding: 10,
                                backgroundColor: "rgba(0, 150, 100, 0.9)",
                                titleFontStyle: "normal",
                                titleMarginBottom: 15,
                            },
                        },
                    },
                },
            },
            {
                id: 3,
                name: "wallet 3",
                value: "3",
                balance: 4000,
                last_transac: -10,
                checked: false,
                report_data: {
                    type: "bar",
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    dataSets: [
                        {
                            label: "Benefit",
                            data: [1000, 1500, 900, 200, 300, 1250],
                            backgroundColor: [
                                "rgb(255, 99, 132)",
                                "rgb(54, 162, 235)",
                                "rgb(255, 205, 86)",
                                "rgb(28, 117, 219)",
                                "rgb(28, 219, 69)",
                                "rgb(111, 28, 219)",
                            ],
                        },
                        {
                            label: "Spending",
                            data: [1000, 700, 1300, 1700, 950, 1300],
                            backgroundColor: [
                                "rgba(255, 99, 132, 0.5)",
                                "rgba(54, 162, 235, 0.5)",
                                "rgba(255, 205, 86, 0.5)",
                                "rgba(28, 117, 219, 0.5)",
                                "rgba(28, 219, 69, 0.5)",
                                "rgba(111, 28, 219, 0.5)",
                            ],
                        },
                    ],
                    options: {
                        plugins: {
                            title: {
                                display: true,
                                text: "Report",
                                padding: {
                                    top: 10,
                                    bottom: 15,
                                },
                                color: "#000",
                                font: {
                                    weight: "bold",
                                    size: 20,
                                },
                                fullSize: true,
                            },
                            legend: {
                                display: false, // легенда графика
                                position: "bottom",
                            },
                        },
                    },
                },
                spending_data: {
                    type: "pie",
                    labels: ["Personal", "Shopping", "Phone", "Other"],
                    dataSets: [
                        {
                            label: "My First Dataset",
                            data: [2000, 500, 1000, 1700],
                            backgroundColor: [
                                "rgb(255, 99, 132)",
                                "rgb(54, 162, 235)",
                                "rgb(255, 205, 86)",
                                "rgb(28, 117, 219)",
                            ],
                            hoverOffset: 4,
                        },
                    ],
                    options: {
                        cutout: 100,
                        scales: {
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                        },
                        plugins: {
                            title: {
                                display: true,
                                text: "Spending this month",
                                padding: {
                                    top: 10,
                                    bottom: 15,
                                },
                                color: "#000",
                                font: {
                                    weight: "bold",
                                    size: 20,
                                },
                                fullSize: true,
                            },
                            legend: {
                                display: true, // легенда графика
                                position: "bottom",
                            },
                            tooltips: {
                                cornerRadius: 0,
                                caretSize: 0,
                                xPadding: 16,
                                yPadding: 10,
                                backgroundColor: "rgba(0, 150, 100, 0.9)",
                                titleFontStyle: "normal",
                                titleMarginBottom: 15,
                            },
                        },
                    },
                },
            },
            {
                id: 4,
                name: "wallet 4",
                value: "4",
                balance: 6000,
                last_transac: -10,
                checked: false,
                report_data: {
                    type: "bar",
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    dataSets: [
                        {
                            label: "Benefit",
                            data: [500, 600, 700, 800, 900, 1250],
                            backgroundColor: [
                                "rgb(255, 99, 132)",
                                "rgb(54, 162, 235)",
                                "rgb(255, 205, 86)",
                                "rgb(28, 117, 219)",
                                "rgb(28, 219, 69)",
                                "rgb(111, 28, 219)",
                            ],
                        },
                        {
                            label: "Spending",
                            data: [300, 400, 400, 500, 950, 1300],
                            backgroundColor: [
                                "rgba(255, 99, 132, 0.5)",
                                "rgba(54, 162, 235, 0.5)",
                                "rgba(255, 205, 86, 0.5)",
                                "rgba(28, 117, 219, 0.5)",
                                "rgba(28, 219, 69, 0.5)",
                                "rgba(111, 28, 219, 0.5)",
                            ],
                        },
                    ],
                    options: {
                        plugins: {
                            title: {
                                display: true,
                                text: "Report",
                                padding: {
                                    top: 10,
                                    bottom: 15,
                                },
                                color: "#000",
                                font: {
                                    weight: "bold",
                                    size: 20,
                                },
                                fullSize: true,
                            },
                            legend: {
                                display: false, // легенда графика
                                position: "bottom",
                            },
                        },
                    },
                },
                spending_data: {
                    type: "pie",
                    labels: ["Personal", "Shopping", "Phone", "Other"],
                    dataSets: [
                        {
                            label: "My First Dataset",
                            data: [2000, 500, 1000, 1700],
                            backgroundColor: [
                                "rgb(255, 99, 132)",
                                "rgb(54, 162, 235)",
                                "rgb(255, 205, 86)",
                                "rgb(28, 117, 219)",
                            ],
                            hoverOffset: 4,
                        },
                    ],
                    options: {
                        cutout: 100,
                        scales: {
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                        },
                        plugins: {
                            title: {
                                display: true,
                                text: "Spending this month",
                                padding: {
                                    top: 10,
                                    bottom: 15,
                                },
                                color: "#000",
                                font: {
                                    weight: "bold",
                                    size: 20,
                                },
                                fullSize: true,
                            },
                            legend: {
                                display: true, // легенда графика
                                position: "bottom",
                            },
                            tooltips: {
                                cornerRadius: 0,
                                caretSize: 0,
                                xPadding: 16,
                                yPadding: 10,
                                backgroundColor: "rgba(0, 150, 100, 0.9)",
                                titleFontStyle: "normal",
                                titleMarginBottom: 15,
                            },
                        },
                    },
                },
            },
            {
                id: 5,
                name: "wallet 5",
                value: "5",
                balance: 5500,
                last_transac: 60,
                checked: false,
                report_data: {
                    type: "bar",
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    dataSets: [
                        {
                            label: "Benefit",
                            data: [500, 600, 700, 800, 900, 1250],
                            backgroundColor: [
                                "rgb(255, 99, 132)",
                                "rgb(54, 162, 235)",
                                "rgb(255, 205, 86)",
                                "rgb(28, 117, 219)",
                                "rgb(28, 219, 69)",
                                "rgb(111, 28, 219)",
                            ],
                        },
                        {
                            label: "Spending",
                            data: [300, 400, 400, 500, 950, 1300],
                            backgroundColor: [
                                "rgba(255, 99, 132, 0.5)",
                                "rgba(54, 162, 235, 0.5)",
                                "rgba(255, 205, 86, 0.5)",
                                "rgba(28, 117, 219, 0.5)",
                                "rgba(28, 219, 69, 0.5)",
                                "rgba(111, 28, 219, 0.5)",
                            ],
                        },
                    ],
                    options: {
                        plugins: {
                            title: {
                                display: true,
                                text: "Report",
                                padding: {
                                    top: 10,
                                    bottom: 15,
                                },
                                color: "#000",
                                font: {
                                    weight: "bold",
                                    size: 20,
                                },
                                fullSize: true,
                            },
                            legend: {
                                display: false, // легенда графика
                                position: "bottom",
                            },
                        },
                    },
                },
                spending_data: {
                    type: "pie",
                    labels: ["Personal", "Shopping", "Phone", "Other"],
                    dataSets: [
                        {
                            label: "My First Dataset",
                            data: [2000, 500, 1000, 1700],
                            backgroundColor: [
                                "rgb(255, 99, 132)",
                                "rgb(54, 162, 235)",
                                "rgb(255, 205, 86)",
                                "rgb(28, 117, 219)",
                            ],
                            hoverOffset: 4,
                        },
                    ],
                    options: {
                        cutout: 100,
                        scales: {
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                        },
                        plugins: {
                            title: {
                                display: true,
                                text: "Spending this month",
                                padding: {
                                    top: 10,
                                    bottom: 15,
                                },
                                color: "#000",
                                font: {
                                    weight: "bold",
                                    size: 20,
                                },
                                fullSize: true,
                            },
                            legend: {
                                display: true, // легенда графика
                                position: "bottom",
                            },
                            tooltips: {
                                cornerRadius: 0,
                                caretSize: 0,
                                xPadding: 16,
                                yPadding: 10,
                                backgroundColor: "rgba(0, 150, 100, 0.9)",
                                titleFontStyle: "normal",
                                titleMarginBottom: 15,
                            },
                        },
                    },
                },
            },
        ],
        userInfo: {
            name: "UserName",
            login: "john215",
            password: "1234ABcd",
        },

        tariffs: [
            {
                id: "tariff_1",
                name: "Tariff 1",
                value: "tariff_1",
                checked: true,
            },
            {
                id: "tariff_2",
                name: "Tariff 2",
                value: "tariff_2",
                checked: false,
            },
            {
                id: "tariff_3",
                name: "Tariff 3",
                value: "tariff_3",
                checked: false,
            },
        ],

        currency: [
            {
                id: "dollar",
                name: "dollar",
                value: "dollar",
                checked: true,
            },
            {
                id: "euro",
                name: "euro",
                value: "euro",
                checked: false,
            },
            {
                id: "рубль",
                name: "рубль",
                value: "рубль",
                checked: false,
            },
            {
                id: "лира",
                name: "лира",
                value: "лира",
                checked: false,
            },
        ],
    },
    getters: {
        getRegisterStatus(state) {
            return state.isRegister;
        },
        getAutoriseStatus(state) {
            return state.isAutorise;
        },
        getCurrency(state) {
            return state.currency;
        },
        getTariffs(state) {
            return state.tariffs;
        },
        getUserInfo(state) {
            return state.userInfo;
        },
        isMenuOpen(state) {
            return state.isMenuOpen;
        },
        getWalletsArr(state) {
            return state.walletsArr;
        },
    },
    mutations: {
        setAutoriseStatus(state, status) {
            state.isAutorise = status;
        },
        setRegisterStatus(state, status) {
            state.isRegister = status;
        },
        setUserInfo(state, newUserInfo) {
            state.userInfo = newUserInfo;
        },
        setMenuOpen(state, boolean) {
            state.isMenuOpen = boolean;
        },
        setWalletsArr(state, updateObj) {
            let obj_for_update = state.walletsArr.find((a) => {
                return a.id === updateObj.id;
            });
            obj_for_update.name = updateObj.name;
            obj_for_update.balance = obj_for_update.balance + updateObj.summ;
            obj_for_update.last_transac = updateObj.summ;
        },
        createNewWallet(state, newWalletInfo) {
            state.walletsArr.push(newWalletInfo);
            console.log(state.walletsArr);
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
});
