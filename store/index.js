// store/news.js
export const state = () => ({
    newsData: [],
  });
  
  export const mutations = {
    setNewsData(state, data) {
      state.newsData = data;
    },
  };
  
  export const actions = {
    async fetchNewsData({ commit }) {
      try {
        const response = await this.$axios.get('/chelsnews/news'); // Ganti dengan endpoint API Anda
        // eslint-disable-next-line no-console

        commit('setNewsData', response.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching news data:', error);
      }
    },
  };
  