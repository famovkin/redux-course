const defaultState = {
  customers: [],
};

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_CUSTOMERS: {
      return { ...state, customers: [...state.customers, ...action.payload] };
    }

    case ADD_CUSTOMER: {
      return { ...state, customers: [...state.customers, action.payload] };
    }

    case REMOVE_CUSTOMER: {
      const updatedCustomers = state.customers.filter(
        (customer) => customer.id !== action.payload
      );
      return { ...state, customers: updatedCustomers };
    }

    default:
      return state;
  }
};

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const addManyCustomers = (payload) => ({
  type: ADD_MANY_CUSTOMERS,
  payload,
});
export const removeCustomerAction = (payload) => ({
  type: REMOVE_CUSTOMER,
  payload,
});
