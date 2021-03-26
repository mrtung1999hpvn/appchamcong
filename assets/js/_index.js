/** @format */
const express = require('express');
const cors = require('cors');
const pool = require('../../pgconnect');
const _3DES = require('nodejs3des');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use(cors());
app.listen(process.env.PORT || port, () => {
	console.log('Port : ' + port);
});

//******************************************************************************************************* */
//Thanh Tùng fixed

//#region Tài khoản đăng nhập người dùng xử lý người dùng trên hệ thống
app.get('/nguoidung/:taikhoan/:matkhau', async (req, res) => {
	try {
		var taikhoan = req.params.taikhoan; // req.body lấy dữ liệu từ client về server
		var matkhau = req.params.matkhau; // req.body lấy dữ liệu từ client về server
		// console.log(taikhoan + ' ' + matkhau);
		const newTodo = await pool.query(
			`     select * from tbl_nguoi_dung 
            where ten_dang_nhap = N'` +
				taikhoan +
				`' 
            AND mat_khau = N'` +
				_3DES.encrypt(taikhoan, matkhau) +
				`'`
		);
		res.json(newTodo.rows);
	} catch (error) {
		console.error(error.message);
	}
});



app.put('/nguoidung', async (req, res) => {
	//Sua
	const { mat_khau } = req.body;
	// console.log(mat_khau)
	const UpdateLoaiDoiTuong = await pool.query(
		`UPDATE tbl_nguoi_dung SET mat_khau = N'`+mat_khau+`' WHERE ten_dang_nhap = N'admin'`
	);
});
//#endregion

//******************************************************************************************************* */




//******************************************************************************************************* */ 
//******************************************************************************************************* */
//#region Cac bang nguoi dung he thong 

//#region LoaiDoiTuong
app.get('/loaidoituong/:id/:nguoidung', async (req, res) => {
	try {
		var id = req.params.id; // req.body lấy dữ liệu từ client về server
		console.log(id);
		const newTodo = await pool.query(
			'select * from ' +
				NguoiDung.TenBang +
				" where ten_dang_nhap = '" +
				id +
				"'"
		);
		res.json(newTodo.rows);
	} catch (error) {
		console.error(error.message);
	}
});
//#endregion

//#region LoaiDoiTuong
app.post('/loaidoituong', async (req, res) => {
	//Them
	try {
		const {
			ma_loai_doi_tuong,
			ten_loai_doi_tuong,
			tien_bao_cong_no,
			ghi_chu,
		} = req.body;
		const newTodo = await pool.query(
			'insert into ' +
				LoaiDoiTuong.TenBang +
				'(' +
				LoaiDoiTuong.ma_loai_doi_tuong +
				',' +
				LoaiDoiTuong.ten_loai_doi_tuong +
				',' +
				LoaiDoiTuong.ghi_chu +
				',' +
				LoaiDoiTuong.tien_bao_cong_no +
				') ' +
				"values(N'" +
				ma_loai_doi_tuong +
				"',N'" +
				ten_loai_doi_tuong +
				"', N'" +
				ghi_chu +
				"' , " +
				tien_bao_cong_no +
				')'
		);

		res.json(newTodo);
	} catch (error) {
		console.error(error.message);
	}
});

app.get('/loaidoituong', async (req, res) => {
	//Hien datatable
	const allTodo = await pool.query(
		`SELECT * FROM tbl_loai_doi_tuong`
	);
	res.json(allTodo.rows);
});
app.put('/loaidoituong/:id', async (req, res) => {
	//Sua
	const { _MaLDT, TenDT, TienCanhBaoNo, GhiChu } = req.body;
	const UpdateLoaiDoiTuong = await pool.query(
		'UPDATE tbl_loai_doi_tuong ' +
			"SET ten_loai_doi_tuong = N'" +
			TenDT +
			"',ghi_chu = N'" +
			GhiChu +
			"',tien_bao_cong_no = " +
			TienCanhBaoNo +
			' ' +
			"WHERE ma_loai_doi_tuong = N'" +
			_MaLDT +
			"' "
	);
});
app.delete('/loaidoituong/:id', async (req, res) => {
	const { id } = req.params;
	const UpdateLoaiDoiTuong = await pool.query(
		"DELETE FROM tbl_loai_doi_tuong WHERE ma_loai_doi_tuong = N'" +
			id +
			"'"
	);
	console.log(id);
});














////#endregion
//******************************************************************************************************* */
//******************************************************************************************************* */






//#region TenBang

//Bang nguoi dung
const NguoiDung = {
	TenBang: 'tbl_nguoi_dung',
};
const LoaiDoiTuong = {
	TenBang: 'tbl_loai_doi_tuong',
	ma_loai_doi_tuong: 'ma_loai_doi_tuong',
	ten_loai_doi_tuong: 'ten_loai_doi_tuong',
	ghi_chu: 'ghi_chu',
	tien_bao_cong_no: 'tien_bao_cong_no',
};

//#endregion


