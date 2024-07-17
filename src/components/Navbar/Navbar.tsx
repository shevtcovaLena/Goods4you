import React from 'react'
import { Link } from 'react-router-dom'
import { CartIcon } from '../Icons/Icons'
import { ICartInfo } from '../../types/types'

interface Props {
    cartInfo: ICartInfo
}

export function Navbar({cartInfo}: Props) {
    
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
                      { CartIcon }
                    {cartInfo.totalQuantity? <div className="circle-badge">
                      <p>{cartInfo.totalQuantity}</p>
                    </div> : <></>}
                  </span>
                </Link>
              </li>
              <li>Johnson Smith</li>
            </ul>
          </nav>
    )
}

