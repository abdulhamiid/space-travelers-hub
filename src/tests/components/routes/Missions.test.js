import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Missions from '../../../components/routes/Missions';
import store from '../../../store/configureStore';

describe('Testing Missions component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
