import {
    ApertureIcon,
    CopyIcon,
    LayoutDashboardIcon,
    LoginIcon,
    MoodHappyIcon,
    TypographyIcon,
    UserPlusIcon,
    CashIcon
} from 'vue-tabler-icons';

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: menu[] = [
    { header: '주문' },
    {
        title: '매수/매도',
        icon: CashIcon,
        to: '/order/buy-selling'
    },
    { header: '분석' },
    {
        title: '주가 분석',
        icon: LayoutDashboardIcon,
        to: '/analysis/Stock'
    },
    {
        title: '주문 분석',
        icon: LayoutDashboardIcon,
        to: '/analysis/order'
    },
    { header: '셋팅' },
    {
        title: '수수료',
        icon: LayoutDashboardIcon,
        to: '/setting/fee'
    }
    // example page
    // { header: 'Home' },
    // {
    //     title: 'Dashboard',
    //     icon: LayoutDashboardIcon,
    //     to: '/'
    // },
    // { header: 'utilities' },
    // {
    //     title: 'Typography',
    //     icon: TypographyIcon,
    //     to: '/ui/typography'
    // },
    // {
    //     title: 'Shadow',
    //     icon: CopyIcon,
    //     to: '/ui/shadow'
    // },
    // { header: 'auth' },
    // {
    //     title: 'Login',
    //     icon: LoginIcon,
    //     to: '/auth/login'
    // },
    // {
    //     title: 'Register',
    //     icon: UserPlusIcon,
    //     to: '/auth/register'
    // },
    // { header: 'Extra' },
    // {
    //     title: 'Icons',
    //     icon: MoodHappyIcon,
    //     to: '/icons'
    // }
    // {
    //     title: 'Sample Page',
    //     icon: ApertureIcon,
    //     to: '/sample-page'
    // }
];

export default sidebarItem;
