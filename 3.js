//xử lý đóng gói code

	document.addEventListener("DOMContentLoaded",function(){
			window.ID=0;
		var nutPhai=document.querySelector('.chuyenslide b.phai'),
			nutTrai=document.querySelector('.chuyenslide b.trai');
		var slides=document.querySelectorAll('.motslide');
		var trangthai="dungyen";
function xacDinh2SlideVaChuyenDong(nut){
	if(trangthai=="dangchuyendong"){return false;}
		//đang đứng yên thì xử lý chuyển động
		trangthai="dangchuyendong";
	var trangthai2chuyendong=0;
	var slideHienTai=slides[window.ID];
	//xu ly ben trai
	if(nut=='nutPhai'){
			if(window.ID==(slides.length-1)){
			window.ID=0;
		}
		else {
			window.ID=window.ID+1;	
		}
	}
	// xử lý bên phải
	else if(nut=='nutTrai'){
		if(window.ID==0){
			window.ID=slides.length-1;
		}
		else{
			window.ID=window.ID-1;	
		}		
	}
	var slideTiepTheo=slides[window.ID];
	// kiểm tra kết thúc chuyển động
	var xuLyHienTaiKetThucChuyenDong=function(){		
			this.classList.remove('xuathien');
			this.classList.remove('bienMatKhiAnPre');
			this.classList.remove('bienMatKhiAnNext');
			trangthai2chuyendong++;
			if(trangthai2chuyendong==2){
			trangthai="dungyen";
			}
		}
		var xuLyTiepTheoKetThucChuyenDong=function(){
			this.classList.remove('hienRaKhiAnPre');
			this.classList.remove('hienRaKhiAnNext');
			this.classList.add('xuathien');
			trangthai2chuyendong++;
			if(trangthai2chuyendong==2){
			trangthai="dungyen";
			}
		}
		slideHienTai.addEventListener('webkitAnimationEnd',xuLyHienTaiKetThucChuyenDong);
		slideTiepTheo.addEventListener('webkitAnimationEnd',xuLyTiepTheoKetThucChuyenDong);
		if(nut=='nutPhai'){
		slideHienTai.classList.add('bienMatKhiAnNext');	
		slideTiepTheo.classList.add('hienRaKhiAnNext');	
		
		}
	// xử lý bên phải
		else if(nut=='nutTrai'){
		slideHienTai.classList.add('bienMatKhiAnPre');	
		slideTiepTheo.classList.add('hienRaKhiAnPre');
		}
		
}
	// hàm chuyển slide phải
	var chuyenSlidePhai=function(){
	xacDinh2SlideVaChuyenDong('nutPhai');
	};
	 // hết chuyển slide phải
	 // hàm chuyển slide trái
	var chuyenSlideTrai=function(){
	xacDinh2SlideVaChuyenDong('nutTrai');
	};
	 // hết chuyển slide trái
	nutPhai.addEventListener('click',chuyenSlidePhai);
	nutTrai.addEventListener('click',chuyenSlideTrai);
	},false);
	