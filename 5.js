//xử lý đóng gói code && toán tử 3 ngôi
document.addEventListener("DOMContentLoaded",function(){
			window.ID=0;
			window.luachon=1;
		var luachon=document.querySelectorAll('.btn');
		for (var i = 0; i < luachon.length; i++) {
		luachon[i].onclick=function(){
			for (var k = 0; k <luachon.length; k++) {
				luachon[k].classList.remove('active');
			}
			this.classList.toggle('active');
			window.luachon=this.getAttribute('data-id');
		}
			var nutPhai=document.querySelector('.chuyenslide b.phai'),
			nutTrai=document.querySelector('.chuyenslide b.trai');
		var slides=document.querySelectorAll('.motslide');
		var trangthai="dungyen";
function xacDinh2SlideVaChuyenDong(nut,i){
	if(trangthai=="dangchuyendong"){return false;}
		//đang đứng yên thì xử lý chuyển động
		trangthai="dangchuyendong";
	var trangthai2chuyendong=0;
	var slideHienTai=slides[window.ID];
	// tinh phan tu hien tai, gom cụm code, lồng hàm
	window.ID=(nut=='nutPhai')?((window.ID==(slides.length-1))?0:window.ID+1):((window.ID==0)?slides.length-1:window.ID-1);
	var slideTiepTheo=slides[window.ID];
	// kiểm tra kết thúc chuyển động
	var xuLyHienTaiKetThucChuyenDong=function(){				
			this.classList.remove((nut=='nutPhai')?'bienMatKhiAnNext'+i:'bienMatKhiAnPre'+i);
			this.classList.remove('xuathien');
			trangthai2chuyendong++;
			trangthai=(trangthai2chuyendong==2)?'dungyen':trangthai;
		}
	var xuLyTiepTheoKetThucChuyenDong=function(){
			this.classList.remove((nut=='nutPhai')?'hienRaKhiAnNext'+i:'hienRaKhiAnPre'+i);
			this.classList.add('xuathien');
			trangthai2chuyendong++;
			trangthai=(trangthai2chuyendong==2)?"dungyen":trangthai;
		}
		slideHienTai.addEventListener('webkitAnimationEnd',xuLyHienTaiKetThucChuyenDong);
		slideTiepTheo.addEventListener('webkitAnimationEnd',xuLyTiepTheoKetThucChuyenDong);
		// toán tử 3 ngôi chổ này
		slideHienTai.classList.add((nut=='nutPhai')?'bienMatKhiAnNext'+i:'bienMatKhiAnPre'+i);
		slideTiepTheo.classList.add((nut=='nutPhai')?'hienRaKhiAnNext'+i:'hienRaKhiAnPre'+i);
}
	// hàm chuyển slide phải
	var chuyenSlidePhai=function(){
	xacDinh2SlideVaChuyenDong('nutPhai',window.luachon);
	};
	 // hàm chuyển slide trái
	var chuyenSlideTrai=function(){
	xacDinh2SlideVaChuyenDong('nutTrai',window.luachon);
	};
	 //hành động
	nutPhai.addEventListener('click',chuyenSlidePhai);
	nutTrai.addEventListener('click',chuyenSlideTrai);
		}
	
		
	},false);
	