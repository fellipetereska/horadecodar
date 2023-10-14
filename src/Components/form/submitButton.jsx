import Style from './submitButton.module.css'

function SubmitButton ({text}) {
    return(
        <div className={Style.form_control}>
            <button className={Style.btn}>{text}</button>
        </div>
    )
}

export default SubmitButton;