import { useEffect, useRef } from 'react';

const Modale = props => {
    const modalRef = useRef();

    useEffect(() => {
        const clickOutsideContent = (e) => {
            if (e.target === modalRef.current) {
                props.setShow(false);
            }
        };
        window.addEventListener('click', clickOutsideContent);
        return () => {
            window.removeEventListener('click', clickOutsideContent);
        };
    }, [props]);

    return <div ref={modalRef} className={`modale ${props.show ? 'active' : ''}`}>
        <div className="modale__content">
            {
                !props.hideCloseButton && <span onClick={() => props.setShow(false)} className="modale__close">
                    &times;
                </span>
            }
            {props.children}
        </div>
    </div>;
};

export default Modale;

export const ModalHeader = props => {
    return <div className="modale__header">
        {props.children}
    </div>
}

export const ModalBody = props => {
    return <div className="modale__body">
        {props.children}
    </div>
}

export const ModalFooter = props => {
    return <div className="modale__footer">
        {props.children}
    </div>
}