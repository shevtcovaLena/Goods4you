import { Link } from 'react-router-dom';
import { CartIcon } from '../Icons/Icons';
import { ICartInfo, IUser } from '../../types/types';

interface Props {
  cartInfo: ICartInfo;
  userInfo: IUser;
}

export function Navbar({ cartInfo, userInfo }: Props) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/#catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/#faq">FAQ</Link>
        </li>
        <li>
          <Link to="/cart" className="link-with-icon">
            Cart
            <span className="icon">
              {CartIcon}
              {cartInfo.totalQuantity ? (
                <div className="circle-badge">
                  <p>{cartInfo.totalQuantity}</p>
                </div>
              ) : null}
            </span>
          </Link>
        </li>
        <li>{`${userInfo.firstName} ${userInfo.lastName}`}</li>
      </ul>
    </nav>
  );
}