import React from 'react'
import { Formik, Field, Form } from "formik";
import PropTypes from 'prop-types'

function PasswordPair(props) {
    return (
        <>
            <div className="col-12 col-md-8 ">
                    <label htmlFor="userPassword1" className="form-label mb-0">Пароль*</label>
                    <div className="form-text">
                        должен содержать не менее 6 символов и включать 1 прописную букву и 1 цифру
                    </div>
                    <div className="input-group">
                        <Field id="userPassword1" name="userPassword1" type="password" className="form-control" />
                        <span className=" lh-lg input-group-text fa fa-eye toggle-password" toggle="#userPassword1"></span>
                    </div>

                </div>
                <div className="col-12 col-md-8">
                    <label htmlFor="userPassword2" className="form-label">Подтверждение пароля*</label>
                    <div className="input-group">
                        <Field id="userPassword2" name="userPassword2" type="password" className="form-control" />
                        <span className=" lh-lg input-group-text fa fa-eye toggle-password" toggle="#userPassword2"></span>
                        <div className="invalid-feedback" id="messagePassword"></div>
                    </div>
                </div>
        </>
    )
}

PasswordPair.propTypes = {

}

export default PasswordPair

