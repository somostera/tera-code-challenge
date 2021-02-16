import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    duration: 5000
})

Vue.toasted.register(
    'defaultSuccess',
    payload => !payload.msg ? 'Success' : payload.msg,
    { type: 'success', icon: 'check' }
)

Vue.toasted.register(
    'defaultError',
    payload => !payload.msg ? 'Error' : payload.msg,
    { type : 'error', icon : 'times' }
)
