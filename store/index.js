import Vuex from 'vuex'
import Api from '~/plugins/Api'

const store = () => {
  return new Vuex.Store({
    state: {
      navbarItems: []
    },
    mutations: {
      getNavbarList (state, navbarItems) {
        state.navbarItems = navbarItems
      }
    },
    actions: {
      // GET navbar lsit from '/api'
      async getNavbarList ({ commit }) {
        try {
          const navData = await Api.get('/menus/get_menu/?menu_id=7')
          if (!navData) {
            console.log('Req Error please try again')
          }
          // console.log(navData.data.menu.output)
          commit('getNavbarList', navData.data.menu.output)
        } catch (err) {
          console.log(err.message)
        }
      }
    }
  })
}

export default store
