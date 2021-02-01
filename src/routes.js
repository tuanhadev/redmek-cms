import React from "react";

// const Dashboard = React.lazy(() => import('../src/views/Dashboard'));
const RatioInput = React.lazy(() => import('../src/views/Input/Ratio'));
const PromotionInput = React.lazy(() => import('../src/views/Input/Promotion'));
const StatisticPromotionInput = React.lazy(() => import('../src/views/Input/Promotion/statisticPromotion'));
const StandardClassInput = React.lazy(() => import('../src/views/Input/StandardClass'));
const AccountMajor = React.lazy(() => import('../src/views/Major/Account'));
const QuestionMajor = React.lazy(() => import('../src/views/Major/Question'));
const ReportMajor = React.lazy(() => import('../src/views/Major/Report'));
const WithdrawalMajor = React.lazy(() => import('../src/views/Major/WithDrawal'));
const RechargeInformation = React.lazy(() => import('../src/views/Information/Recharge'));
const RevenueInformation = React.lazy(() => import('../src/views/Information/Revenue'));
const CommunityStatistical = React.lazy(() => import('../src/views/Statistical/Community'));
const FinanceStatiscal = React.lazy(() => import('../src/views/Statistical/Finance'));
const MetricQuestionStatiscal = React.lazy(() => import('../src/views/Statistical/MetricQuestion'));
const LibraryOther = React.lazy(() => import('../src/views/Other/Library'));
const GameOther = React.lazy(() => import('../src/views/Other/Game'));

let routes = [
  // { path: "/", exact: true, name: "Trang chủ", component: Dashboard },
  { path: "/ti-le", exact: true, name: "Tỉ lệ chia thưởng", component: RatioInput },
  { path: "/khuyen-mai", exact: true, name: "Danh sách khuyến mãi", component: PromotionInput },
  { path: "/khuyen-mai/danh-sach-cau-hoi", exact: true, name: "Thống kê mã Khuyến mãi", component: StatisticPromotionInput },
  { path: "/tieu-chuan-hang", exact: true, name: "Tiêu chuẩn hạng", component: StandardClassInput },
  { path: "/cau-hoi", exact: true, name: "Câu hỏi", component: QuestionMajor },
  { path: "/bao-cao", exact: true, name: "Báo cáo", component: ReportMajor },
  { path: "/rut-tien", exact: true, name: "Rút tiền", component: WithdrawalMajor },
  { path: "/tai-khoan", exact: true, name: "Tài khoản", component: AccountMajor },
  { path: "/nap-tien", exact: true, name: "Nạp tiền", component: RechargeInformation },
  { path: "/doanh-thu", exact: true, name: "Doanh thu", component: RevenueInformation },
  { path: "/cong-dong", exact: true, name: "Cộng đồng", component: CommunityStatistical },
  { path: "/tai-chinh", exact: true, name: "Tài chính", component: FinanceStatiscal },
  { path: "/so-lieu-cau-hoi", exact: true, name: "Số liệu câu hỏi", component: MetricQuestionStatiscal },
  { path: "/thu-vien", exact: true, name: "Thư viện Redmek", component: LibraryOther },
  { path: "/game", exact: true, name: "Danh sách game", component: GameOther },
]

export default routes;


