const searchEl = document.querySelector('.search');
const searhInputEl = searchEl.querySelector('input');

// 찾기 아이콘 클릭 시 input태그 포커스(확장) 하기
searchEl.addEventListener('click', function(){
  searhInputEl.focus();
});

// input태그 포커스(확장) 되었을 때
searhInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searhInputEl.setAttribute('placeholder', '통합검색');
});

// input태그 포커스(확장) 해제 되었을 때
searhInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searhInputEl.setAttribute('placeholder', '');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();