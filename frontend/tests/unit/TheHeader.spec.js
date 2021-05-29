import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TheHeader from '@/components/layout/TheHeader.vue'
import { SET_THEME_DARK, SET_THEME_LIGHT } from '../../src/store/mutation-types'

const localVue = createLocalVue()
localVue.use(Vuex)

const mutations = {
    SET_THEME_DARK: jest.fn(),
    SET_THEME_LIGHT: jest.fn(),
}

const store = new Vuex.Store({ mutations })

describe('TheHeader.vue', () => {
    it('pass title to header', () => {
        let title = 'Lorem ipsum'
        const wrapper = shallowMount(TheHeader, {
            propsData: {
                title: title,
            },
            computed: {
                isDark: () => false,
            },
        })

        expect(wrapper.find('h1').text()).toBe(title)
    })

    it('test theme mode text light mode', () => {
        let title = 'Lorem ipsum'
        const wrapper = shallowMount(TheHeader, {
            propsData: {
                title: title,
            },
            computed: {
                isDark: () => false,
            },
        })

        expect(wrapper.find('h4').text()).toBe('Dark mode')
    })

    it('test theme mode text dark mode', () => {
        let title = 'Lorem ipsum'
        const wrapper = shallowMount(TheHeader, {
            propsData: {
                title: title,
            },
            computed: {
                isDark: () => true,
            },
        })

        expect(wrapper.find('h4').text()).toBe('Light mode')
    })

    it('commit store theme mode dark when cliked', async () => {
        let title = 'Lorem ipsum'
        const wrapper = shallowMount(TheHeader, {
            store,
            localVue,
            propsData: {
                title: title,
            },
            computed: {
                isDark: () => false,
            },
        })

        await wrapper.find('.header-change-theme').trigger('click')

        expect(mutations.SET_THEME_DARK).toHaveBeenCalledWith({}, undefined)
    })

    it('commit store theme mode light when cliked', async () => {
        let title = 'Lorem ipsum'
        const wrapper = shallowMount(TheHeader, {
            store,
            localVue,
            propsData: {
                title: title,
            },
            computed: {
                isDark: () => true,
            },
        })

        await wrapper.find('.header-change-theme').trigger('click')

        expect(mutations.SET_THEME_LIGHT).toHaveBeenCalledWith({}, undefined)
    })
})
