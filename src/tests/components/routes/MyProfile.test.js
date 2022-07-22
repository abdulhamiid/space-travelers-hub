import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MyProfile from '../../../components/routes/Missions';
import store from '../../../store/configureStore';

describe('Testing MyProfile component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MyProfile />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
