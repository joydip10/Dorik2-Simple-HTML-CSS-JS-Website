const textarea= document.querySelector('.text-area');
const comment_btn=document.querySelector('.comment-btn');
const read_comments=document.querySelector('.read-comments');
const warning_text=document.querySelector('.warning');

AOS.init();

comment_btn.addEventListener('click',(e)=>{
  e.preventDefault();
  const text=textarea.value;
  const div=document.createElement('div');
  div.classList.add('comment-part');
  div.setAttribute('data-aos','fade-up');
  div.setAttribute('data-aos-anchor-placement','top-bottom');
  div.setAttribute('data-aos-duration',"500");
  if(text.trim().length>0){
    const element=`
    <img class="comment-picture" src="./images/users/default.jpg" alt="Default user"></img>
    <div class="comment-date-wrapper">
      <p class="comment-text">${text.trim()}</p>
      <p class="date-text color-secondary">few seconds ago</p>
    </div>
    `
    div.innerHTML=element;

    read_comments.insertAdjacentElement('afterbegin',div);
    warning_text.classList.add('d-none');
  }
  else{
    warning_text.classList.remove('d-none');
  }
 textarea.value='';
})