import React from "react";
import './Login1.css';

function Login1(props) {

  return (
    <div className="main">

      <form action="" method="POST" className="form" id="form-1">
        <h3 className="heading">Thành viên đăng ký</h3>
        <p className="desc">Cùng nhau học lập trình miễn phí tại Vinh Nguyễn Center ❤️</p>

        <div className="spacer"></div>

        <div className="form-group">
          <label htmlFor="fullname" className="form-label">Tên đầy đủ</label>
          <input id="fullname" name="fullname" type="text" placeholder="VD: Vinh Nguyễn" className="form-control" />
          <span className="form-message"></span>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input id="email" name="email" type="text" placeholder="VD: email@domain.com" className="form-control" />
          <span className="form-message"></span>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Mật khẩu</label>
          <input id="password" name="password" type="password" placeholder="Nhập mật khẩu" className="form-control" />
          <span className="form-message"></span>
        </div>

        <div className="form-group">
          <label htmlFor="password_confirmation" className="form-label">Nhập lại mật khẩu</label>
          <input id="password_confirmation" name="password_confirmation" placeholder="Nhập lại mật khẩu" type="password" className="form-control" />
          <span className="form-message"></span>
        </div>

        <button className="form-submit">Đăng ký</button>
      </form>

      <form action="" method="POST" className="form" id="form-2">
        <h3 className="heading">Đăng nhập</h3>
        <p className="desc">Cùng nhau học lập trình miễn phí tại Vinh Nguyễn Center ❤️</p>

        <div className="spacer"></div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input id="email" name="email" type="text" placeholder="VD: email@domain.com" className="form-control" />
          <span className="form-message"></span>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Mật khẩu</label>
          <input id="password" name="password" type="password" placeholder="Nhập mật khẩu" className="form-control" />
          <span className="form-message"></span>
        </div>

        <button className="form-submit">Đăng nhập</button>
      </form>

    </div>
  );
}

export default Login1;