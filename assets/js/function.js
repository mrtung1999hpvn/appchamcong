//#region HamXuLy
const MaNV = (data)=>{
	const Mang = []
	if(data.length===0)
	{
		return "NV0001"
	}
	else{
		data.map(
			(x)=>{
				Mang.push(parseInt(x.ma_nhan_vien.match(/\d/g).join("")))
			}
		)
		Mang.sort(function(a, b){return b - a});
		return "NV" + "0".repeat(4-((Mang[0]+1).toString().length)) +(Mang[0]+1).toString()
	}
}
const MaLDT = (data)=>{
	const Mang = []
	if(data.length===0)
	{
		return "LDT0001"
	}
	else{
		data.map(
			(x)=>Mang.push(parseInt(x.ma_loai_doi_tuong.match(/\d/g).join("")))
			
		)
		Mang.sort(function(a, b){return b - a});
		return "LDT" + "0".repeat(4-((Mang[0]+1).toString().length)) +(Mang[0]+1).toString()
	}
}
const MaDT = (data)=>{
	const Mang = []
	if(data.length===0)
	{
		return "DT0001"
	}
	else{
		data.map(
			(x)=>Mang.push(parseInt(x.ma_doi_tuong.match(/\d/g).join("")))
			
		)
		Mang.sort(function(a, b){return b - a});
		return "DT" + "0".repeat(4-((Mang[0]+1).toString().length)) +(Mang[0]+1).toString()
	}
}

const MaDVT = (data)=>{
	const Mang = []
	if(data.length===0)
	{
		return "DVT0001"
	}
	else{
		data.map(
			(x)=>Mang.push(parseInt(x.ma_dvt.match(/\d/g).join("")))
			
		)
		Mang.sort(function(a, b){return b - a});
		return "DVT" + "0".repeat(4-((Mang[0]+1).toString().length)) +(Mang[0]+1).toString()
	}
}

const MaLH = (data)=>{
	const Mang = []
	if(data.length===0)
	{
		return "LH0001"
	}
	else{
		data.map(
			(x)=>Mang.push(parseInt(x.ma_loai_hang.match(/\d/g).join("")))
			
		)
		Mang.sort(function(a, b){return b - a});
		return "LH" + "0".repeat(4-((Mang[0]+1).toString().length)) +(Mang[0]+1).toString()
	}
}
const MaNH = (data)=>{
	const Mang = []
	if(data.length===0)
	{
		return "NH0001"
	}
	else{
		data.map(
			(x)=>Mang.push(parseInt(x.ma_nganh_hang.match(/\d/g).join("")))
			
		)
		Mang.sort(function(a, b){return b - a});
		return "NH" + "0".repeat(4-((Mang[0]+1).toString().length)) +(Mang[0]+1).toString()
	}
}
const MaHang = (data)=>{
	const Mang = []
	if(data.length===0)
	{
		return "H0001"
	}
	else{
		data.map(
			(x)=>Mang.push(parseInt(x.ma_hang.match(/\d/g).join("")))
			
		)
		Mang.sort(function(a, b){return b - a});
		return "H" + "0".repeat(4-((Mang[0]+1).toString().length)) +(Mang[0]+1).toString()
	}
}
const HoaDonBanID = (data,ngay)=>{
	const Mang =[]
	if(data.length===0){
		return "HD"+ngay.split('-')[0] + ngay.split('-')[1] + ngay.split('-')[2].substring(2)+'-001'
	}else{
	  data.map(x=> Mang.push(parseInt(x.hoa_don_ban_id.split('-')[1])) )
	  Mang.sort(function(a, b){return b - a});
	  return "HD"+ngay.split('-')[0] + ngay.split('-')[1] + ngay.split('-')[2].substring(2)+'-'+"0".repeat(3-(Mang[0]+1).toString().length)+ (Mang[0]+1).toString()
	}
  }

  const KhachHangTraID = (data,ngay)=>{
	const Mang =[]
	if(data.length===0){
		return "KTH"+ngay.split('-')[0] + ngay.split('-')[1] + ngay.split('-')[2].substring(2)+'-001'
	}else{
	  data.map(x=> Mang.push(parseInt(x.hoa_don_ban_id.split('-')[1])) )
	  Mang.sort(function(a, b){return b - a});
	  return "KTH"+ngay.split('-')[0] + ngay.split('-')[1] + ngay.split('-')[2].substring(2)+'-'+"0".repeat(3-(Mang[0]+1).toString().length)+ (Mang[0]+1).toString()
	}
  }
