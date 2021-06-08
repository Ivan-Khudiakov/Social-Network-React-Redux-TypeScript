import React from "react";
import styles from "./FormsControls.module.css"

type InputType = {
    name: string
    onBlur?: (event: any) => void
    onChange?: (event: any) => void
    onDragStart: (event: any) => void
    onDrop: (event: any) => void
    onFocus: (event: any) => void
    value: string
}
type MetaType ={
    active: boolean
    asyncValidating: boolean
    autofilled: boolean
    dirty: boolean
    dispatch: (action: any) => void
    error: string
    form: string
    initial: undefined | string
    invalid: boolean
    pristine: boolean
    submitFailed: boolean
    submitting: boolean
    touched: boolean
    valid: boolean
    visited: boolean
    warning: undefined | string
}
type TextAreaPropsType = {
    input: InputType
    meta: MetaType
    placeholder: string
}

export const TextArea = (props:TextAreaPropsType) => {
    const hasError = props.meta.touched && props.meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError? styles.error: '')}>
            {hasError && <span>{props.meta.error}</span>}
            <div>
                <textarea {...props.input} {...props}/>
            </div>
        </div>
    )
}

export const Input = (props:TextAreaPropsType) => {
    const hasError = props.meta.touched && props.meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError? styles.error: '')}>
            {hasError && <span>{props.meta.error}</span>}
            <div>
                <input {...props.input} {...props}/>
            </div>
        </div>
    )
}

