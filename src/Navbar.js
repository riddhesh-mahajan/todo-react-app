import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-light shadow bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <img src="https://img.icons8.com/fluency/50/000000/todo-list.png" alt="" width="30" height="24" className="d-inline-block align-text-top me-3" />
                    <span className="fw-bold">Todo App</span>
                    </a>
                </div>
            </nav>
        </>
    )
}
