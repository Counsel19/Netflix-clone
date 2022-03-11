import {Header} from '../components';
import * as ROUTES from '../constants/routes'
import logo from "../logo.svg"

const HeaderContainer = ({children}) => {
  return (
    <Header data-testid="background-shown">
        <Header.Frame>
            <Header.Logo to={ROUTES.HOME} src={logo}/>
            <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In </Header.ButtonLink>
        </Header.Frame>

        {children}
    </Header>
  );
}

export default HeaderContainer