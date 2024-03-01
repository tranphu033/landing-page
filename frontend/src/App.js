import h1 from "./images/h1.jpg";
import h2 from "./images/h2.png";
import h3 from "./images/h3.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const requiredMsg = "Vui lòng điền thông tin!";
  const AlertMsg = ({ msg }) => {
    return <div className="ts-sm text-white">{msg}</div>;
  };
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setIsLoading(true);
      await axios.post("http://127.0.0.1:8000/api/contacts", data);
      setIsLoading(false);
      alert("Gửi yêu cầu thành công!");
      window.location.reload();
    } catch (e) {
      setIsLoading(false);
      alert("Gửi yêu cầu thất bại!");
    }
  };

  return (
    <>
      <header>
        <div id="navigation" className="d-flex text-danger ts-17 fw-500">
          <div className="ms-3 py-3 px-2 ts-xxl">Logo</div>
          <a className="py-3 px-3 align-self-center nav-link" href="#part-1">
            Giới thiệu
          </a>
          <a className="py-3 px-3 align-self-center nav-link" href="#part-2">
            Ưu đãi
          </a>
          <a className="py-3 px-3 align-self-center nav-link" href="#part-3">
            Đặt mua
          </a>
        </div>
      </header>
      <main
        data-bs-spy="scroll"
        data-bs-target="#navigation"
        data-bs-offset="0"
        tabindex="0"
      >
        <div className="d-flex align-items-center justify-content-center bg-danger py-5">
          <img src={h1} alt="h1" width="33%" className="rounded-5" />
          <div
            className="text-white fw-bold text-center ms-5"
            style={{ fontSize: "40px" }}
          >
            SẢN PHẨM KẸO TẾT <br /> KẸO SÌU CHÂU
          </div>
        </div>
        <div id="part-1" className="intro py-5" style={{ padding: "0 200px" }}>
          <div className="text-center text-danger" style={{ fontSize: "50px" }}>
            Giới thiệu chung về sản phẩm
          </div>
          <p className="mt-2 ts-lg">
            <strong>Kẹo Sìu Châu</strong>, thức quà quê không thể thiếu của
            người Thành Nam xưa, vẫn ngọt ngào tồn tại và gìn giữ đến ngày nay.
            Từ những thành phần nguyên bản của quê hương, kẹo Sìu Châu không chỉ
            mang đậm hương vị thiên nhiên mà còn là biểu tượng chân thực của sự
            kính trọng, lòng biết ơn và tình thân thuộc gia đình. <br />
            Hương vị tính tế và vị ngọt thanh nhẹ, kẹo Sìu Châu đã trở thành một
            món quà tuyệt vời, thể hiện tấm lòng tri ân và sự quan tâm từ người
            dân Thành Nam. Vượt qua thời gian, kẹo Sìu Châu không chỉ là một món
            ăn, mà còn là ký ức về nguồn cội, về truyền thống gia đình, làm
            phong phú thêm vẻ đẹp văn hóa của nơi đây, mang đậm hồn quê và sự ấm
            áp của quê nhà.
          </p>
          <div className="row row-cols-3 mt-4">
            <div className="pe-2">
              <div className="intro-col p-3 h-100">
                <span className="text-danger ts-xl fw-500">
                  SẢN PHẨM ĐẠT OCOP 3 SAO
                </span>
                <br />
                Kẹo Sìu Châu Minh Dương được sản xuất trên dây chuyền hiện đại,
                chất lượng sản phẩm đạt các yêu cầu theo chương trình OCOP là
                sản phẩm đặc trưng, tiêu biểu, truyền thống của tỉnh Nam Định
              </div>
            </div>
            <div className="pe-2">
              <div className="intro-col p-3 h-100">
                <span className="text-danger ts-xl fw-500">
                  QUÀ TẶNG TINH TẾ
                </span>
                <br />
                Là một biểu tượng của di sản, những viên kẹo Sìu Châu của Minh
                Dương là giá trị truyền thống chân thành được kế thừa qua các
                thế hệ, một mảnh văn hóa đậm đà của Việt Nam
              </div>
            </div>
            <div>
              <div className="intro-col p-3 h-100">
                <span className="text-danger ts-xl fw-500">
                  ISO 9001 : 2018
                </span>
                <br />
                Sản phẩm đạt tiêu chuẩn về hệ thống quản lý chất lượng, do Tổ
                chức Tiêu chuẩn hóa Quốc tế phát triển và ban hành được sử dụng
                và công nhận trên toàn thế giới
              </div>
            </div>
          </div>
        </div>
        <div
          id="part-2"
          className="d-flex bg-danger text-white py-3"
          style={{ margin: "0 200px" }}
        >
          <div className="ms-4 ts-smd" style={{ width: "30%" }}>
            <img src={h2} alt="h2" width="90%" />
            <div>
              *Áp dụng cho khách hàng mua sản phẩm <br /> từ ngày 20/12/2023 đến
              hết 20/01/2024
            </div>
          </div>
          <div className="flex-fill text-center">
            <div className="h-100 d-flex flex-column justify-content-center">
              <div
                style={{
                  fontSize: "60px",
                  lineHeight: "1",
                }}
              >
                Ưu đãi lên đến
              </div>
              <div
                className="fw-bold"
                style={{
                  fontSize: "85px",
                  lineHeight: "1",
                }}
              >
                200% OFF
              </div>
              <div>
                <span
                  className="d-inline-block rounded px-2 py-1 text-dark fw-500 ts-xxl mt-4"
                  style={{ backgroundColor: "#F9F1C3" }}
                >
                  TRẢI NGHIỆM TINH TÚY VỊ NGỌT QUÊ HƯƠNG
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          id="part-3"
          className="row row-cols-3 mt-3 bg-danger text-white"
          style={{ padding: "25px 130px" }}
        >
          <div>
            <img src={h3} alt="h3" width="80%" />
          </div>
          <div className="text-center d-flex flex-column justify-content-center pe-5">
            <div className="ts-xl fw-bold mb-2">KẸO SÌU CHÂU</div>
            <div className="mb-3">
              <div className="fw-500">
                THỰC PHẨM AN TOÀN VÀ TỐT CHO SỨC KHỎE
              </div>
              <div className="ts-smd">
                Dây chuyền sản xuất đạt chuẩn ISO 9001 - 2018, sản phẩm không sử
                dụng chất bảo quản.
              </div>
            </div>
            <div className="mb-3">
              <div className="fw-500">DỊCH VỤ CHUYÊN NGHIỆP</div>
              <div className="ts-smd">
                Phân phối tại tất cả các tỉnh thành trên cả nước
              </div>
            </div>
            <div>
              <div className="fw-500">GIÁ HỢP LÝ & NHIỀU ƯU ĐÃI</div>
              <div className="ts-smd">
                Ưu đãi cho khách hàng mua sản phẩm chính hãng tù 3 sản phẩm trở
                lên
              </div>
            </div>
          </div>
          <div>
            <form
              className="contact-form p-4 rounded"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h4 className="mb-3 text-center">Đặt mua ngay</h4>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Họ và tên"
                  aria-label="fullname"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && <AlertMsg msg={requiredMsg} />}
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email"
                  aria-label="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                />
                {errors.email?.type === "required" && (
                  <AlertMsg msg={requiredMsg} />
                )}
                {errors.email?.type === "pattern" && (
                  <AlertMsg msg="Email sai định dạng!" />
                )}
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Số điện thoại"
                  aria-label="phone"
                  {...register("phone", { required: true })}
                />
                {errors.phone && <AlertMsg msg={requiredMsg} />}
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Số lượng mua"
                  aria-label="amount"
                  {...register("amount", { required: true })}
                />
                {errors.amount && <AlertMsg msg={requiredMsg} />}
              </div>
              <button
                type="submit"
                className="btn btn-warning text-white fw-bold w-100"
              >
                {!isLoading ? "GỬI" : "Vui lòng chờ"}
                {isLoading && (
                  <div
                    class="spinner-border spinner-border-sm ms-1"
                    role="status"
                  ></div>
                )}
              </button>
            </form>
          </div>
        </div>
      </main>
      <footer>
        <div
          className="row row-cols-3 py-5"
          style={{ backgroundColor: "#f5efe0" }}
        >
          <div className="ps-5">
            <div className="text-danger fw-bold">
              Công ty Candy Landing Page
            </div>
            <div>
              Địa chỉ: 18 đường 12, khu dân cư Jamona, Phường Hiệp Bình Phước,
              Thành phố Thủ Đức, Thành phố Hồ Chí Minh
            </div>
            <div>Hotline: 0778777797</div>
            <div>Email: info@candy-landing-page.vn</div>
          </div>
          <div className="ps-5">
            <div className="text-danger fw-bold">Hỗ trợ khách hàng</div>
            <div>
              Hóa đơn xuất hàng chính hãng <br />
              Chính sách đổi trả
            </div>
          </div>
          <div className="ps-5">
            <div className="text-danger fw-bold">Các sản phẩm khác</div>
            <div>
              Quà Tết Giáp Thìn 2024
              <br />
              Sản phẩm ngô nếp tươi sấy
              <br />
              Sản phẩm thanh ngũ cốc dinh dưỡng
              <br />
              Các chương trình khuyến mại
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
