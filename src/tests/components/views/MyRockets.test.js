import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MyRockets from '../../../components/views/MyRockets';
import store from '../../../store/configureStore';

describe('Testing MyRockets component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MyRockets />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
