import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MyMissons from '../../../components/views/MyMissons';
import store from '../../../store/configureStore';

describe('Testing MyMissons component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MyMissons />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
