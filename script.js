function sendMessage(event){
  event. preventDefault();
  alert("your message has been received!");
}
function toggleDarkMode(){
  document. body.classList. toggle("dark-mode");
}
function searchPosts() {
  let input =
  document.getElementById("searchInput");
  let filter = input.value.toLowerCase();
  let posts = 
  document.getElementsByClassName("post");
  for (let i = 0; i < posts.length; i++){ let text =
    posts[i].textContent.toLowerCase();
    
   if (text.includes(filter)){
     posts[i].style.display = ""; }
     else {
         posts[i].style.display = "none";
     }
  }
}