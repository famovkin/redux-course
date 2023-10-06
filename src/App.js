import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {
  addCustomerAction,
  removeCustomerAction,
} from './store/customerReducer';
import { addCashAction, getCashAction } from './store/cashReducer';
import { fetchCustomers } from './asyncActions/customers';

const App = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => dispatch(addCashAction(cash));
  const getCash = (cash) => dispatch(getCashAction(cash));

  const addCustomer = (name) => {
    const newCustomer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(newCustomer));
  };
  const removeCustomer = (customerId) =>
    dispatch(removeCustomerAction(customerId));

  return (
    <div className="App">
      <div style={{ fontSize: 30 }}>Баланс: {cash}</div>
      <div style={{ display: 'flex' }}>
        <button onClick={() => addCash(Number(prompt()))}>
          Пополнить счёт
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          Снять со счёта
        </button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => addCustomer(prompt())}>Удалить клиента</button>
        <button onClick={() => dispatch(fetchCustomers())}>
          Получить клиентов
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div
              style={{ padding: 10, border: '1px solid black' }}
              key={customer.id}
              onClick={() => removeCustomer(customer.id)}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <p>Пользователей нет</p>
      )}
    </div>
  );
};

export default App;
