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
const HomeScreen = () => {
  const { loading, error, message, categories } = useSelector(
    (state) => state.categoryReducer
  );
  const dispatch = useDispatch();

  const loadCategoriesData = async () => {
    try {
      dispatch(getCategoryRequest());
      const response = await loadCategories();
      console.log(response);
      if (response.message == "successfull fetched data") {
        dispatch(getCategorySuccess(response.data));
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
        <h1>HomeScreen</h1>
        <Hero />
        <Seperator name={"categories"} />
        <section className="categorySection">
          <CategoryCard categories={categories} />
        </section>
      </div>
    </>
  );
};

export default HomeScreen;
