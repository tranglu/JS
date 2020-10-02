//xử lý click liên tục k bị lỗi

	document.addEventListener("DOMContentLoaded",function(){
		var nutPhai=document.querySelector('.chuyenslide b.phai'),
	nutTrai=document.querySelector('.chuyenslide b.trai');
var slides=document.querySelectorAll('.motslide');
var trangthai="dungyen";
// console.log(slides);
	window.ID=0;
	// gọi sự kiện click
	// hàm chuyển slide phải
	var chuyenSlidePhai=function(){
		//kiểm tra đang chuyển động thì k cho chạy
		if(trangthai=="dangchuyendong"){return false;}
		//đang đứng yên thì xử lý chuyển động
		trangthai="dangchuyendong";
		var trangthai2chuyendong=0;
		var slideHienTai=slides[window.ID];
		if(window.ID==(slides.length-1)){
			window.ID=0;
		}
		else{
			window.ID=window.ID+1;	
		}
		var slideTiepTheo=slides[window.ID];
		// xử lý hành động tiếp theo
		var xuLyHienTaiKetThucChuyenDong=function(){
			this.classList.remove('xuathien');
			this.classList.remove('bienMatKhiAnNext');
			trangthai2chuyendong++;
			if(trangthai2chuyendong==2){
			trangthai="dungyen";
			}
		}
		var xuLyTiepTheoKetThucChuyenDong=function(){
			this.classList.remove('hienRaKhiAnNext');
			this.classList.add('xuathien');
			trangthai2chuyendong++;
			if(trangthai2chuyendong==2){
			trangthai="dungyen";
			}
		}

		//nghe ngóng xem chuyển động xong thì hành động tiếp theo
		slideHienTai.addEventListener('webkitAnimationEnd',xuLyHienTaiKetThucChuyenDong);
		slideTiepTheo.addEventListener('webkitAnimationEnd',xuLyTiepTheoKetThucChuyenDong);
		// THÊM CHUYỂN ĐỘNG
		slideHienTai.classList.add('bienMatKhiAnNext');	
		slideTiepTheo.classList.add('hienRaKhiAnNext');		
	};
	 // hết chuyển slide phải
	 // hàm chuyển slide trái
	var chuyenSlideTrai=function(){
		//kiểm tra đang chuyển động thì k cho chạy
		if(trangthai=="dangchuyendong"){return false;}
		//đang đứng yên thì xử lý chuyển động
		trangthai="dangchuyendong";
		var trangthai2chuyendong=0;
		var slideHienTai=slides[window.ID];
		if(window.ID==0){
			window.ID=slides.length-1;
		}
		else{
			window.ID=window.ID-1;	
		}
		var slideTiepTheo=slides[window.ID];
		// xử lý hành động tiếp theo
		var xuLyHienTaiKetThucChuyenDong=function(){
			
			this.classList.remove('xuathien');
			this.classList.remove('bienMatKhiAnPre');
			trangthai2chuyendong++;
			if(trangthai2chuyendong==2){
			trangthai="dungyen";
			}
		}
		var xuLyTiepTheoKetThucChuyenDong=function(){
			this.classList.remove('hienRaKhiAnPre');
			this.classList.add('xuathien');
			
			trangthai2chuyendong++;
			if(trangthai2chuyendong==2){
			trangthai="dungyen";
			}
		}

		//nghe ngóng xem chuyển động xong thì hành động tiếp theo
		slideHienTai.addEventListener('webkitAnimationEnd',xuLyHienTaiKetThucChuyenDong);
		slideTiepTheo.addEventListener('webkitAnimationEnd',xuLyTiepTheoKetThucChuyenDong);
		// THÊM CHUYỂN ĐỘNG
		slideHienTai.classList.add('bienMatKhiAnPre');	
		slideTiepTheo.classList.add('hienRaKhiAnPre');		
	};
	 // hết chuyển slide trái
	nutPhai.addEventListener('click',chuyenSlidePhai);
	nutTrai.addEventListener('click',chuyenSlideTrai);
		
	},false);
	