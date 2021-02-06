import {ADD_ORDER, SET_ORDERS} from './order-types';
import ordersData from '../../dummyData/orders.json';
export const addOrder = (data) => {
  return {
    type: ADD_ORDER,
    orderData: {
      id: 1,
    },
  };
};

export const setOrders = (userData) => {
  const data = ordersData.filter((el) => el.client_id === userData.id);
  return {type: SET_ORDERS, ordersData: data};
};
