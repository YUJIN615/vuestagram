<template>
<div class="header">
  <ul class="header-button-left">
    <li v-if="this.containerStep == 1" @click="this.containerStep = 0;">Cancel</li>
    <li v-if="this.containerStep == 2" @click="this.containerStep = 1;">Cancel</li>
  </ul>
  <ul class="header-button-right">
    <li v-if="this.containerStep == 1" @click="this.containerStep = 2;">Next</li>
    <li v-if="this.containerStep == 2" @click="publish">발행</li>
  </ul>
  <img src="./assets/logo.png" class="logo" />
</div>

<!-- <h4>안녕 {{ $store.state.name }}</h4>
<button @click="changeName()">버튼</button>
<p>{{ $store.state.age }}</p>
<button @click="changeAge(10)">버튼</button>

<p>{{ $store.state.more }}</p>
<button @click="getData()">더보기</button>

<p>{{name}} {{age}} {{likes}}</p> -->


<Container 
  :postData="postData" 
  :containerStep="containerStep" 
  :uploadImageUrl="uploadImageUrl"
  :selectedFilter="selectedFilter"
  @getText="this.postText=$event"
/>
<button type="button" class="view-more-btn" v-if="this.containerStep == 0" @click="viewMore()">더보기</button>

<div class="footer" v-if="this.containerStep == 0">
  <ul class="footer-button-plus">
    <input @change="uploadImage" type="file" id="file" class="inputfile" />
    <label for="file" class="input-plus">+</label>
  </ul>
</div>

</template>

<script>
import Container from './components/Container.vue'
import postData from './assets/postData'
import axios from 'axios'
import {mapActions, mapMutations, mapState} from 'vuex'

export default {
  name: 'App',
  components: {
    Container,
  },
  data() {
    return {
      postData: postData,
      more: 0,
      containerStep: 0,
      uploadImageUrl: '',
      postText: '',
      selectedFilter: '',
      counter: 0,
    }
  },
  mounted() {
    this.emitter.on('selectFilter', (filter)=>{
      // console.log(filter);
      this.selectedFilter = filter;
    })
  },
  methods: {
    viewMore() {
      axios.get(`https://codingapple1.github.io/vue/more${this.more}.json`)
      .then((result) => {
        console.log(result.data);
        this.postData.push(result.data)
        this.more++
      }).catch((error) => {
        console.log(error);
      })
    },
    uploadImage(e) {
      let file = e.target.files;
      let url = URL.createObjectURL(file[0]);
      this.uploadImageUrl = url;
      this.containerStep++;
    },
    publish() {
      let myPost = {
        name: "Lee Yujin",
        userImage: "https://placeimg.com/100/100/nature",
        postImage: this.uploadImageUrl,
        likes: 0,
        date: "Nov 17",
        liked: false,
        content: this.postText,
        filter: this.selectedFilter,
      };
      this.postData.unshift(myPost);
      this.containerStep = 0;
    },
    ...mapMutations(['likePhoto','setMore','changeName','changeAge']),
    ...mapActions(['getData']),
  },
  computed: {
    name() {
      return this.$store.state.name
    },
    ...mapState(['name','age','likes',]),
    ...mapState({ 작명: 'name', }),
  },
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.view-more-btn {
  display: block;
  margin: 20px auto;
  border: 0;
  background: #eee;
  padding: 6px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
