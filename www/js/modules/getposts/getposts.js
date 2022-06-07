class GetPosts {
  constructor() {
    this.fetchLink = "https://api.artefaktas.eu/";
    this.readMoreText = `Skaityti daugiau`;
    this.homeText = `Sugrįžti į pagrindinį`;
    this.caracLimit = 100;
  }

  postTemplate(post) {
    let divNode = document.createElement("div");
    divNode.className =
      "col-lg-10 col-md-10 col-sm-12 col-xs-12 mx-auto align-items-center";
    divNode.innerHTML =
      divNode.innerHTML +
      `
    <div class="card my-4" style="width:100%">
          
          <div class="card-body">
              <h4 class="card-title">${post.title.$t}</h4>
              <p class="card-text">${post.content.$t.slice(
                0,
                this.caracLimit
              )}...</p>
              <a data-post="${
                post.id.$t
              }" class="btn btn-lg btn-dark postButton">${this.readMoreText}</a>
          </div>
      </div>
      `;
    return divNode;
  }

  returnFullPost(post) {
    let divNode = document.createElement("div");
    divNode.className =
      "col-lg-10 col-md-10 col-sm-12 col-xs-12 mx-auto align-items-center";
    divNode.innerHTML =
      divNode.innerHTML +
      `
        <div class="card my-4" style="width:100%">
        <a href="index.html" class="mb-2 btn btn-lg btn-dark postButton"> ${this.homeText}</a>
            
              <div class="card-body">
                  <h4 class="card-title">${post.title.$t}</h4>
                  <p class="card-text">${post.content.$t}</p>
                  
              </div>
          </div>
          `;
    return divNode;
  }

  getPosts() {
    async function getData(passedParam) {
      const res = await fetch(passedParam);
      const jsonData = await res.json();
      return jsonData;
    }
    getData(this.fetchLink).then((dat) => {
      let elSelector = document.querySelector("#postContainer");
      dat.forEach((element) => {
        elSelector.appendChild(this.postTemplate(element));
      });
      const buttons = document.querySelectorAll(".postButton");
      buttons.forEach((element) => {
        element.addEventListener("click", () => {
          let postId = element.getAttribute("data-post");
          dat.forEach((element) => {
            if (element.id.$t === postId) {
              elSelector.innerHTML = "";
              elSelector.appendChild(this.returnFullPost(element));
              window.scrollTo(0, 0);
            }
          });
        });
      });
    });
  }
}
