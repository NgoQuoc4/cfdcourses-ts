import React from "react";

const StudentProfilePage = () => {
  return (
    <main className="mainwrapper profilepage">
      <div className="container">
        <div className="wrapper">
          <div className="sidebar">
            <div className="sidebar__info">
              <div className="useravatar">
                <div className="avatar">
                  <div className="img">
                    <img src="img/avatar_nghia.jpg" alt="avatar" />
                  </div>
                </div>
                <h3 className="title --t3">Trần Nghĩa</h3>
              </div>
            </div>
            <div className="sidebar__content">
              <h4>Giới thiệu</h4>
              <p className="description">
                Cheerful, cafeful,friendly. I like listening to music, traveling
                and coding, listening to music, traveling and coding.
              </p>
              <ul>
                <li>
                  <img src="img/icon-mail-outline.svg" alt="icon" />
                  <span>trannghia2018@gmail.com</span>
                </li>
                <li>
                  <img src="img/icon-phone-outline.svg" alt="icon" />
                  <span>098 9596 913</span>
                </li>
                <li>
                  <img src="img/icon-link.svg" alt="icon" />
                  <a href="#" target="_blank">
                    https://nghiatran.info
                  </a>
                </li>
              </ul>
              <div className="social">
                <a href="#">
                  <img src="img/icon-facebook-dark.svg" alt="" />
                </a>
                <a href="#">
                  <img src="img/icon-linkedin-dark.svg" alt="" />
                </a>
                <a href="#">
                  <img src="img/icon-youtube-dark.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="tabwrap">
            <div className="tab">
              <div className="tab__title">
                <a href="#" className="active">
                  Thông tin cá nhân
                </a>
                <a href="#">Khóa học của tôi</a>
                <a href="#">Lịch sử thanh toán</a>
              </div>
              <div className="tab__content">
                {/* Thông tin cá nhân */}
                <div className="tab__content-item" style={{ display: "block" }}>
                  <form action="#" className="form">
                    <div className="form-container">
                      <div className="form-group">
                        <label className="label">
                          Họ và tên <span>*</span>
                        </label>
                        <input
                          defaultValue="Nghĩa Trần"
                          type="text"
                          className="form__input formerror"
                        />
                        <div className="error">Vui lòng nhập họ và tên</div>
                      </div>
                      <div className="form-group">
                        <label className="label">
                          Số điện thoại <span>*</span>
                        </label>
                        <input
                          defaultValue={""}
                          type="text"
                          className="form__input"
                        />
                      </div>
                    </div>
                    <div className="form-container">
                      <div className="form-group">
                        <label className="label">
                          Email <span>*</span>
                        </label>
                        <input
                          defaultValue="trannghia2018@gmail.com"
                          disabled
                          type="email"
                          className="form__input"
                        />
                      </div>
                      <div className="form-group">
                        <div className="form-grouppass">
                          <label className="label">
                            Mật khẩu <span>*</span>
                          </label>
                          <div
                            className="textchange btnmodal"
                            data-modal="mdchangepass"
                          >
                            Đổi mật khẩu
                          </div>
                        </div>
                        <input
                          defaultValue={12345568900}
                          type="password"
                          disabled
                          className="form__input"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="label">Facebook URL</label>
                      <input
                        defaultValue="https://nghiatran.info"
                        type="text"
                        className="form__input"
                        placeholder=""
                      />
                    </div>
                    <div className="form-group">
                      <label className="label">Website</label>
                      <input
                        defaultValue=""
                        type="text"
                        className="form__input"
                      />
                    </div>
                    <div className="form-container textarea">
                      <label className="label">Giới thiệu bản thân</label>
                      <textarea
                        className="form__input"
                        name="content"
                        defaultValue={""}
                      />
                    </div>
                    <p className="noti">Cập nhận thông tin thành công</p>
                    <div className="form-group">
                      <div className="btnsubmit">
                        <button className="btn btn--primary">Lưu lại</button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* Khoá học của tôi */}
                <div className="tab__content-item">
                  <div className="courses__list">
                    <div className="courses__list-item">
                      <div className="img">
                        <a href="course-detail.html">
                          <img
                            src="https://cfdcircle.vn/files/thumbnails/ahvVmtDlrzUPhKLDrc4YkdA8iFbACauYCN76TSGs.jpg"
                            alt="Khóa học CFD"
                            className="course__thumbnail"
                          />
                          <span className="course__img-badge badge">
                            Offline | Online
                          </span>
                        </a>
                      </div>
                      <div className="content">
                        <p className="label">Front-End</p>
                        <h3 className="title --t3">
                          <a href="course-detail.html">Frontend Newbie</a>
                        </h3>
                        <div className="content__info">
                          <div className="user">
                            <div className="user__img">
                              <img
                                src="img/avatar_nghia.jpg"
                                alt="Avatar teacher"
                              />
                            </div>
                            <p className="user__name">Trần Nghĩa</p>
                          </div>
                          <div className="price">
                            <strong>4.500.000đ</strong>
                          </div>
                        </div>
                        <div className="content__action">
                          <a
                            href="course-order.html"
                            className="btn btn--primary"
                          >
                            Đăng ký ngay
                          </a>
                          <a
                            href="course-detail.html"
                            className="btn btn--default"
                          >
                            <img src="img/icon-paper.svg" alt="icon paper" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="courses__list-item">
                      <div className="img">
                        <a href="course-detail.html">
                          <img
                            src="https://cfdcircle.vn/files/thumbnails/9VVXxGDc4ujKCegv4zcejuxJ4gC8C1qeXnECvy7s.jpg"
                            alt="Khóa học CFD"
                            className="course__thumbnail"
                          />
                          <span className="course__img-badge badge">
                            Offline | Online
                          </span>
                        </a>
                      </div>
                      <div className="content">
                        <p className="label">Front-End</p>
                        <h3 className="title --t3">
                          <a href="https://cfdcircle.vn/files/thumbnails/9VVXxGDc4ujKCegv4zcejuxJ4gC8C1qeXnECvy7s.jpg">
                            Web Responsive
                          </a>
                        </h3>
                        <div className="content__info">
                          <div className="user">
                            <div className="user__img">
                              <img
                                src="img/avatar_nghia.jpg"
                                alt="Avatar teacher"
                              />
                            </div>
                            <p className="user__name">Trần Nghĩa</p>
                          </div>
                          <div className="price">
                            <strong>4.900.000đ</strong>
                          </div>
                        </div>
                        <div className="content__action">
                          <a
                            href="course-order.html"
                            className="btn btn--primary"
                          >
                            Đăng ký ngay
                          </a>
                          <a
                            href="course-detail.html"
                            className="btn btn--default"
                          >
                            <img src="img/icon-paper.svg" alt="icon paper" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Lịch sử thanh thánh */}
                <div className="tab__content-item">
                  <div className="itemhistory">
                    <div className="name">Frontend Newbie</div>
                    <div className="payment">Chuyển khoản</div>
                    <div className="date">05/01/2022</div>
                    <div className="money">4.500.000 VND</div>
                  </div>
                  <div className="itemhistory">
                    <div className="name">Web Responsive</div>
                    <div className="payment">Tiền mặt</div>
                    <div className="date">14/07/2022</div>
                    <div className="money">4.900.000 VND</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StudentProfilePage;
