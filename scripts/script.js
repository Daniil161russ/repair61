$(document).ready(function() {
	
	$('.works-slider').slick({
		prevArrow: $('.prev-arrow'),
		nextArrow: $('.next-arrow'),
		slidesToShow: 1,
		infinite: false,
		initialSlide:0,
		variableWidth: true
	});
});

$(document).ready(function(){
	if(window.innerWidth < 760) {
		$(".feedback-box").slice(0, 2).show();
  		$(".feedback__btn-next").on("click", function(e){
    		e.preventDefault();
			$(".feedback-box:hidden").slice(0, 2).slideDown();
			if($(".feedback-box:hidden").length == 0) {
					$(".feedback__btn-next").text("Больше нет").addClass("noContent");
			}
			});
	} else
		if(window.innerWidth > 760){
			$(".feedback-box").slice(0, 4).show();
			$(".feedback__btn-next").on("click", function(e){
			e.preventDefault();
			$(".feedback-box:hidden").slice(0, 4).slideDown();
			if($(".feedback-box:hidden").length == 0) {
					$(".feedback__btn-next").text("Больше нет").addClass("noContent");
			}
			});
		}
})

let design = 0;
$('.design-box').click(function() {
	let id = $(this).data('id');
	let check = $('.design__check[data-id="'+id+'"]');
	if(check.hasClass('active')){
		check.removeClass('active');
	} else {
		check.addClass('active').siblings().removeClass('active');
	}		
});

let floor = 0;
let walls = 0;
let ceilings = 0;
$('.covering__box').click(function() {
	let id = $(this).data('id');
	let block = $('.covering__check[data-id="'+id+'"]');
	if(block.hasClass('active')){
		block.removeClass('active');
	} else {
		block.addClass('active');
	}		
});

let objectType = document.querySelector('#ObjectType');
let stateType = document.querySelector('#state');
let objectItem = objectType.querySelectorAll('.list__item');
let stateItem = stateType.querySelectorAll('.list__item')


objectType.addEventListener('click', (event) => {
  // Отлавливаем элемент в родители на который мы нажали
  let target = event.target;
  
  // Проверяем тот ли это элемент который нам нужен
  if(target.classList.contains('list__item')) {
    for(let i = 0; i < objectItem.length; i++) {
      // Убираем у других
      objectItem[i].classList.remove('item_active');
    }
    // Добавляем тому на который нажали
    target.classList.add('item_active');
  }
  
});
stateType.addEventListener('click', (event) => {
  let target = event.target;
  if(target.classList.contains('list__item')) {
    for(let i = 0; i < stateItem.length; i++) {
      stateItem[i].classList.remove('item_active');
    }
    target.classList.add('item_active');
  } 
});

function switchQuiz() {  
	let index = 0;
	
	let btnBack = document.getElementsByClassName('back')[0];
	let btnNext = document.getElementsByClassName('forward')[0];
	btnBack.addEventListener('click', function() { go(this); }, false);
	btnNext.addEventListener('click', function() { go(this); }, false);
	
	function go(el) {
			let quiz = document.querySelectorAll(".form-body");  
       
			if (el.dataset.type == 'next') {
					index++;
					index = (index > quiz.length - 1) ? 5 : index;
			}

			if (el.dataset.type == 'prev') {
					index--;
					index = (index < 0) ? 0 : index;
			}

			for (let i = 0; i < quiz.length; i++) {
					quiz[i].classList.remove("active");

					if (i == index)
						quiz[i].className += " active";
			}

			switch (index){
				case 0:
					document.querySelector('.scale__text').innerHTML = 'Шаг 1/6';
					document.querySelector('.progress-bar_gray').style.width = 16.6 + '%';
					break;
				case 1: 
					document.querySelector('.scale__text').innerHTML = 'Шаг 2/6';
					document.querySelector('.progress-bar_gray').style.width = 32 + '%';
					break;
				case 2:
					document.querySelector('.scale__text').innerHTML = 'Шаг 3/6';
					document.querySelector('.progress-bar_gray').style.width = 49 + '%';
					break;
				case 3:
					document.querySelector('.scale__text').innerHTML = 'Шаг 4/6';
					document.querySelector('.progress-bar_gray').style.width = 65 + '%';
					break;
				case 4:
					document.querySelector('.scale__text').innerHTML = 'Шаг 5/6';
					document.querySelector('.progress-bar_gray').style.width = 80 + '%';
					break;
				case 5:
					document.querySelector('.scale__text').innerHTML = 'Шаг 6/6';
					document.querySelector('.progress-bar_gray').style.width = 100 + '%';
					break;
			}
			
			
	}    
}

switchQuiz();
