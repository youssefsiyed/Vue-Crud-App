<template>
  <div class="Post">
      <h1 class="display-4 text-center">The Post</h1>
      <div class="container text-right">
      <button type="button" data-toggle="modal" data-target="#exampleModal" class="btn btn-success bmd-btn-fab">
        <i class="material-icons">grade</i>
      </button>
      </div>
      <br>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Post</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <form @submit="AddPost($event)">
      <div class="form-group">
    <label for="exampleInputName">Post Title</label>
    <input type="text" class="form-control" name="title" placeholder="Enter the title" v-model="post.title" id="exampleInputName" v-validate="'required|min:3|max:8'" required>
    <span  v-bind:style="{'color' : 'red'}" v-show="errors.has('title')">{{ errors.first('title') }}</span>
  </div>
  <div class="form-group">
    <label for="exampleInputbody">Post Body</label>
    <textarea class="form-control" placeholder="Enter the Body" name="body" rows="3" v-validate="'required|min:10|max:15'" v-model="post.body" id="exampleInputbody" required></textarea>
    <span  v-bind:style="{'color' : 'red'}" v-show="errors.has('body')">{{ errors.first('body') }}</span>
  </div>
          <button type="submit" class="btn btn-raised btn-success btn-block" v-bind:disabled="isDiasble">Submit</button>
          <button type="submit" class="btn btn-raised btn-warning btn-block" v-bind:disabled="!isDiasble">Update</button>
  </form>
      </div>
    </div>
  </div>
</div>
 
  <!--<div class="container text-right">
   <download-excel
	class   = "btn btn-success btn-lg"
	:data   = "posts"
  :fields = "jsonfields"
	name    = ".xls">
</download-excel> 
  </div> -->
  <br>
  <Jumper class="container text-center" v-if="!isLoading"></Jumper>    

 
  <div class="container-fluid">
     <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
    <div class="card" v-for="(p,index) in posts" v-bind:key="p.id">
  <div class="card-body">
    <h5 class="card-title"><strong v-bind:style="{'color' : 'green','font-family': 'Montserrat'}">{{index}}</strong><br>{{p.title}}</h5>
    <p class="card-text">{{p.body}}</p>
    <div class="text-right">
    <button class="btn btn-danger" v-on:click="DeletePost(p.id,index)">Delete</button>     
    <button class="btn btn-danger" v-on:click="UpdatePost(p)" data-toggle="modal" data-target="#exampleModal">Update</button>     
    </div>
  </div>
</div>
  </transition-group>
  </div>

  </div>
</template>

<script>
import { Jumper } from 'vue-loading-spinner';

export default {
  name: 'Post',
   components: {
      Jumper
    },
  data () {
    return {
      post : {},
      posts : [],
      isDiasble:false,
      isLoading:false,
      jsonfields: {
            'Complete title': 'title',
            'Body': 'body'
    }
    }
  },
  methods :{
    GetPost(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
      .then(function(response){
        this.posts=response.data;
        this.isLoading=true;
      });
    },
    AddPost(e){
      let newPost = {
      title :this.post.title,
      body :this.post.body
    }
    if(this.post.title ==null && this.post.body ==null){
      alert("Plz Enter the Field");
    }else
    this.$http.post('https://jsonplaceholder.typicode.com/posts',newPost)
        .then(function(response){
            this.posts.unshift(response.data);
        });
        
       e.preventDefault();
       this.post.title="";
       this.post.body="";
    },
    DeletePost(id,index){
      if(confirm('Are you sure')){
      this.$http.delete('https://jsonplaceholder.typicode.com/posts/'+id)
      .then(function(response){
        this.posts.splice(index,1);
      });
      }
    },
    UpdatePost(post){
      this.post.title=post.title;
      this.post.body=post.body;
      this.$http.put('https://jsonplaceholder.typicode.com/posts/'+post.id,post)
      .then(function(response){
         this.posts.shift(response.data);
          this.isDiasble=true;
      });
    }

  },
  created(){
    this.GetPost();
  }
}
</script>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1';
</style>
