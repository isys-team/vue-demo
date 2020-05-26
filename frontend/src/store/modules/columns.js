const state = {
    firstColumnItems: [],
    secondColumnItems: [],
    filterValue: '',
    isBusy: true,
    errorList: [],
};
const mutations = {
    addError(state, errorMessage) {
        state.errorList.push(errorMessage);
    },
    removeError(state, errorMessage) {
        state.errorList.filter(message => message !== errorMessage);
    },

    saveFetchedData(state, parsedData) {
        state.firstColumnItems = parsedData;
    },
    fetchDone(state) {
        state.isBusy = false
    },
    setFilterValue(state, newValue) {
        state.filterValue = newValue;
    },

    addItemToFirstColumn(state, item) {
        state.firstColumnItems.push(item);
    },
    addItemToSecondColumn(state, item) {
        state.secondColumnItems.push(item);
    },
    removeItemFromFirstColumnByIndex(state, itemIndex) {
        state.firstColumnItems.splice(itemIndex, 1);
    },
    removeItemFromSecondColumnByIndex(state, itemIndex) {
        state.secondColumnItems.splice(itemIndex, 1);
    }
};

const actions = {
    getDataFromServer({commit, rootState}) {
        try {
            fetch(rootState.apiUrl).then((response) => response.json()).then((parsedData) => {
                commit('saveFetchedData', parsedData);
                commit('fetchDone');
            })
        } catch (e) {
            console.error(e);
            commit('addError', 'Ошибка связи с сервером');
        }
    },
    moveItemToRightColumn({state, commit}, item) {
        commit('history/registerAdd', {item}, {root: true});

        const foundItemIndex = state.firstColumnItems.indexOf(item);
        if (foundItemIndex === -1) {
            console.error('Данный элемент не найден!');
            return;
        }

        commit('addItemToSecondColumn', item);
        commit('removeItemFromFirstColumnByIndex', foundItemIndex);
    },
    moveItemToLeftColumn({state, commit}, item) {
        commit('history/registerRemove', {item}, {root: true});

        const foundItemIndex = state.secondColumnItems.indexOf(item);
        if (foundItemIndex === -1) {
            console.error('Данный элемент не найден!');
            return;
        }

        commit('addItemToFirstColumn', item);
        commit('removeItemFromSecondColumnByIndex', foundItemIndex);
    }
};

const getters = {
    isDataLoading(state) {
        return state.firstColumnItems.length === 0 || state.isBusy;
    },
    itemsInFirstColumnCount(state) {
        return state.firstColumnItems.length;
    },
    filteredData(state) {

        if (state.filterValue.trim().length === 0)
            return state.firstColumnItems;

        const filterValue = state.filterValue;

        const filteredItems = state.firstColumnItems.filter((item) => {
            //Если искомая строка содержится в name
            if (item.name.indexOf(filterValue) !== -1)
                return true;

            //Или же один из дочерних элементов содержит искомую строку
            const isFoundInSubItem = item.items.findIndex((subItem) => subItem.name.indexOf(filterValue) !== -1) !== -1;
            if (isFoundInSubItem)
                return true;
        });

        function CalcSortPriority(item) {
            let sortPriority = 0;
            //Искомая строка выступает разделитем строки для подсчета кол-ва вхождений
            sortPriority += item.name.split(filterValue).length - 1;

            item.items.forEach((subItem) => {
                sortPriority += subItem.name.split(filterValue).length - 1
            });

            return sortPriority;
        }

        return filteredItems.sort((a, b) => CalcSortPriority(b) - CalcSortPriority(a));
    }

};

export default {
    namespaced: true,
    state, mutations, getters, actions
}