
	document.addEventListener("DOMContentLoaded",function(){
		var nutPhai=document.querySelector('.chuyenslide b.phai'),
	nutTrai=document.querySelector('.chuyenslide b.trai');
var slides=document.querySelectorAll('.motslide');
// console.log(slides);
	window.ID=0;
	// gọi sự kiện click
	// hàm chuyển slide phải
	var chuyenSlidePhai=function(){
		for (var k = 0; k <slides.length; k++) {
				slides[k].classList.remove('xuathien');
				slides[k].classList.remove('bienMatKhiAnNext');
				slides[k].classList.remove('hienRaKhiAnNext');
				slides[k].classList.remove('bienMatKhiAnPre');
				slides[k].classList.remove('hienRaKhiAnPre');

			}
		var slideHienTai=slides[window.ID];
		if(window.ID==(slides.length-1)){
			window.ID=0;
		}
		else{
			window.ID=window.ID+1;	
		}
		var slideTiepTheo=slides[window.ID];
		// THÊM CHUYỂN ĐỘNG
		slideHienTai.classList.add('bienMatKhiAnNext');
		slideHienTai.classList.remove('xuathien');
		slideTiepTheo.classList.add('hienRaKhiAnNext');
		slideTiepTheo.classList.add('xuathien');
	};
	 // hết chuyển slide phải
	 // hàm chuyển slide trái
	var chuyenSlideTrai=function(){
		for (var k = 0; k <slides.length; k++) {
				slides[k].classList.remove('xuathien');
				slides[k].classList.remove('bienMatKhiAnNext');
				slides[k].classList.remove('hienRaKhiAnNext');
				slides[k].classList.remove('bienMatKhiAnPre');
				slides[k].classList.remove('hienRaKhiAnPre');
			}
		var slideHienTai=slides[window.ID];
		if(window.ID==0){
			window.ID=slides.length-1;
		}
		else{
			window.ID=window.ID-1;	
		}
		var slideTiepTheo=slides[window.ID];
		// THÊM CHUYỂN ĐỘNG
		slideHienTai.classList.add('bienMatKhiAnPre');
		slideHienTai.classList.remove('xuathien');
		slideTiepTheo.classList.add('hienRaKhiAnPre');
		slideTiepTheo.classList.add('xuathien');
	};
	 // hết chuyển slide trái
	nutPhai.addEventListener('click',chuyenSlidePhai);
	nutTrai.addEventListener('click',chuyenSlideTrai);
		
	},false);
	