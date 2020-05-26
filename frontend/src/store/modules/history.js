const state = {
    historyRecords: [],
    operationTypes: {
        add: 'Добавление',
        remove: 'Удаление'
    }
};
const mutations = {
    registerAdd(state, {item}) {
        state.historyRecords.unshift({
            time: Date.now(),
            item: Object.assign({}, item),
            operation: state.operationTypes.add
        });
    },
    registerRemove(state, {item}) {
        state.historyRecords.unshift({
            time: Date.now(),
            item: Object.assign({}, item),
            operation: state.operationTypes.remove
        });
    }
};

const actions = {};

const getters = {};

export default {
    namespaced: true,
    state, mutations, getters, actions
}