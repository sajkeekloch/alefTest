import './DropdownMenu.css'
import closeCross from '../images/closeCross.svg'
import { useRef, useEffect } from "react";

function DropdownMenu(props) {

    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            if (props.menuIsOpen) {
                function handleClickOutside(event) {
                    if (ref.current && !ref.current.contains(event.target)) {
                        props.toggleMenu()
                    }
                }
                document.addEventListener("mousedown", handleClickOutside);
                return () => {
                    // Unbind the event listener on clean up
                    document.removeEventListener("mousedown", handleClickOutside);
                };
            }
        }, [ref, props.menuIsOpen]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return(
        <div 
            ref={wrapperRef}
            className={ props.menuIsOpen? 'dropdownMenu' : 'hide' }>
            <div className='dropdownMenu__close'>
                <img
                    onClick={ () => props.toggleMenu() }
                    src= {closeCross}
                    alt = 'close'
                    className='dropdownMenu__close_image'
                />
            </div>
            <ul className='dropdownMenu__list'>
                <li className='dropdownMenu__item'>
                    постельное белье
                </li>
                <li className='dropdownMenu__item'>
                    одежда для дома
                </li>
                <li className='dropdownMenu__item'>
                    Одежда для улицы
                </li>
                <li 
                    onClick={ () => props.toggleMenu() }
                    className='dropdownMenu__item'>
                    ВЫход
                </li>
            </ul>
        </div>
    )
}

export default DropdownMenu