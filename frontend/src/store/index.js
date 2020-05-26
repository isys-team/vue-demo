import Vue from 'vue'
import Vuex from 'vuex'
import columns from '@/store/modules/columns'
import history from '@/store/modules/history'
import AppConfig from "@/store/app-config";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        apiUrl: AppConfig.apiUrl,
    },
    modules: {
        columns,
        history
    }
})
