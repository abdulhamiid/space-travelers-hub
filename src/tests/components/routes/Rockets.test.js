import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../../../components/routes/Missions';
import store from '../../../store/configureStore';

describe('Testing Rockets component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
