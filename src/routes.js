import React from "react";

// const Dashboard = React.lazy(() => import('../src/views/Dashboard'));
const RatioInput = React.lazy(() => import('../src/views/Input/Ratio'));
const PromotionInput = React.lazy(() => import('../src/views/Input/Promotion'));
const StatisticPromotionInput = React.lazy(() => import('../src/views/Input/Promotion/statisticPromotion'));
const StandardClassInput = React.lazy(() => import('../src/views/Input/StandardClass'));
const AccountMajor = React.lazy(() => import('../src/views/Major/Account'));
const RelatedAccount = React.lazy(() => import('../src/views/Major/Account/relatedAccount'));
const ListQuestionAccount = React.lazy(() => import('../src/views/Major/Account/listQuestionAccount'));
const QuestionMajor = React.lazy(() => import('../src/views/Major/Question'));
const DetailQuestion = React.lazy(() => import('../src/views/Major/Question/detailQuestion'));
const BonusDivisionQuestion = React.lazy(() => import('../src/views/Major/Question/bonusDivision'));
const ReportMajor = React.lazy(() => import('../src/views/Major/Report'));
const DetailReportMajor = React.lazy(() => import('../src/views/Major/Report/detailReport'));
const WithdrawalMajor = React.lazy(() => import('../src/views/Major/WithDrawal'));
const OrderListWithDrawal = React.lazy(() => import('../src/views/Major/WithDrawal/orderListWithDrawal'));
const RechargeInformation = React.lazy(() => import('../src/views/Information/Recharge'));
const RechargeBefore = React.lazy(() => import('../src/views/Information/Recharge/RechargeBefore'));
const RevenueInformation = React.lazy(() => import('../src/views/Information/Revenue'));
const CommunityStatistical = React.lazy(() => import('../src/views/Statistical/Community'));
const FinanceStatiscal = React.lazy(() => import('../src/views/Statistical/Finance'));
const MetricQuestionStatiscal = React.lazy(() => import('../src/views/Statistical/MetricQuestion'));
const LibraryOther = React.lazy(() => import('../src/views/Other/Library'));
const DetailLibraryOther = React.lazy(() => import('../src/views/Other/Library/detailLibrary.js'));
const GameOther = React.lazy(() => import('../src/views/Other/Game'));
const GameDetailOther = React.lazy(() => import('../src/views/Other/Game/detailGame'));
const LogGameDetailOther = React.lazy(() => import('../src/views/Other/Game/logDetailGame'));

let routes = [
  // { path: "/", exact: true, name: "Trang chủ", component: Dashboard },
  { path: "/ti-le", exact: true, name: "Tỉ lệ chia thưởng", component: RatioInput },
  { path: "/khuyen-mai", exact: true, name: "Danh sách khuyến mãi", component: PromotionInput },
  { path: "/khuyen-mai/danh-sach-cau-hoi", exact: true, name: "Thống kê mã Khuyến mãi", component: StatisticPromotionInput },
  { path: "/tieu-chuan-hang", exact: true, name: "Tiêu chuẩn hạng", component: StandardClassInput },
  { path: "/cau-hoi", exact: true, name: "Câu hỏi", component: QuestionMajor },
  { path: "/cau-hoi/chi-tiet-cau-hoi", exact: true, name: "Xem chi tiết Câu hỏi", component: DetailQuestion },
  { path: "/cau-hoi/he-so-chia-thuong", exact: true, name: "Hệ số chia thưởng", component: BonusDivisionQuestion },
  { path: "/bao-cao", exact: true, name: "Báo cáo", component: ReportMajor },
  { path: "/bao-cao/chi-tiet-bao-cao", exact: true, name: "Chi tiết báo cáo", component: DetailReportMajor },
  { path: "/rut-tien", exact: true, name: "Rút tiền", component: WithdrawalMajor },
  { path: "/rut-tien/danh-sach-lenh", exact: true, name: "Danh sách lệnh", component: OrderListWithDrawal },
  { path: "/tai-khoan", exact: true, name: "Tài khoản", component: AccountMajor },
  { path: "/tai-khoan/tai-khoan-lien-quan", exact: true, name: "Tài khoản liên quan", component: RelatedAccount },
  { path: "/tai-khoan/danh-sach-cau-hoi", exact: true, name: "Danh sách câu hỏi", component: ListQuestionAccount },
  { path: "/nap-tien", exact: true, name: "Nạp tiền", component: RechargeInformation },
  { path: "/nap-tien/cac-lan-nap-truoc", exact: true, name: "Danh sách các lần nạp trước", component: RechargeBefore },
  { path: "/doanh-thu", exact: true, name: "Doanh thu", component: RevenueInformation },
  { path: "/cong-dong", exact: true, name: "Cộng đồng", component: CommunityStatistical },
  { path: "/tai-chinh", exact: true, name: "Tài chính", component: FinanceStatiscal },
  { path: "/so-lieu-cau-hoi", exact: true, name: "Số liệu câu hỏi", component: MetricQuestionStatiscal },
  { path: "/thu-vien", exact: true, name: "Thư viện Redmek", component: LibraryOther },
  { path: "/thu-vien/chi-tiet", exact: true, name: "Xem chi tiết Tài liệu", component: DetailLibraryOther },
  { path: "/game", exact: true, name: "Danh sách game", component: GameOther },
  { path: "/game/chi-tiet-game", exact: true, name: "Chi tiết Game", component: GameDetailOther },
  { path: "/game/chi-tiet-game/lich-su-game", exact: true, name: "Danh sách Game đã chơi", component: LogGameDetailOther },
]

export default routes;


