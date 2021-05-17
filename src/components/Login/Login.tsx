import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                       name={'login'}
                       placeholder={'Login'}
                       validate={[required]}/>
            </div>
            <div>
                <Field component={Input}
                       name={'password'}
                       placeholder={'password'}
                       validate={[required]}/>
            </div>
            <div>
                <Field component={Input}
                       name={'rememberMe'}
                       type={'checkbox'}
                       validate={[required]}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
