import useQuery from "../../hooks/useQuery";
import { orderService } from "../../services/orderService";
import { formatCurrentcy, formatDate } from "../../utils/format";

const MyPayment = () => {
  const {
    data: myPaymentData,
    loading: myPaymentLoading,
  }: { data: any; loading: boolean } = useQuery(
    orderService.getPaymentHistories
  );
  const myPayment = myPaymentData?.orders || {};
  return (
    <div className="tab__content-item" style={{ display: "block" }}>
      {myPayment?.length > 0 &&
        myPayment?.map((payment: any) => {
          const { id, paymentMethod, createdAt, course } = payment;
          console.log("payment", payment);
          return (
            <div key={id} className="itemhistory">
              <div className="name">{course?.name || ""}</div>
              <div className="payment">{paymentMethod || ""}</div>
              <div className="date">{formatDate(createdAt) || ""}</div>
              <div className="money">
                {formatCurrentcy(course?.price) + "VND"}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MyPayment;
