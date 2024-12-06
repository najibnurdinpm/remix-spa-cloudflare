//Global
import CodeSection from "./CodeSection";

//HomePage
import SledgeFeatures from "./home/SledgeFeatures";
import MultilingualIntegrating from "./home/MultilingualIntegrating";

//WishlistPage
import NumberOne from "./wishlist/NumberOne";
import NumberTwo from "./wishlist/NumberTwo";
import NumberThree from "./wishlist/NumberThree";
import NumberFour from "./wishlist/NumberFour";

import IntegrationSections from "./integration";
import SledgeRating from "./home/SledgeRating";
import SledgeReviews from "./home/SledgeReviews";

export { CodeSection };

export const Home = {
  SledgeFeatures,
  MultilingualIntegrating,
  SledgeRating,
  SledgeReviews
};

export const Wishlist = {
  NumberOne,
  NumberTwo,
  NumberThree,
  NumberFour,
};

export const Integration = IntegrationSections;
