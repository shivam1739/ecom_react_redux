import { AiOutlineDashboard } from "react-icons/ai";
import {
  BsFillHandbagFill,
  BsFillCartFill,
  BsGraphUp,
  BsBarChartLine,
} from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
const sellerSidebarItems = [
  {
    path: "/seller/dashBoard",
    name: "Dashboard",
    icon: <AiOutlineDashboard />,
  },
  {
    path: "/seller/my-products",
    name: "Product",
    icon: <BsFillHandbagFill />,
  },
  {
    path: "/",
    name: "My Orders",
    icon: <BsFillCartFill />,
  },
  {
    path: "/",
    name: "Sales Report",
    icon: <BsGraphUp />,
  },
  {
    path: "/",
    name: "Leader Board",
    icon: <BsBarChartLine />,
  },
  {
    path: "/",
    name: "Signout",
    icon: <FiLogOut />,
  },
];
export default sellerSidebarItems;
