import React from "react";
import {
  DesktopOutlined,
  BarChartOutlined,
  FileTextOutlined,
  PaperClipOutlined,
  FlagOutlined
} from '@ant-design/icons';
let navs = {
  items: [
    {
      name: "Input",
      url: "/input",
      icon: <DesktopOutlined />,
      key: "sub1",
      children: [
        {
          name: "Tỷ lệ",
          url: "/ti-le",
          key: "5"
        },
        {
          name: "Khuyến mãi",
          url: "/khuyen-mai",
          key: "6"
        },
        {
          name: "Tiêu chuẩn hạng",
          url: "/tieu-chuan-hang",
          key: "7"
        }
      ]
    },
    {
      name: "Nghiệp vụ",
      url: "/nghiep-vu",
      icon: <FlagOutlined />,
      key: "sub2",
      children: [
        {
          name: "Câu hỏi",
          url: "/cau-hoi",
          key: "8"
        },
        {
          name: "Báo cáo",
          url: "/bao-cao",
          key: "9"
        },
        {
          name: "Rút tiền",
          url: "/rut-tien",
          key: "10"
        },
        {
          name: "Tài khoản",
          url: "/tai-khoan",
          key: "11"
        }
      ]
    },
    {
      name: "Thông tin",
      url: "/thong-tin",
      icon: <FileTextOutlined />,
      key: "sub3",
      children: [
        {
          name: "Doanh thu",
          url: "/doanh-thu",
          key: "12"
        },
        {
          name: "Nạp tiền",
          url: "/nap-tien",
          key: "13"
        }
      ]
    },
    {
      name: "Thống kê",
      url: "/thong-ke",
      icon: <BarChartOutlined />,
      key: "sub4",
      children: [
        {
          name: "Tài chính",
          url: "/tai-chinh",
          key: "14"
        },
        {
          name: "Số liệu câu hỏi",
          url: "/so-lieu-cau-hoi",
          key: "15"
        },
        {
          name: "Cộng đồng",
          url: "/cong-dong",
          key: "16"
        }
      ]
    },
    {
      name: "Khác",
      url: "/khac",
      icon: <PaperClipOutlined />,
      key: "sub5",
      children: [
        {
          name: "Game",
          url: "/game",
          key: "17"
        },
        {
          name: "Thư viện Redmek",
          url: "/thu-vien",
          key: "18"
        }
      ]
    }
  ]
}

export default navs;