//   console.log(HoaDonBanID(data,'31-01-2021'))
  

const PhieuNhapID = (data,ngay)=>{
	const Mang =[]
	if(data.length===0){
		return "PN"+ngay.split('-')[0] + ngay.split('-')[1] + ngay.split('-')[2].substring(2)+'-001'
	}else{
	  data.map(x=> Mang.push(parseInt(x.phieu_nhap_id.split('-')[1])) )
	  Mang.sort(function(a, b){return b - a});
	  return "PN"+ngay.split('-')[0] + ngay.split('-')[1] + ngay.split('-')[2].substring(2)+'-'+"0".repeat(3-(Mang[0]+1).toString().length)+ (Mang[0]+1).toString()
	}
  }

  const PhieuTraNCCID = (data,ngay)=>{
	const Mang =[]
	if(data.length===0){
		return "THN"+ngay.split('-')[0] + ngay.split('-')[1] + ngay.split('-')[2].substring(2)+'-001'
	}else{
	  data.map(x=> Mang.push(parseInt(x.phieu_nhap_id.split('-')[1])) )
	  Mang.sort(function(a, b){return b - a});
	  return "THN"+ngay.split('-')[0] + ngay.split('-')[1] + ngay.split('-')[2].substring(2)+'-'+"0".repeat(3-(Mang[0]+1).toString().length)+ (Mang[0]+1).toString()
	}
  }

  
  const PhieuThuID = (data,ngay)=>{
	const Mang =[]
	if(data.length===0){
		return "PT"+ngay.split('-')[0] + ngay.split('-')[1] + ngay.split('-')[2].substring(2)+'-001'
	}else{
	  data.map(x=> Mang.push(parseInt(x.thu_chi_id.split('-')[1])) )
	  Mang.sort(function(a, b){return b - a});
	  return "PT"+ngay.split('-')[0] + ngay.split('-')[1] + ngay.split('-')[2].substring(2)+'-'+"0".repeat(3-(Mang[0]+1).toString().length)+ (Mang[0]+1).toString()
	}
  }
  const PhieuChiID = (data,ngay)=>{
	const Mang =[]
	if(data.length===0){
		return "PC"+ngay.split('-')[0] + ngay.split('-')[1] + ngay.split('-')[2].substring(2)+'-001'
	}else{
	  data.map(x=> Mang.push(parseInt(x.thu_chi_id.split('-')[1])) )
	  Mang.sort(function(a, b){return b - a});
	  return "PC"+ngay.split('-')[0] + ngay.split('-')[1] + ngay.split('-')[2].substring(2)+'-'+"0".repeat(3-(Mang[0]+1).toString().length)+ (Mang[0]+1).toString()
	}
  }



  const ThanhToanNCCID = (data,ngay)=>{
	const Mang =[]
	if(data.length===0){
		return "TTN"+ngay.split('-')[0] + ngay.split('-')[1] + ngay.split('-')[2].substring(2)+'-001'
	}else{
	  data.map(x=> Mang.push(parseInt(x.thanh_toan_id.split('-')[1])) )
	  Mang.sort(function(a, b){return b - a});
	  return "TTN"+ngay.split('-')[0] + ngay.split('-')[1] + ngay.split('-')[2].substring(2)+'-'+"0".repeat(3-(Mang[0]+1).toString().length)+ (Mang[0]+1).toString()
	}
  }
  const ThanhToanKHID = (data,ngay)=>{
	const Mang =[]
	if(data.length===0){
		return "KTT"+ngay.split('-')[0] + ngay.split('-')[1] + ngay.split('-')[2].substring(2)+'-001'
	}else{
	  data.map(x=> Mang.push(parseInt(x.thanh_toan_id.split('-')[1])) )
	  Mang.sort(function(a, b){return b - a});
	  return "KTT"+ngay.split('-')[0] + ngay.split('-')[1] + ngay.split('-')[2].substring(2)+'-'+"0".repeat(3-(Mang[0]+1).toString().length)+ (Mang[0]+1).toString()
	}
  }

//#endregion
module.exports = {
	MaNV,MaLDT,MaDT,MaDVT,MaLH,MaNH,MaHang,HoaDonBanID,KhachHangTraID,
	PhieuNhapID,PhieuTraNCCID,
	PhieuThuID,PhieuChiID,
	ThanhToanNCCID,ThanhToanKHID
}