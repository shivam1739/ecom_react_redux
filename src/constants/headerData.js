const headerData = () => {
  const list = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "Categorries",
      path: "/",
    },
    {
      title: "About",
      path: "/",
    },
    {
      title: "Contact Us",
      path: "/",
    },
  ];

  const role = localStorage.getItem("userType");
  if (role === "seller") {
    list.push({ title: "My-Shop", path: "/seller/dashboard" });
  }
  return list;
};

export default headerData;
