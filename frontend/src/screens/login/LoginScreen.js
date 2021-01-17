import React, { Component } from 'react'

export default class LoginScreen extends Component {
    render() {
        return (
            <div className="container-xxl">
                <div className="position-absolute top-50 start-50 translate-middle" style={{ width: 20 + "rem" }}>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="inputEmail1" className="form-label">Логин</label>
                            <input type="email" className="form-control" id="inputEmail1" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPassword" className="form-label">Пароль</label>
                            <input type="password" className="form-control" id="inputPassword" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="check1" />
                            <label className="form-check-label" htmlFor="check1">запомнить меня</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Войти</button>
                    </form>
                </div>
            </div>
        )
    }
}
