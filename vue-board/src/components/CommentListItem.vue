<template>
  <div>
    <div class="comment-list-item">
      <div class="comment-list-item-name">
        <div>{{name}}</div>
        <div>{{commentObj.created_at}}</div>
      </div>
      <div class="comment-list-item-context">{{commentObj.context}}</div>
      <div class="comment-list-item-button">
        <b-button variant="info" @click="updateData">수정</b-button>
        <b-button variant="info" @click="deleteData">삭제</b-button>
        <b-button variant="info" @click="subCommentToggle">덧글 달기</b-button>
      </div>
    </div>
    <template v-if="subCommentCreateToggle">
      <CommentCreate
        :isSubComment="true"
        :commentId="commentObj.comment_id"
        :reloadSubComments="reloadSubComments"
        :subCommentToggle="subCommentToggle"
      />
    </template>
    <template v-if="subCommentList.length > 0">
      <div
        class="comment-list-item-subcomment-list"
        :key="item.subcomment_id"
        v-for="item in subCommentList"
      >
        <div class="comment-list-item-name">
          <div>{{item.user_name}}</div>
          <div>{{item.created_at}}</div>
        </div>
        <div class="comment-list-item-context">{{item.context}}</div>
        <div class="comment-list-item-button">
          <b-button variant="info">수정</b-button>
          <b-button variant="info" @click="deleteSub">삭제</b-button>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import data from "@/data";
import CommentCreate from "./CommentCreate";
export default {
  name: "CommentListItem",
  props: {
    commentObj: Object,
    reloadComments: Function,
    reloadSubComments: Function,
  },
  components: {
    CommentCreate
  },
  data() {
    return {
      name: data.User.filter(
        item => item.user_id === this.commentObj.user_id
      )[0].name,
      subCommentList: data.SubComment.filter(
        item => item.comment_id === this.commentObj.comment_id
      ).map(subCommentItem => ({
        ...subCommentItem,
        user_name: data.User.filter(
          item => item.user_id === subCommentItem.user_id
        )[0].name
      })),
      subCommentCreateToggle: false
    };
  },
  methods: {
    subCommentToggle() {
      this.subCommentCreateToggle = !this.subCommentCreateToggle;
    },
    reloadSubComments() {
      this.subCommentList = data.SubComment.filter(
        item => item.comment_id === this.commentObj.comment_id
      ).map(subCommentItem => ({
        ...subCommentItem,
        user_name: data.User.filter(
          item => item.user_id === subCommentItem.user_id
        )[0].name 
      }));
    },
    deleteData() {
      const comment_index = data.Comment.findIndex(item => item.comment_id === this.commentObj.comment_id);
       //배열.splice(인덱스,1); 리턴값은 삭제된 배열 요소이다. 배열자체는 삭제한 요소를 제거한 요소들로만 구성
        data.Comment.splice(comment_index, 1)
        console.log(this.commentObj);
        console.log(data.Comment);
        this.reloadComments();
    },
    deleteSub() {
      const subcomment_index = data.SubComment.findIndex(item => item.subcomment_id === this.commentObj.comment_id);
       //배열.splice(인덱스,1); 리턴값은 삭제된 배열 요소이다. 배열자체는 삭제한 요소를 제거한 요소들로만 구성
        data.SubComment.splice(subcomment_index, 1)
        console.log(this.commentObj);
        console.log(data.SubComment);
        this.reloadSubComments();
    },
    updateData() {
    //   const comment_index = data.Comment.findIndex(item => item.comment_id === this.commentObj.comment_id);
    //   this.$router.push({
    //     path: `/board/free/detail/${comment_index}`
    //   })
    const comment_id = data.Comment[data.Comment.length - 1].comment_id;
      data.Comment.push({
        comment_id: comment_id,
        user_id: 1,
        content_id: this.contentId,
        context: this.context,
        created_at: "2019-04-19 14:11:11",
        updated_at: null
      });
      this.reloadComments();
      this.subCommentToggle();
      this.context = "";
    },
  }
};
</script>
<style scoped>
.comment-list-item {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
}
.comment-list-item-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid black;
  padding: 1em;
}
.comment-list-item-context {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50em;
  border: 0.5px solid black;
}
.comment-list-item-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid black;
  padding: 1em;
}
.btn {
  margin-bottom: 1em;
}
.comment-list-item-subcomment-list {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
  margin-left: 10em;
}
</style>