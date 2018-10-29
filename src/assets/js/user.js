

import store from '../../store'
import {
  getDataHide
} from 'api/api'
import {
  message
} from 'ant-design-vue';


export function initUser() {
    if (window.localStorage.getItem('user')) {
        let user = JSON.parse(window.localStorage.getItem('user'))
        store.commit('SET_LOGIN', user)
    }
    if (window.localStorage.getItem('status')) {
        let status = JSON.parse(window.localStorage.getItem('status')).status
        store.commit('SET_STATUS', status)
    }

    
    if (store.state.user == null) {
        getDataHide('/api/user/userinfo').then(res => {
            let status = handlerUser(res)
            store.commit('SET_LOGIN', res);
            store.commit('SET_STATUS', status);
        }).catch(err => {
            if (err) {
                if(err.status == 401) {
                    store.commit('SET_LOGOUT');
                    store.commit('SET_LOGIN', 0)
                    store.commit('SET_STATUS', -1);
                    return;
                }
                if (err.message) {
                    message.warning(err.message);
                } else {
                    message.warning(err.error);
                }
            } else {
                message.warning('接口调试中');
            }
        })
    }
}
function handlerUser(data) {
    
    if(data && data.roles.length === 1 && data.roles.includes('anonymous')) {
        //游客身份 0
        return 0;
    }
    if(data && (data.roles.includes('customer') ||data.roles.includes('customer-org') || data.roles.includes('customer-person'))) {
        //需方 1
        return 1;
    }
    if(data && (data.roles.includes('dubber-person') || data.roles.includes('dubber-team'))) {
        //配音员 2
        return 2;
    }
    
}

