import React from 'react';
import { Card } from 'primereact/card';
import { useHistory } from 'react-router-dom';

function Header() {
  let history = useHistory();
  let userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const logout = () => {
    localStorage.setItem('isLoggedin', JSON.stringify(false));
    localStorage.setItem('userEmail', JSON.stringify(''));
    history.push('/');
  };

  return (
    <div className="header-div">
      <Card>
        <img className="m-10" src={logo} alt="Logo" />
        <b className="float-right m-20">{userInfo.name}</b>
      </Card>
    </div>
  );
}

export default Header;
