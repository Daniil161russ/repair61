$.ajax({ 
	url: "https://api.rostovrepair161.ru/api/reviews", 
	method: "GET",
	success: function(responce) {
		let reviews = responce['reviews'];
		 for (let i = 0; i < reviews.length; i++) {
			let listName = [];
			let listFeedback = [];

			listName.push(reviews[i]["name"]);
			listFeedback.push(reviews[i]["text"]);

			if (i > 3 ) {
				$(".feedback-boxes-disable").append('<div class="feedback-box"><div class="feedback-box__content"><h3 class="feedback-box__title">'+ listName[0] +'</h3><p class="feedback-box__text">'+ listFeedback[0] +'</p></div></div>');
			} else {
				$(".feedback-boxes").append('<div class="feedback-box"><div class="feedback-box__content"><h3 class="feedback-box__title">'+ listName[0] +'</h3><p class="feedback-box__text">'+ listFeedback[0] +'</p></div></div>');
			}

		} 
	} 
});


$.ajax({ 
url: "https://api.rostovrepair161.ru/api/jobs", 
method: "GET",
success: function(responce) {
	let jobs = responce['jobs'];
		for (let i = 0; i < jobs.length; i++) {
		$(".works-slider").append('<div class="works-slider__item" style="background: url('+ jobs[i].images[0].photo +') no-repeat center center"><h3 class="works-slider__title">'+ jobs[i].location +'</h3><span class="works-more" data-id='+ jobs[i].id_job +'>Подробнее</span></div>');
		$('.works-more').on('click', function() {
			let id = $(this).data('id');
			let imageList = [];
				if(jobs[i].id_job === id){
					$.each(jobs[i]["images"],function(index, val){
						imageList.push({
							"src": val.photo,
							'thumb': val.photo,
							'subHtml': '<p>'+ jobs[i].description +'</p>'
						});
					});
					$(this).lightGallery({
					dynamic: true,
					dynamicEl:imageList
					})
				}	
		});
	}
	$('.works-slider')[0].slick.refresh();
} 
});


$('.works-slider').slick({
	prevArrow: $('.prev-arrow'),
	nextArrow: $('.next-arrow'),
	slidesToShow: 1,
	infinite: false,
	initialSlide:0,
	variableWidth: true
});

let openTooltip = $('.repair-cost__included')
let tooltip = $('.tooltip');

openTooltip.mouseover(function () { 
	tooltip.fadeIn(200);
});
openTooltip.mouseout(function () {
	tooltip.fadeOut(200);
});

$('.feedback__btn-next').click(function(){
	$('.feedback-boxes-disable').show();
	$('.feedback__btn-next').hide();
});

$(".hero .btn_transaprent").click(function (event) {
	event.preventDefault();
	let elementClick = $('#calculator');
	let destination = $(elementClick).offset().top;
	$("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
});


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

//Модальное окно

	$('.btn__feedback').click(function() {
		$('.modal-feedback').show();
		$('body').css('overflow','hidden');
	});

	// Клик по ссылке "Закрыть".
	$('.close_modal-feedback').click(function() {
		$('.modal-feedback').hide();
		$('body').css('overflow','visible');
	});        
 
	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('.modal-feedback').hide();
			$('body').css('overflow','visible');
		}
	});
	
	// Клик по фону, но не по окну.
	$('.modal-feedback').click(function(e) {
		if ($(e.target).closest('.modal-feedback__container').length == 0) {
			$(this).hide();		
			$('body').css('overflow','visible');		
		}
	});

////////////////

let objectType = document.querySelector('#ObjectType');
let stateType = document.querySelector('#state');
let objectItem = objectType.querySelectorAll('.list__item');
let stateItem = stateType.querySelectorAll('.list__item')


objectType.addEventListener('click', (event) => {
  let target = event.target;
  if(target.classList.contains('list__item')) {
    for(let i = 0; i < objectItem.length; i++) {
      objectItem[i].classList.remove('item_active');
    }
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

$('#btn_feedback ').on('click',function() {
	let name = $('#form_name').val();
	let text = $('#form_text').val();

let val =	$("#modal-feedback__form").validate({
		rules: {
			name: {
				required: true,
				normalizer: function(value) {
					return $.trim(value);
				}
			},
			feedback: {
				required: true,
				minlength: 5,
				normalizer: function(value) {
					return $.trim(value);
				}
			}	
		},
		messages: {
			name: "Пожалуйста введите имя",
			feedback: {
				required: "Напишите отзыв",
				minlength: "Текст должен содержать минимум 5 символов"
			}
		}
	});

	if ( val.form() ){
		$.ajax({
			method: "POST", 
			url: "https://api.rostovrepair161.ru/api/add-review", 
			data: { 
				name: name,
				text: text,
				status: 0
			},
			statusCode: {
				201: function () { 
					$('#form_name').val('');
					$('#form_text').val('');
					$('.modal-feedback').hide();
					$('body').css('overflow','visible');
				},
				422: function () { 
					console.log( "ne Ok" );
				}
			}
		})
	}

		event.preventDefault();
});

$('#btn_questions ').on('click',function() {
	let name = $('#call-back_name').val();
	let phone = $('#call-back_phone').val();

	if ( name.length < 1){
		$('#call-back_name').addClass('error_border')
	}
	if ( name.length > 1){
		$('#call-back_name').removeClass('error_border')
	}

	if ( phone.length < 1){
		$('#call-back_phone').addClass('error_border')
	}
	if ( phone.length > 1){
		$('#call-back_phone').removeClass('error_border')
	}

	$.ajax({
		method: "POST", 
		url: "https://api.rostovrepair161.ru/api/add-feedback", 
		data: { 
			name: name,
			phone: phone,
		},
		statusCode: {
			201: function () {
				$('#call-back_name').val('');
				$('#call-back_phone').val('');
				console.log( "Ok" );
			},
			422: function () { 
				console.log( "ne Ok" );
			}
		}
	})
	event.preventDefault();
});

$('#footerForm__btn ').on('click',function() {
	let phone = $('#footerForm__phone').val();

	if ( phone.length < 1){
		$('#footerForm__phone').addClass('footer-form__input_error')
	}
	if ( phone.length > 1){
		$('#footerForm__phone').removeClass('footer-form__input_error')
	}

	$.ajax({
		method: "POST", 
		url: "https://api.rostovrepair161.ru/api/add-feedback", 
		data: { 
			name: 'Узнать имя',
			phone: phone,
		},
		statusCode: {
			201: function () { 
				console.log( "Ok" );
			},
			422: function () { 
				console.log( "ne Ok" );
			}
		}
	})
	event.preventDefault();
});

 