app.get('/loaidoituong-topreferrals', async (req, res) => {
	//Hien datatable
	const allTodo = await pool.query(
		`    select a.ma_loai_doi_tuong,a.ten_loai_doi_tuong,SUM(b.no_mua-b.no_ban)"Tong",COUNT(b.ma_doi_tuong)"SoLuongDoiTuong" from tbl_loai_doi_tuong as a , tbl_doi_tuong as b
    where a.loai_doi_tuong_id = b.loai_doi_tuong_id
    group by a.ma_loai_doi_tuong ,a.ten_loai_doi_tuong
    order by  "Tong" DESC`
	);
	res.json(allTodo.rows);
});

//#endregion

//#region DoiTuong

app.get('/doituong-khachhang', async (req, res) => {
	const doituong_khachhang = await pool.query(
		'select b.ten_loai_doi_tuong , a.ma_doi_tuong , a.ten_doi_tuong ,a.dia_chi , a.dien_thoai,a.ngay_sinh ,a.ma_so_thue ,a.no_mua , a.kieu ,a.chiet_khau ,a.vip,a.ngay_bao_cong_no from tbl_doi_tuong AS a, tbl_loai_doi_tuong AS b ' +
			' where a.loai_doi_tuong_id = b.loai_doi_tuong_id and (a.kieu = 2 or a.kieu = 0) '
	);
	res.json(doituong_khachhang.rows);
	// console.log(doituong_khachhang.rows)
});

app.post('/doituong-khachhang', async (req, res) => {
	//Them
	try {
		const {
			ma_loai_doi_tuong,
			ma_doi_tuong,
			ten_doi_tuong,
			dia_chi,
			dien_thoai,
			ma_so_thue,
			no_mua,
			kieu,
			chiet_khau,
			ghi_chu,
			so_ngay_canh_bao_no,
			vip,
			ngay_sinh,
		} = req.body;
		console.log(ma_loai_doi_tuong);
		const newTodo = await pool.query(
			`insert into tbl_doi_tuong(loai_doi_tuong_id,ma_doi_tuong,ten_doi_tuong,dia_chi,dien_thoai,ma_so_thue,no_mua_dau_ky,ngay_sinh,kieu,chiet_khau,no_mua,ngay_bao_cong_no,vip,ghi_chu)
      values(
        (select loai_doi_tuong_id from tbl_loai_doi_tuong where ma_loai_doi_tuong = N'` +
				ma_loai_doi_tuong +
				`'),
        '` +
				ma_doi_tuong +
				`',
        N'` +
				ten_doi_tuong +
				`',
        N'` +
				dia_chi +
				`',
        N'` +
				dien_thoai +
				`',
        N'` +
				ma_so_thue +
				`',
        ` +
				no_mua +
				`,
        '` +
				ngay_sinh +
				`',
        ` +
				kieu +
				`,
        ` +
				chiet_khau +
				`,
        ` +
				no_mua +
				`,
        ` +
				so_ngay_canh_bao_no +
				`,
        ` +
				vip +
				`,
        N'` +
				ghi_chu +
				`'
      )`
		);
		res.json(newTodo);
	} catch (error) {
		console.error(error.message);
	}
});

app.get('/doituong-ncc', async (req, res) => {
	const doituong_khachhang = await pool.query(
		'select b.ten_loai_doi_tuong , a.ma_doi_tuong , a.ten_doi_tuong ,a.dia_chi , a.dien_thoai,a.ngay_sinh ,a.ma_so_thue ,a.no_ban , a.kieu ,a.chiet_khau ,a.vip from tbl_doi_tuong AS a, tbl_loai_doi_tuong AS b ' +
			' where a.loai_doi_tuong_id = b.loai_doi_tuong_id and (a.kieu = 1 or a.kieu=2) '
	);
	res.json(doituong_khachhang.rows);
	console.log(doituong_khachhang.rows);
});
app.get('/doituong-khachhang-ncc', async (req, res) => {
	const doituong_khachhang = await pool.query(
		'select b.ten_loai_doi_tuong , a.ma_doi_tuong , a.ten_doi_tuong ,a.dia_chi , a.dien_thoai,a.ngay_sinh ,a.ma_so_thue ,a.no_mua,a.no_ban,(a.no_mua-a.no_ban) AS TongTien,a.no_ban , a.kieu ,a.chiet_khau ,a.vip from tbl_doi_tuong AS a, tbl_loai_doi_tuong AS b' +
			' where a.loai_doi_tuong_id = b.loai_doi_tuong_id'
	);
	res.json(doituong_khachhang.rows);
	console.log(doituong_khachhang.rows);
});

//#endregion

//********************************************** */
app.get('/connect', async (req, res) => {
	try {
		const Todo = await pool.query(`select * from tbl_hang`);
		Todo.rows.length > 0
			? res.json([{ connect: true }])
			: res.json([{ connect: false }]);
	} catch (error) {
		console.error(error);
	}
});

//********************************************** */
/***********************/
/*       Mục lục       */
/***********************/

// Dòng 20 : Tài khoản đăng nhập người dùng xử lý người dùng trên hệ thống
// Dòng 60 :Cac bang nguoi dung he thong
