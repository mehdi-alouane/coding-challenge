import Vuex from 'vuex'
import Api from '~/plugins/Api'

const store = () => {
  return new Vuex.Store({
    state: {
      recentPosts: [],
      navbarItems: []
    },
    mutations: {
      getRecentPosts (state, recentPosts) {
        state.recentPosts.push(...recentPosts)
      },
      getNavbarList (state, navbarItems) {
        state.navbarItems = navbarItems
      }
    },
    actions: {
      // Get recent post
      async getRecentPosts ({ commit }, { id }) {
        try {
          const req = await Api.get(`/get_recent_posts/?page=${id}`)
          if (!req) {
            console.log('error')
          }
          // console.log(req.data.posts)
          commit('getRecentPosts', req.data.posts)
        } catch (err) {
          console.log(err.message)
        }
      },
      // GET navbar lsit from '/api'
      async getNavbarList ({ commit }) {
        try {
          const navData = await Api.get('/menus/get_menu/?menu_id=7')
          if (!navData) {
            // console.log('Req Error please try again')
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
