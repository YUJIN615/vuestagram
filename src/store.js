import axios from 'axios';
import { createStore } from 'vuex'
import postData from './assets/postData'

const store = createStore({
  state(){
    return {
      name: 'yujin',
      age: 20,
      likes: [36, 29, 49],
      liked: [false, false, false],
      more: {},
      postData: postData,
    }
  },
  mutations: {
    changeName(state) {
      state.name = 'lee';
    },
    changeAge(state, payload) {
      state.age += payload;
    },
    likePhoto(state, i) {
      if(state.liked[i] == false) {
        state.likes[i]++;
        state.liked[i] = true;
      } else {
        state.likes[i]--;
        state.liked[i] = false;
      }
    },
    setMore(state, data) {
      state.more = data;
    },   
  },
  actions: {
    getData(context) {
      axios.get(`https://codingapple1.github.io/vue/more0.json`)
      .then((result) => {
        console.log(result.data);
        context.commit('setMore', result.data);
      });
    },
  },
})

export default store