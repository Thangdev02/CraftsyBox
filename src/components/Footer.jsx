import { Container, Row, Col } from "react-bootstrap"
import { Facebook, Instagram, Envelope, Telephone, GeoAlt } from "react-bootstrap-icons"

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f8f9fa", marginTop: "80px", padding: "50px 0 20px" }}>
      <Container>
        <Row>
          {/* Giới thiệu */}
          <Col md={4} className="mb-4">
            <h5 style={{ color: "#84B4C8", marginBottom: "20px" }}>Craftsy Nest</h5>
            <p style={{ color: "#6c757d" }}>
              Nơi hội tụ tinh hoa thủ công — Mang đến sản phẩm handmade độc đáo, tinh tế và chất lượng cho mọi ngôi nhà.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a
                href="https://www.facebook.com/craftsynestvietnam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} style={{ color: "#84B4C8", cursor: "pointer" }} />
              </a>
              <a
                href="https://www.tiktok.com/@craftsynestvietnam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3116/3116491.png"
                  alt="Tiktok"
                  style={{ width: 20, height: 20, objectFit: "contain", filter: "grayscale(0)", cursor: "pointer" }}
                />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} style={{ color: "#84B4C8", cursor: "pointer" }} />
              </a>
            </div>
          </Col>

          {/* Liên kết nhanh */}
          <Col md={4} className="mb-4">
            <h6 style={{ color: "#2c3e50", marginBottom: "20px" }}>Liên kết nhanh</h6>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li className="mb-2">
                <a href="/support" style={{ color: "#6c757d", textDecoration: "none" }}>
                  Hỗ trợ
                </a>
              </li>
              <li className="mb-2">
                <a href="/privacy" style={{ color: "#6c757d", textDecoration: "none" }}>
                  Chính sách bảo mật
                </a>
              </li>
              <li className="mb-2">
                <a href="/terms" style={{ color: "#6c757d", textDecoration: "none" }}>
                  Điều khoản sử dụng
                </a>
              </li>
            </ul>
          </Col>

          {/* Liên hệ */}
          <Col md={4} className="mb-4">
            <h6 style={{ color: "#2c3e50", marginBottom: "20px" }}>Liên hệ nhanh</h6>
            <div className="d-flex align-items-center mb-2">
              <Telephone size={16} style={{ color: "#84B4C8", marginRight: "10px" }} />
              <span style={{ color: "#6c757d", fontSize: "14px" }}>0984 421 580</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <Envelope size={16} style={{ color: "#84B4C8", marginRight: "10px" }} />
              <span style={{ color: "#6c757d", fontSize: "14px" }}>craftsynest@gmail.com</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <GeoAlt size={16} style={{ color: "#84B4C8", marginRight: "10px" }} />
              <span style={{ color: "#6c757d", fontSize: "14px" }}>
                19 Ngõ 12 Hàm Nghi, Nam Từ Liêm, Hà Nội
              </span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <span style={{ color: "#6c757d", fontSize: "14px" }}>
                Giờ làm việc: Thứ 2–Thứ 6: 08:00–18:00; Thứ 7: 09:00–17:00
              </span>
            </div>
          </Col>
        </Row>

        <hr style={{ margin: "30px 0 20px", borderColor: "#dee2e6" }} />
        <Row>
          <Col className="text-center">
            <p style={{ color: "#6c757d", fontSize: "14px", margin: 0 }}>
              Bản quyền © Craftsy Nest — Bảo lưu mọi quyền.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
