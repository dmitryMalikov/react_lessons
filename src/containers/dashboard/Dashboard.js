import React, { Component } from 'react';
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

class Dashboard extends Component {
    render()
    {
        return (
            <div className="app-dashboard">
                <Header />
                <div className="main">

                </div>
                <Sidebar />
            </div>
        );
    }
}

export default Dashboard;
