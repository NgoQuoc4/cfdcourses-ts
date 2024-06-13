

const ContactPage = () => {
  return (
    <main className="mainwrapper contact --ptop">
      <div className="container">
        <div className="textbox">
          <h2 className="title --t2">Liên hệ &amp; Hỗ trợ</h2>
          <p className="desc">
            Bạn có bất cứ thắc mắc nào thì đừng ngần ngại liên hệ để được hỗ
            trợ?
            <br />
            Chúng tôi luôn ở đây
          </p>
        </div>
      </div>
      <div className="contact__content">
        <div className="container">
          <div className="wrapper">
            <div className="sidebar">
              <div className="sidebar__address infor">
                <div className="infor__item">
                  <label className="label">CFD Circle</label>
                  <p className="title --t4">
                    666/46/29 Ba Tháng Hai, phường 14, quận 10, TPHCM
                  </p>
                </div>
                <div className="infor__item">
                  <label className="label">Email</label>
                  <p className="title --t4">info@cfdcircle.vn</p>
                </div>
                <div className="infor__item">
                  <label className="label">Số điện thoại</label>
                  <p className="title --t4">098 9596 913</p>
                </div>
              </div>
              <div className="sidebar__business">
                <p>
                  Đối với yêu cầu kinh doanh xin vui lòng gửi cho chúng tôi tại:
                </p>
                <a href="#">business@cfdcircle.vn</a>
              </div>
              <a href="#" className="sidebar__messenger btn btn--primary">
                Trò chuyện trực tuyến
              </a>
            </div>
            <div className="form">
              <h3 className="title --t3">Gửi yêu cầu hỗ trợ</h3>
              <div className="form-group">
                <label className="label">
                  Họ và tên <span>*</span>
                </label>
                <input
                  defaultValue
                  type="text"
                  className="form__input formerror"
                />
                <p className="error">Họ và tên không được để trống</p>
              </div>
              <div className="form-group">
                <label className="label">
                  Email <span>*</span>
                </label>
                <input defaultValue type="text" className="form__input" />
              </div>
              <div className="form-group">
                <label className="label">
                  Số điện thoại <span>*</span>
                </label>
                <input defaultValue type="text" className="form__input" />
              </div>
              <div className="form-group">
                <label className="label">
                  Chủ đề cần hỗ trợ <span>*</span>
                </label>
                <div className="select">
                  <div className="head form__input">--</div>
                  <div className="sub">
                    <a href="#">Web Responsive</a>
                    <a href="#">React &amp; Redux</a>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="label">
                  Nội dung <span>*</span>
                </label>
                <textarea className="form__input" defaultValue={""} />
              </div>
              <div className="btncontrol">
                <button className="btn btn--primary">Gửi</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
