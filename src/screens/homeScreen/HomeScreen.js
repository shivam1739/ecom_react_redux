import React, { useEffect } from "react";
import Hero from "../../components/heroSection/Hero";
import "./homeScreen.css";
import CategoryCard from "../../components/category/CategoryCard";
import {
  getCategoryRequest,
  getCategorySuccess,
  getCategoryFail,
} from "../../actions/category.action";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";
import Toaster from "../../components/toaster/Toaster";
import { loadCategories } from "../../services/home.service";
import "bootstrap/dist/css/bootstrap.min.css";
import Seperator from "../../components/seperator/Seperator";
import SideBar from "../../components/sideBar/SideBar";

const HomeScreen = () => {
  const { loading, error, message, categories } = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();

  const loadCategoriesData = async () => {
    try {
      if (!categories) {
        dispatch(getCategoryRequest());
        const response = await loadCategories();
        console.log(response);
        if (response.message == "successfull fetched data") {
          dispatch(getCategorySuccess(response.data));
        }
      }
    } catch (err) {
      dispatch(getCategoryFail());
    }
  };

  useEffect(() => {
    loadCategoriesData();
  }, []);
  // loadCategories();
  return (
    <>
      {loading ? <Loading /> : null}
      {error || message ? <Toaster props={{ error, message }} /> : null}
      <div className="homeSC">
        <section className="hero">
          <Hero />
        </section>

        <Seperator name={"categories"} />
        <section className="categorySection">
          <CategoryCard categories={categories} />
        </section>
        <section></section>
      </div>
    </>
  );
};

export default HomeScreen;
