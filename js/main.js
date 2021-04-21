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

// 오른쪽 fix창 아래 스크롤 사용시 사라지게 하기
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
/*
window.addEventListener('scroll', function(){
  console.log('scroll!');
});*/

//lodash.js 를 사용하여 스크롤 이벤트를 제어함 
//_/throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    // 배지 숨기기
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    })
  }else{
    // 배지 보이기 
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300));


toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

//FADE IN
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //0.7, 1.4, 2.1, 2.8
    opacity: 1
  });
});


// 프로모션 공지사항 스와이퍼
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

// 프로모션 이벤트 내용 스와이퍼
new Swiper('.promotion .swiper-container', {
  direction: 'horizontal', //기본값
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백 px
  centeredSlides: true, // 1번 슬라이드 가운데
  loop: true,
  autoplay: {
    delay:5000
  },
  pagination:{
    el: '.promotion .swiper-pagination',  //페이지 번호 요소 선택자
    clickable: true
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});

//하단 스와이퍼
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});


// 프로모션 영역 열기 닫기 이벤트 처리
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    //숨김 처리
    promotionEl.classList.add('hide');
  }else{
    //보임 처리
    promotionEl.classList.remove('hide');
  }
});

function random(min, max){
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

//유투브 위에 애니메이션 
function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    { //옵션
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: delay
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



// ScrollMagic

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소
      triggerHook: .8 // 브라우저 전체 기준으로 top이 0 bottom이 1, 어느 위치에서 감시할 것인가
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller()) //어느 페이지를 보는지 감시
    
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

