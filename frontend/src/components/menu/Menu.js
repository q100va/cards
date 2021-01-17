import React, { Component } from 'react'


export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor"
                            className="bi bi-house-door" viewBox="0 0 16 16">
                            <path
                                d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                        </svg>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Праздники</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button"
                                    data-bs-toggle="dropdown">
                                    Списки
                                </a>
                                <ul className="dropdown-menu">
                                    <li> <a className="dropdown-item" href="#">Домики</a></li>
                                    <li> <a className="dropdown-item" href="#">Жители домиков</a></li>
                                    <li> <a className="dropdown-item" href="#">Координаторы по переписке</a></li>
                                    <li> <a className="dropdown-item" href="#">Поздравляющие</a></li>
                                    <li> <a className="dropdown-item" href="#">Пользователи</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Заявки</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Отчеты</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button"
                                    data-bs-toggle="dropdown">
                                    Помощь
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Быстрый старт</a></li>
                                    <li><a className="dropdown-item" href="#">F.A.Q.</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Советы бывалых</a></li>
                                    <li><a className="dropdown-item" href="#">Шаблоны ответов</a></li>
                                    <li><a className="dropdown-item" href="#">Полезные ссылки</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button"
                                    data-bs-toggle="dropdown">
                                    Администратор
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Новый пользователь</a></li>
                                    <li><a className="dropdown-item" href="#">Управление ролями</a></li>
                                    <li><a className="dropdown-item" href="#">Управление статусами</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Настройки</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button"
                                    data-bs-toggle="dropdown">
                                    Модератор
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Загрузить список</a></li>
                                    <li><a className="dropdown-item" href="#">Выгрузить список</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Настройки</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav  mb-2 mb-lg-0 ">

                            <li className="nav-item">
                                <a className="nav-link  position-relative me-3" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem"
                                        fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                                    </svg>
                                    <span className="position-absolute top-0 start-0 badge rounded-pill bg-secondary ms-3">+99</span>
                                </a>
                            </li>

                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown5" role="button"
                                    data-bs-toggle="dropdown">
                                    <span className="navbar-text">Оксана Кустова</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor"
                                        className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path
                                            d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                                        <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        <path fillRule="evenodd"
                                            d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                                    </svg>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" href="#">Мои заявки</a></li>
                                    <li><a className="dropdown-item" href="#">Мои поздравляющие</a></li>
                                    <li><a className="dropdown-item" href="#">Рассылка</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Настройки</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Выход</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div >
            </nav >

        )
    }
}
