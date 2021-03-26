/** @format */

// http is an inbuilt module in Node.js
const http = require("http");
/** @format */
const express = require("express");

const cors = require("cors");
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());
const pool = require("./mysqlconnect");

// API

//#region (1) Tổng quan hệ thống

app.get("/Test", async (req, res) => {
  try {
    pool.getConnection((error, connection) => {
      if (error) throw error;
      connection.query("select * from test", (error, rows) => {
        connection.release();
        if (!error) {
          res.send(rows);
        } else {
          console.log(error);
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
});


app.get("/DangNhap/:TaiKhoan/:MatKhau", async (req, res) => {
  try {
    const TaiKhoan = req.params.TaiKhoan
    const MatKhau = req.params.MatKhau
    pool.getConnection((error, connection) => {
      if (error) throw error;
      connection.query(`select * from tbl_nguoi_dung where ten_dang_nhap = N'${TaiKhoan}' and mat_khau = N'${MatKhau}'
      `, (error, rows) => {
        connection.release();
        if (!error) {
          console.log(rows)
          res.send(rows);
          
        } else {
          console.log(error);
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
});

// Kiểm tra tài khoản hệ thống
app.get('/KiemTraTaiKhoanHeThong/:TaiKhoan' , (req , res)=>{
  try {
    const TaiKhoan = req.params.TaiKhoan
    pool.getConnection((error, connection) => {
      if (error) throw error;
      connection.query(`
        select * from tbl_nguoi_dung where ten_dang_nhap = N'${TaiKhoan}'
      `, (error, rows) => {
        connection.release();
        if (!error) {
          console.log(rows)
          res.send(rows);
        } else {
          console.log(error);
        }
      });
    });
  } catch (error) {
    
  }

})
app.post(`/DangKyTaiKhoan`,async(req,res)=>{
  try {
    const TaiKhoan = req.body.TaiKhoan
    const MatKhau = req.body.MatKhau
    pool.getConnection((error, connection) => {
      if (error) throw error;
      connection.query("INSERT INTO `tbl_nguoi_dung`( `ten_dang_nhap`, `mat_khau`, `id_nhan_vien`) VALUES (N'"+TaiKhoan+"',N'"+MatKhau+"',1)", (error, rows) => {
        connection.release();
        if (!error) {
          console.log(rows)
          res.send(rows);
        } else {
          console.log(error);
        }
      });
    });
  } catch (error) {
    
  }
})

// Đổi mật khẩu
app.put('/TaiKhoanNguoiDung',(req,res)=>{
  try {
    const id_nguoi_dung = req.body.id_nguoi_dung
    const mat_khau = req.body.mat_khau
    pool.getConnection((error, connection) => {
      if (error) throw error;
      connection.query("UPDATE `tbl_nguoi_dung` SET `mat_khau`='"+mat_khau+"' WHERE id_nguoi_dung = "+id_nguoi_dung
      , (error, rows) => {
        connection.release();
        if (!error) {
          console.log(rows)
          res.send(rows);
        } else {
          console.log(error);
        }
      });
    });
  } catch (error) {
    
  }
})


// Lấy thông tin nhân viên
app.get('/ThongTinNhanVien/:id_nhan_vien' , (req , res)=>{
   try {
    const id_nhan_vien = req.params.id_nhan_vien
    pool.getConnection((error, connection) => {
      if (error) throw error;
      connection.query("select * from tbl_nhan_vien WHERE id_nhan_vien = "+id_nhan_vien, (error, rows) => {
        connection.release();
        if (!error) {
          console.log(rows)
          res.send(rows);
        } else {
          console.log(error);
        }
      });
    });
   } catch (error) {
     
   }

})

//#endregion

//#region (2) Chức năng quản lý tài khoản nhân viên
app.post('/ThemLoaiNhanVien' , (req , res)=>{
  try {
    // const id_nhan_vien = req.body.id_nhan_vien
    const ten_loai_nhan_vien = req.body.ten_loai_nhan_vien
    const ghi_chu = req.body.ghi_chu
    pool.getConnection((error, connection) => {
      if (error) throw error;
      connection.query(`
        INSERT INTO tbl_loai_nhan_vien(ten_loai_nhan_vien, ghi_chu)
        VALUES (N'${ten_loai_nhan_vien}',N'${ghi_chu}');
      `, (error, rows) => {
        connection.release();
        if (!error) {
          console.log(rows)
          res.send(rows);
        } else {
          console.log(error);
        }
      });
    });
  } catch (error) {
    
  }
})
app.get('/DanhSachTaiKhoan' , (req , res)=>{
  try {
    const id_nhan_vien = req.params.id_nhan_vien
    pool.getConnection((error, connection) => {
      if (error) throw error;
      connection.query(`
        select * from tbl_nguoi_dung,tbl_nhan_vien WHERE
        tbl_nguoi_dung.id_nhan_vien = tbl_nhan_vien.id_nhan_vien
      `, (error, rows) => {
        connection.release();
        if (!error) {
          console.log(rows)
          res.send(rows);
        } else {
          console.log(error);
        }
      });
    });
  } catch (error) {
    
  }
})

// Thêm thông tin tài khoản nhân viên
app.post('/ThemThongTinTaiKhoanNhanVien' , (req , res)=>{
  try {
    const id_loai_nhan_vien = req.body.id_loai_nhan_vien
    const ten_nhan_vien = req.body.ten_nhan_vien
    const lien_he = req.body.lien_he
    const noi_quy = req.body.noi_quy
    const ten_dang_nhap = req.body.ten_dang_nhap
    const mat_khau = req.body.mat_khau

    pool.getConnection((error, connection) => {
      if (error) throw error;
      connection.query(`
        INSERT INTO tbl_nhan_vien(id_loai_nhan_vien, ten_nhan_vien, lien_he, noi_quy) 
        VALUES (${id_loai_nhan_vien},N'${ten_nhan_vien}','${lien_he}','${noi_quy}');
        INSERT INTO tbl_nguoi_dung(ten_dang_nhap, mat_khau, id_nhan_vien) 
        VALUES ('${ten_dang_nhap}','${mat_khau}', ( select id_nhan_vien from tbl_nhan_vien where ten_nhan_vien = N'${ten_nhan_vien}' ) );
        
      `, (error, rows) => {
        connection.release();
        if (!error) {
          console.log(rows)
          res.send(rows);
        } else {
          console.log(error);
        }
      });
    });
  } catch (error) {
    
  }
})

// Mở/Đóng tài khoản truy cập App
app.get('/MoDongTaiKhoanTruyCapApp/:id_nguoi_dung/:trang_thai' , (req , res)=>{
  try {
    const id_nguoi_dung = req.params.id_nguoi_dung
    const trang_thai = req.params.trang_thai === true ? '1' : '0'
    pool.getConnection((error, connection) => {
      if (error) throw error;
      connection.query(`
        update tbl_nguoi_dung set trang_thai = ${trang_thai} where id_nguoi_dung = ${id_nguoi_dung}
      `, (error, rows) => {
        connection.release();
        if (!error) {
          console.log(rows)
          res.send(rows);
        } else {
          console.log(error);
        }
      });
    });
  } catch (error) {
    
  }
})
//#endregion

//#region (3) Quản lý chấm công

//#endregion

//#region (3) Quản lý chấm công

//#endregion

//


// ************************************************************
console.log("test");
// server is listening to incoming requests on port 3000 on localhost
app.listen(process.env.PORT || port, () => {
  console.log("Port : " + port);
});
