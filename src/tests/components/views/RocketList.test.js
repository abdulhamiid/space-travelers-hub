import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import RocketList from '../../../components/views/RocketList';
import store from '../../../store/configureStore';

describe('Testing RocketList component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <RocketList />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
