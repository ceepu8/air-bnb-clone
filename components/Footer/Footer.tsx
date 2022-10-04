import React from "react";

const Footer = () => {
  return (
    <footer className="mt-12 bg-lightGrey">
      <div className="max-w-[1315px] py-12">
        <div className="flex items-start justify-around">
          <div>
            <p className="font-semibold uppercase">Giới thiệu</p>
            <ul>
              <li>Phương thức hoạt động của Airbnb</li>
              <li>Trang tin tức</li>
              <li>Nhà đầu tư</li>
              <li>Airbnb Plus</li>
              <li>Airbnb Luxe</li>
              <li>Hotel Tonight</li>
              <li>Airbnb for Work</li>
              <li>Nhờ có host, mọi điều đều có thể</li>
              <li>Cơ hội nghề nghiệp</li>
              <li>Thư của nhà sáng lập</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold uppercase">Cộng đồng</p>
            <ul>
              <li>Sự đa dạng và cảm giác thân thuộc</li>
              <li>Tiện nghi phù hợp cho người khuyết tật</li>
              <li>Đối tác liên kết Airbnb</li>
              <li>Chỗ ở cho tuyến đầu</li>
              <li>Lượt giới thiệu của khách</li>
              <li>Airbnb.org</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold uppercase">Đón tiếp khách</p>
            <ul>
              <li>Cho thuê nhà</li>
              <li>Tổ chức trải nghiệm trực tuyến</li>
              <li>Tổ chức trải nghiệm</li>
              <li>Đón tiếp khách có trách nhiệm</li>
              <li>Trung tâm tài nguyên</li>
              <li>Trung tâm cộng đồng</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold uppercase">Hỗ trợ</p>
            <ul>
              <li>Trung tâm trợ giúp</li>
              <li>Các tuỳ chọn huỷ</li>
              <li>Hỗ trợ khu dân cư</li>
              <li>Tin cậy và an toàn</li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p className="font-semibold">2021 Airbnb, Inc.All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
