<template>
  <div>
      <div>{{data.writer}}</div>
      <div>{{data.title}}</div>
      <div>{{data.content}}</div>
      <button @click="updateData">수정</button>
      <button @click="deleteData">삭제</button>
  </div>
</template>

<script>
import data from '@/data'
export default {
    name:'Detail',
    data(){
        const index = this.$route.params.contentId
        return{
            data: data[index],
            index: index
        }
    },
    methods: {
        //배열.splice(인덱스,1); 리턴값은 삭제도니 배열 요소이다. 배열자체는 삭제한 요소를 제거한 요소들로만 구성되어 있다
        deleteData(){
            data.splice(this.index, 1)
            this.$router.push({
                path: '/'
            })
        },
        updateData(){
            this.$router.push({
                //create에 param 전달 - push
                name:'Create',
                params: {
                    contentId: this.index
                }
            })
        }
    }
}
</script>

<style>

</style>