import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import background from "./resume.png"

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App style={{backgroundImage: `${background}`}}/>
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
