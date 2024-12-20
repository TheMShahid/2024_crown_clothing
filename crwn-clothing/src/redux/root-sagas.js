import { all, call } from "redux-saga/effects";
import { shopSagas } from "../redux/shop/shop.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";

export function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
