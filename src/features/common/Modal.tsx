import ReactDOM  from "react-dom"

interface IModalProps {
    title:string,
    actions: JSX.Element,
    content : string,
    _onDismiss : () => void,
    

}

const Modal  = (props : IModalProps) => {

    return ReactDOM.createPortal(
        <div onClick={props._onDismiss} className="ui dimmer modals visible active">
            <div onClick={e => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>      
                <div className="actions">{props.actions}</div>             
            </div>
        </div>,
        document.querySelector('#modal')!
    )
}

export default Modal
