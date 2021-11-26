import React, { useEffect, Suspense, lazy } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  getMenuDetails,
  getReviews,
} from "../../redux/menuDetails/menuDetailsAction";
import Reviews from "../reviews/Reviews";
import FeedBackModal from "../feedBackModal/FeedBackModal";
import "./MenuDetails.scss";

const MenuDetailsCard = lazy(() => import("./MenuDetailsCard"));

function MenuDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const menuDetails = useSelector((state) => state.menuDetails.menuDetails);
  const reviews = useSelector((state) => state.menuDetails.reviews);

  useEffect(() => {
    dispatch(getMenuDetails(id));
    dispatch(getReviews(id));
  }, []);

  const loadingImg = (
    <div className="loading">
      <img
        src="https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif"
        alt="loading"
      />
    </div>
  );

  return (
    <div>
      <Suspense fallback={loadingImg}>
        <MenuDetailsCard menuDetails={menuDetails} />
      </Suspense>
      <Reviews reviews={reviews} />
      <FeedBackModal />
    </div>
  );
}

export default MenuDetails;
