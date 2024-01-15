const viewModalBtn = document.querySelector(".view-details");
const modalClosebtn = document.querySelector(".close-btn");

let isModalvis = false;

const modOpenClose = () => {
    let modal = document.querySelector(".product-view-modal");
    if(isModalvis === false){
        modal.classList.add("active");
        isModalvis = true;
    } else {
        modal.classList.remove("active");
        isModalvis = false;
    }
}

modalClosebtn.addEventListener("click", modOpenClose);
viewModalBtn.addEventListener("click",modOpenClose);