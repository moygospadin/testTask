import {ADD_ORDER, SET_ORDERS} from './order-types';
import Order from '../../models/order';
const initialState = {
  ordersData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const newPlace = new Order(action.orderData.id.toString());
      return {
        ordersData: state.ordersData.concat(newPlace),
      };
    case SET_ORDERS:
      console.log('SET_ORDERS', action.ordersData);
      return {
        ordersData: action.ordersData.map(
          (ord) => new Order(ord.id.toString()),
        ),
      };
    default:
      return state;
  }
};
