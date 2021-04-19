<template>
  <div>
    <b-card>
      <div class="content-detail-content-info">
        <div class="content-detail-content-info-left">
          <div class="content-detail-content-info-left-number">
            {{contentId}}
          </div>
          <div class="content-detail-content-info-left-subject">
            {{title}}
          </div>
        </div>
        <div class="content-detail-content-info-right">
          <div class="content-detail-content-info-right-user">
            글쓴이: {{user}}
          </div>
          <div class="content-detail-content-info-right-created">
            등록일: {{created}}
          </div>
        </div>
      </div>
      <div class="content-detail-content">
        {{context}}
      </div>
      <div class="content-detail-button">
        <b-button variant="primary" @click="updateData">수정</b-button>
        <b-button variant="success" @click="deleteData">삭제</b-button>
      </div>
      <div class="content-detail-comment">
        <!-- contentId를 props로 넘겨 줌 -->
        <!-- 부모컴포넌트가 자식 컴포넌트에게 필요한 정보를 전달-->
        <!-- 자식 : 이게필요한데="이걸넘겨주겠다" -->
        <CommentList :contentId="contentId"/>
      </div>
    </b-card>
  </div>
</template>

<script>
import data from "@/data";
import CommentList from "./CommentList";
export default {
  name: "ContentDetail",
  components: {
    CommentList,
  },
  data() {
    const contentId = Number(this.$route.params.contentId);
    //필터로 현재 컨텐트아이디에 해당하는 데이터 가져옴
    const contentData = data.Content.filter(item => item.content_id === contentId)[0]
    return {
      contentId: contentId,
      title: contentData.title,
      context: contentData.context,
      user: data.User.filter(item => item.user_id === contentData.user_id)[0]
        .name,
      created: contentData.created_at
    };
  },
  methods: {
    deleteData() {
      const content_index = data.Content.findIndex(item => item.content_id === this.contentId);
       //배열.splice(인덱스,1); 리턴값은 삭제된 배열 요소이다. 배열자체는 삭제한 요소를 제거한 요소들로만 구성
      data.Content.splice(content_index, 1)
      this.$router.push({
        path: '/board/free'
      })
    },
    updateData() {
      this.$router.push({
        path: `/board/free/create2/${this.contentId}`
      })
    }
  }
};
</script>
<style scoped>
.content-detail-content-info {
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
}
.content-detail-content-info-left {
  width: 720px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.content-detail-content-info-right {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.content-detail-content {
  border: 1px solid black;
  margin-top: 1rem;
  padding-top: 1rem;
  min-height: 720px;
}
.content-detail-button {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
}
.content-detail-comment {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
}
</style>