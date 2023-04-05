import Vue from "vue";
import Vuex from 'vuex';
import vuexPersistedState from "vuex-persistedstate"
Vue.use(Vuex)


export default new Vuex.Store({
    // 专门用来存值的属性，叫state
    state() {
        return {
            userId: 1,
            userName: ''
        }
    },
    // 同步修改值的方法，this.$store.commit("方法名", 参数1, 参数2...)
    mutations: {
        setUserId(state, userId) {
            state.userId = userId
        }
    },
    // 异步修改值的方法  this.$store.dispatch(.....)
    actions: {
        // 方法...
        
    },
    plugins: [
        // 更换底层存储方式，防止页面刷新导致丢失vuex里的数据
        vuexPersistedState({
            storage: window.sessionStorage
        })
    ]
})
