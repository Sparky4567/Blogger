function onDeviceReady() {
  s = new GetPosts();
  s.getPosts();
}

document.addEventListener("deviceready", onDeviceReady, false);
