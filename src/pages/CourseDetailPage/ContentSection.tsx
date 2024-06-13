import Accordion from "../../components/Accordion";
import { formatDate } from "../../utils/format";

const ContentSection = ({
  description,
  schedule,
  content,
  required,
  teams,
}: {
  description: string;
  schedule: any;
  content: any;
  required: any;
  teams: any;
}) => {
  const {
    startDate,
    days,
    time,
    address,
  }: { startDate: number; days: string; time: string; address: string } =
    schedule || {};
  const modifiedContent = content?.map((item: any, index: string) => {
    return {
      id: item?.id || new Date().getDate() + index,
      title: item?.title,
      content: item?.description,
    };
  });
  return (
    <section className="contentdetail">
      <div className="content">
        <div className="container">
          <div className="contentrow ctintro">
            <h3 className="contentrow__title title --t3">Giới thiệu</h3>
            <div
              className="contenteditor"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
            <div className="videowrap">
              <iframe
                title="YouTube video player"
                src="https://www.youtube.com/embed/C7GoVPoamdM?rel=0"
                width={560}
                height={315}
                frameBorder={0}
                // allowFullScreen="allowfullscreen"
              />
            </div>
          </div>
          <div className="contentrow ctschedule">
            <h3 className="contentrow__title title --t3">Lịch học</h3>
            <div className="ctschedule__box">
              <div className="info">
                <div className="labeltext">
                  <span className="label --blue">Khai giảng</span>
                  <p className="title --t3">{formatDate(startDate)}</p>
                </div>
                <div className="labeltext">
                  <span className="label --blue">Ngày học</span>
                  <p className="title --t3">{days || ""}</p>
                </div>
                <div className="labeltext">
                  <span className="label --blue">Thời gian</span>
                  <p className="title --t3">{time || ""}</p>
                </div>
                <div className="labeltext">
                  <span className="label --blue">Địa điểm</span>
                  <p className="title --t3">{address || ""}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contentrow ctlession">
            <h3 className="contentrow__title title --t3">Nội dung khoá học</h3>
            <Accordion data={modifiedContent} label="Thông tin chung" />
          </div>
          <div className="contentrow ctrequest">
            <h3 className="contentrow__title title --t3">Yêu cầu cần có</h3>
            <div className="ctrequest__content">
              {required?.map((item: any, index: string) => {
                return <p key={index}>{item || ""}</p>;
              })}
            </div>
          </div>
          <div className="contentrow ctteacher">
            <h3 className="contentrow__title title --t3">Giảng viên</h3>
            <div className="ctteacher__content">
              {teams?.map((team: any, index: string) => {
                const { image, name, tags, jobTitle, id, description } =
                  team || {};
                return (
                  <div key={id || index} className="itemteacher">
                    <div className="itemteacher__avatar">
                      <img src={image || ""} alt="CFD Circle" />
                    </div>
                    <div className="itemteacher__info">
                      <div className="itemteacher__info-name">
                        <p className="title --t3">{name || ""}</p>
                        <span className="label badge --teacher">
                          {tags[0] || ""}
                        </span>
                      </div>
                      <h5 className="itemteacher__info-pos label">
                        {jobTitle || ""}
                      </h5>
                      <p className="itemteacher__info-des">
                        {description || ""}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
