
class Post {

    constructor(){
        this.post_timeline = document.getElementById('post-timeline-load')
    }

    /**
     * Show all post
     */
    showPost(posts){
       
    let post = '';
    posts.reverse().map((data,index) =>{
        let { name,user_p,content,post_Photo } = data;
        post += `
        <div class="card shadow-sm my-3">
        <div class="card-body">
          <div class="user-post-info d-flex justify-content-between">
              <div class="user-timeline-info d-flex align-items-center">
               <img  src="${ user_p }" alt="">
               <h5 class="ms-3">${ name }</h5>
              </div>
              <button>...</button>
          </div>
          <div class="user-post-content">
              <p> ${ content }</p>
              <img class="w-100" src="${ post_Photo } " alt="">
          </div>
        </div>
        </div>
        `
    })
    this.post_timeline.innerHTML = post;
   }

}

let post = new Post;
export default post;