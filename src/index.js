
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/alert';
import axios from 'axios';
import Post from './components/Post';
import Aleart from './components/Aleart';



//DOM loading operation
document.addEventListener('DOMContentLoaded',getPosts)

//Get Create_post form elements
document.getElementById('create_post_form').addEventListener('submit',createPost)

//Get Create_post form elements
const msg = document.querySelector('.msg');



//get all posts
function getPosts () {
    axios.get('http://localhost:5050/post').then(ress => { Post.showPost(ress.data); });
}

// CreatPost

function createPost(e) {
  e.preventDefault();

// get Formdata object
  let form_data = new FormData(e.target);
  let data = Object.fromEntries(form_data.entries());

  if(data.name == '' || data.user_p == '' || data.content == '') {
    msg.innerHTML= Aleart.warning('All Fields Are Required !');
  }else{

//Send Post Request
  axios.post('http://localhost:5050/post',{
    name       : data.name,
    post_Photo : data.photo,
    user_p     : data.uphoto,
    content    : data.content
   

}).then(ress => {
    getPosts();
   msg.innerHTML= Aleart.success('Post Created Successful')
})
  }

}





