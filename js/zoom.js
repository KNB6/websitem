

 document.addEventListener("click",function (e){
    if(e.target.classList.contains("galeri-foto")){
          const src = e.target.getAttribute("src");
          document.querySelector(".modal-img").src = src;
          const myModal = new bootstrap.Modal(document.getElementById('galeri-modal'));
          myModal.show();
    }
  })