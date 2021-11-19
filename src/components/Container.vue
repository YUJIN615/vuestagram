<template>
<div class="container">
  <!-- 게시물 페이지 -->
    
  <div v-if="containerStep == 0">
    <Post v-for="(post, i) in postData" :key="i" :postData="postData[i]"/>
  </div>


  <!-- 필터선택페이지 -->
  <div v-if="containerStep == 1">
    <div :class="`upload-image ${selectedFilter}`" :style="{ backgroundImage: `url(${uploadImageUrl})`}"></div>
    <div class="filters">
      <FilterBox
        :uploadImageUrl="uploadImageUrl"
        v-for="(filter, i) in filters" :key="i"
        :filter="filter"
      >
        {{ filter }}
      </FilterBox>
    </div>
  </div>

  <!-- 글작성페이지 -->
  <div v-if="containerStep == 2">
    <div :class="`upload-image ${selectedFilter}`" :style="{ backgroundImage: `url(${uploadImageUrl})`}"></div>
    <div class="write">
      <textarea class="write-box" @input="$emit('getText', $event.target.value)"></textarea>
    </div>
  </div>

</div>
</template>

<script>
import Post from './Post.vue'
import FilterBox from './FilterBox.vue'

export default {
  components: {
    Post,
    FilterBox,
  },
  props: {
    postData: Array,
    containerStep: Number,
    uploadImageUrl: String,
  },
  data() {
    return {
      filters: [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham","hudson", "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
      selectedFilter: '',
    }
  },
  mounted() {
    this.emitter.on('selectFilter', (filter)=>{
      // console.log(filter);
      this.selectedFilter = filter;
    })
  },
}
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>