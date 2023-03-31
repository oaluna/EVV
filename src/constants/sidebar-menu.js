import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ViewListIcon from "@mui/icons-material/ViewList";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PeopleOutlined from "@mui/icons-material/PeopleOutlined";
import PeopleOutline from "@mui/icons-material/PeopleOutline";
import Person2Outlined from "@mui/icons-material/Person2Outlined";
import FileOpenOutlined from "@mui/icons-material/FileOpenOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const sidebar_menu = [
  {
    id: 0,
    icon: CalendarMonthIcon,
    path: "/",
    title: "Scheduler",
    subheaders: [],
  },
  {
    id: 1,
    icon: PeopleOutlined,
    path: "/staff",
    title: "Staff",
    subHeaders: [
      {
        id: "1a",
        icon: ViewListIcon,
        path: "/staff/list",
        title: "List",
      },
      {
        id: "1b",
        icon: NoteAddIcon,
        path: "/staff/new",
        title: "New",
      },
      {
        id: "1b",
        icon: PeopleOutline,
        path: "/staff/teams",
        title: "Teams",
        subHeaders: [
          {
            id: "1aa",
            icon: ViewListIcon,
            path: "/staff/teams/list",
            title: "List",
          },
          {
            id: "1ab",
            icon: NoteAddIcon,
            path: "/staff/teams/new",
            title: "New",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    icon: Person2Outlined,
    path: "/clients",
    title: "Clients",
    subHeaders: [
      {
        id: "1a",
        icon: ViewListIcon,
        path: "/clients/list",
        title: "List",
      },
      {
        id: "1b",
        icon: NoteAddIcon,
        path: "/clients/new",
        title: "New",
      },
    ],
  },
  {
    id: 3,
    icon: FileOpenOutlined,
    path: "/reports",
    title: "Reports",
    subHeaders: [
      {
        id: "1a",
        icon: ViewListIcon,
        path: "/reports/list",
        title: "List",
      },
    ],
  },
  {
    id: 4,
    icon: ManageAccountsIcon,
    path: "/account",
    title: "Account",
    subHeaders: [
      {
        id: "1a",
        icon: ViewListIcon,
        path: "/account/list",
        title: "List",
      },
      {
        id: "1b",
        icon: NoteAddIcon,
        path: "/account/new",
        title: "New",
      },
    ],
  },
];

export default sidebar_menu;
