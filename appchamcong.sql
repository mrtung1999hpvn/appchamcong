-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th3 26, 2021 lúc 07:19 AM
-- Phiên bản máy phục vụ: 10.4.18-MariaDB
-- Phiên bản PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `appchamcong`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_loai_nhan_vien`
--

CREATE TABLE `tbl_loai_nhan_vien` (
  `id_loai_nhan_vien` bigint(20) NOT NULL,
  `ten_loai_nhan_vien` varchar(200) NOT NULL,
  `ghi_chu` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_loai_nhan_vien`
--

INSERT INTO `tbl_loai_nhan_vien` (`id_loai_nhan_vien`, `ten_loai_nhan_vien`, `ghi_chu`) VALUES
(1, 'Nhân viên quản trị', 'test'),
(2, 'Nhân viên', 'Nhân viên'),
(3, 'Nhân viên ban hành', 'Nhân viên');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_nguoi_dung`
--

CREATE TABLE `tbl_nguoi_dung` (
  `id_nguoi_dung` bigint(20) UNSIGNED NOT NULL,
  `ten_dang_nhap` varchar(200) NOT NULL,
  `mat_khau` varchar(200) NOT NULL,
  `id_nhan_vien` bigint(20) NOT NULL,
  `trang_thai` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_nguoi_dung`
--

INSERT INTO `tbl_nguoi_dung` (`id_nguoi_dung`, `ten_dang_nhap`, `mat_khau`, `id_nhan_vien`, `trang_thai`) VALUES
(1, 'admin@gmail.com', 'test', 1, 0),
(2, 'test@gmail.com', 'matkhau', 1, 0),
(3, 'test1@gmail.com', 'admin', 3, 1),
(4, 'test1@gmail.com', 'admin', 3, 0),
(5, 'test3@gmail.com', 'admin', 2, 0),
(6, 'nguyenvanB@gmail.com', 'admin123', 2, 0),
(7, 'nguyenvanB@gmail.com', 'admin123', 2, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_nhan_vien`
--

CREATE TABLE `tbl_nhan_vien` (
  `id_loai_nhan_vien` bigint(20) NOT NULL,
  `id_nhan_vien` bigint(20) UNSIGNED NOT NULL,
  `ten_nhan_vien` varchar(100) NOT NULL,
  `lien_he` varchar(200) NOT NULL,
  `noi_quy` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tbl_nhan_vien`
--

INSERT INTO `tbl_nhan_vien` (`id_loai_nhan_vien`, `id_nhan_vien`, `ten_nhan_vien`, `lien_he`, `noi_quy`) VALUES
(0, 0, '[value-3]', '[value-4]', '[value-5]'),
(3, 2, 'Nguyễn Văn B', '123456789', 'Thực hiện nội quy');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `test`
--

CREATE TABLE `test` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ten` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `test`
--

INSERT INTO `test` (`id`, `ten`) VALUES
(1, 'test'),
(2, 'test');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `tbl_loai_nhan_vien`
--
ALTER TABLE `tbl_loai_nhan_vien`
  ADD PRIMARY KEY (`id_loai_nhan_vien`),
  ADD UNIQUE KEY `id_loai_nhan_vien` (`id_loai_nhan_vien`);

--
-- Chỉ mục cho bảng `tbl_nguoi_dung`
--
ALTER TABLE `tbl_nguoi_dung`
  ADD PRIMARY KEY (`id_nguoi_dung`),
  ADD UNIQUE KEY `id_nguoi_dung` (`id_nguoi_dung`);

--
-- Chỉ mục cho bảng `tbl_nhan_vien`
--
ALTER TABLE `tbl_nhan_vien`
  ADD PRIMARY KEY (`id_nhan_vien`),
  ADD UNIQUE KEY `id_nhan_vien` (`id_nhan_vien`);

--
-- Chỉ mục cho bảng `test`
--
ALTER TABLE `test`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `tbl_loai_nhan_vien`
--
ALTER TABLE `tbl_loai_nhan_vien`
  MODIFY `id_loai_nhan_vien` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `tbl_nguoi_dung`
--
ALTER TABLE `tbl_nguoi_dung`
  MODIFY `id_nguoi_dung` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `tbl_nhan_vien`
--
ALTER TABLE `tbl_nhan_vien`
  MODIFY `id_nhan_vien` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `test`
--
ALTER TABLE `test`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
