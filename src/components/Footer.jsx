import { Container, Row, Col } from "react-bootstrap"
import { Facebook, Telephone, Envelope, GeoAlt } from "react-bootstrap-icons"

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa",
        marginTop: "80px",
        padding: "50px 0 20px",
      }}
    >
      <Container>
        <Row className="g-4">
          {/* Giới thiệu */}
          <Col md={4} className="mb-4">
            <h5 style={{ color: "#84B4C8", marginBottom: "20px", fontWeight: 600 }}>
              Craftsy Nest
            </h5>
            <p style={{ color: "#6c757d", lineHeight: "1.7", fontSize: "15px" }}>
              Nơi di sản chạm vào đôi tay sáng tạo — Mang trải nghiệm thủ công Việt Nam đến mọi gia đình.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a
                href="https://www.facebook.com/craftsynestvietnam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Craftsy Nest"
              >
                <Facebook size={22} style={{ color: "#84B4C8", cursor: "pointer" }} />
              </a>
              <a
                href="https://www.tiktok.com/@craftsynestvietnam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Craftsy Nest"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3116/3116491.png"
                  alt="TikTok"
                  style={{
                    width: 22,
                    height: 22,
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                />
              </a>
            </div>
          </Col>

          {/* Liên kết nhanh - chỉ hiển thị text in đậm, không click */}
          <Col md={4} className="mb-4">
            <h6 style={{ color: "#2c3e50", marginBottom: "20px", fontWeight: 600 }}>
              Liên kết nhanh
            </h6>
            <p
              style={{
                color: "#2c3e50",
                fontWeight: "bold",
                fontSize: "14.5px",
                margin: 0,
                lineHeight: "1.6",
              }}
            >
              Hỗ trợ · Chính sách bảo mật · Điều khoản sử dụng
            </p>
          </Col>

          {/* Liên hệ nhanh */}
          <Col md={4} className="mb-4">
            <h6 style={{ color: "#2c3e50", marginBottom: "20px", fontWeight: 600 }}>
              Liên Hệ Nhanh
            </h6>
            <div className="d-flex align-items-start mb-3">
              <Telephone size={16} style={{ color: "#84B4C8", marginRight: "12px", marginTop: "2px" }} />
              <span style={{ color: "#6c757d", fontSize: "14.5px" }}>0984 421 580</span>
            </div>
            <div className="d-flex align-items-start mb-3">
              <Envelope size={16} style={{ color: "#84B4C8", marginRight: "12px", marginTop: "2px" }} />
              <a
                href="mailto:craftsynest.team@gmail.com"
                style={{
                  color: "#6c757d",
                  fontSize: "14.5px",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#84B4C8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6c757d")}
              >
                craftsynest.team@gmail.com
              </a>
            </div>
            <div className="d-flex align-items-start mb-3">
              <GeoAlt size={16} style={{ color: "#84B4C8", marginRight: "12px", marginTop: "2px" }} />
              <span style={{ color: "#6c757d", fontSize: "14.5px" }}>
                19 Ngõ 12 Hàm Nghi, Nam Từ Liêm, Hà Nội
              </span>
            </div>
            <div className="d-flex align-items-start">
              <span style={{ color: "#6c757d", fontSize: "14px", fontStyle: "italic" }}>
                Giờ làm việc: Thứ 2 - Thứ 6: 08:00 - 18:00; Thứ 7: 09:00 - 17:00
              </span>
            </div>
          </Col>
        </Row>

        <hr style={{ margin: "40px 0 20px", borderColor: "#dee2e6", opacity: 0.6 }} />

        <Row>
          <Col className="text-center">
            <p style={{ color: "#6c757d", fontSize: "13.5px", margin: 0 }}>
              Bản quyền © Craftsy Nest — Bảo lưu mọi quyền.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer