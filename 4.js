//xử lý đóng gói code && toán tử 3 ngôi
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
	// tinh phan tu hien tai, gom cụm code, lồng hàm
	window.ID=(nut=='nutPhai')?((window.ID==(slides.length-1))?0:window.ID+1):((window.ID==0)?slides.length-1:window.ID-1);
	//3 ngoi chua long ham, gom lai sẽ thanh lệnh ngay bên trên
	// if(nut=='nutPhai'){
	// 	window.ID=(window.ID==(slides.length-1))?0:window.ID+1;	
	// }
	// // xử lý bên phải
	// else if(nut=='nutTrai'){
	// 	window.ID=(window.ID==0)?slides.length-1:window.ID-1;		
	// }
	var slideTiepTheo=slides[window.ID];
	// kiểm tra kết thúc chuyển động
	var xuLyHienTaiKetThucChuyenDong=function(){		
			
			this.classList.remove((nut=='nutPhai')?'bienMatKhiAnNext':'bienMatKhiAnPre');
			this.classList.remove('xuathien');
			trangthai2chuyendong++;
			trangthai=(trangthai2chuyendong==2)?'dungyen':trangthai;
		}
		var xuLyTiepTheoKetThucChuyenDong=function(){
			this.classList.remove((nut=='nutPhai')?'hienRaKhiAnNext':'hienRaKhiAnPre');
			this.classList.add('xuathien');
			trangthai2chuyendong++;
			trangthai=(trangthai2chuyendong==2)?"dungyen":trangthai;
		}
		slideHienTai.addEventListener('webkitAnimationEnd',xuLyHienTaiKetThucChuyenDong);
		slideTiepTheo.addEventListener('webkitAnimationEnd',xuLyTiepTheoKetThucChuyenDong);
		// toán tử 3 ngôi chổ này
		slideHienTai.classList.add((nut=='nutPhai')?'bienMatKhiAnNext':'bienMatKhiAnPre');
		slideTiepTheo.classList.add((nut=='nutPhai')?'hienRaKhiAnNext':'hienRaKhiAnPre');
}
	// hàm chuyển slide phải
	var chuyenSlidePhai=function(){
	xacDinh2SlideVaChuyenDong('nutPhai');
	};
	 // hàm chuyển slide trái
	var chuyenSlideTrai=function(){
	xacDinh2SlideVaChuyenDong('nutTrai');
	};
	 //hành động
	nutPhai.addEventListener('click',chuyenSlidePhai);
	nutTrai.addEventListener('click',chuyenSlideTrai);
	},false);
	