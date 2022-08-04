import iconFood from "../../../assets/list-icon-food.svg";
import iconTransport from "../../../assets/icon02-transport.svg";
import iconHealth from "../../../assets/list-icon-health.svg";
import iconProducts from "../../../assets/list-icon-product.svg";
import Moment from "moment";

export function getCategory(categoryId) {
  if (categoryId === "1") {
    return "Food";
  } else if (categoryId === "2") {
    return "Vehicle";
  } else if (categoryId === "3") {
    return "Health";
  } else if (categoryId === "4") {
    return "Consumer";
  }
}

export function getLogo(id) {
  if (id === "1") {
    return iconFood;
  } else if (id === "2") {
    return iconTransport;
  } else if (id === "3") {
    return iconHealth;
  } else if (id === "4") {
    return iconProducts;
  }
}

export function getDate(dateCode) {
  const date = new Date(dateCode * 1000);
  const finalDate = date.toLocaleDateString("en-US");
  return Moment(finalDate).format("DD-MM-YYYY");
}
