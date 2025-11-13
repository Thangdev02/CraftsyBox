"use client"

import { useState } from "react"
import { Container, Row, Col, Card, Form, Button, Alert, Spinner } from "react-bootstrap"
import { motion } from "framer-motion"
import { GeoAlt, Telephone, Envelope, Clock, Send } from "react-bootstrap-icons"
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [showAlert, setShowAlert] = useState(false)
  const [alertType, setAlertType] = useState("success")
  const [alertMessage, setAlertMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // EmailJS configuration (giữ nguyên)
  const EMAILJS_SERVICE_ID = "service_3ejcq7l"
  const EMAILJS_TEMPLATE_ID = "template_07bt4wz"
  const EMAILJS_PUBLIC_KEY = "2lJQor5nLTW6HuCBb"

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const showNotification = (type, message) => {
    setAlertType(type)
    setAlertMessage(message)
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 5000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showNotification("danger", "Vui lòng điền đầy đủ các trường bắt buộc!")
      return
    }

    setIsSubmitting(true)

    try {
      const templateParams = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim() || "Tin nhắn từ website",
        message: formData.message.trim(),
        to_name: "Quản trị viên",
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      showNotification(
        "success",
        "Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công. Chúng tôi sẽ phản hồi sớm nhất có thể."
      )

      setFormData({ name: "", email: "", subject: "", message: "" })

    } catch (error) {
      const errorMessage = error?.text || error?.message || "Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau."
      showNotification("danger", errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh" }}>
      <Container>
        {/* Page Header */}
        <section className="banner-section contact-banner position-relative overflow-hidden rounded-4 mb-5">
          <div className="banner-overlay position-absolute w-100 h-100" style={{ backgroundColor: "rgba(0,0,0,0.4)", zIndex: 1 }} />
          <div
            className="position-absolute w-100 h-100"
            style={{
              backgroundImage: "url('/images/contact-banner.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.7)",
            }}
          />
          <Container className="h-100 position-relative" style={{ zIndex: 2 }}>
            <Row className="h-100 align-items-center justify-content-center text-center">
              <Col>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="display-4 fw-bold mb-3 text-white">
                    Liên Hệ Với Chúng Tôi
                  </h1>
                  <p className="lead text-light">
                    Craftsy Nest - luôn sẵn sàng lắng nghe và hỗ trợ bạn trong mọi hành trình sáng tạo.

                  </p>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        <Row>
          {/* Contact Information */}
          <Col lg={4} className="mb-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="fw-bold mb-4" style={{ color: "#2c3e50" }}>
                Thông Tin Liên Hệ
              </h3>

              {/* Địa chỉ */}
              <Card className="mb-3" style={{ border: "none", backgroundColor: "#f8f9fa" }}>
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#f89b0a",
                      }}
                    >
                      <GeoAlt size={20} color="white" />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Địa chỉ</h6>
                      <p className="text-muted mb-0">
                        19 Ngõ 12 Hàm Nghi, Nam Từ Liêm, Hà Nội
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              {/* Điện thoại */}
              <Card className="mb-3" style={{ border: "none", backgroundColor: "#f8f9fa" }}>
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#f89b0a",
                      }}
                    >
                      <Telephone size={20} color="white" />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Điện thoại</h6>
                      <p className="text-muted mb-0">
                        <a href="tel:0984421580" style={{ color: "#1976d2", textDecoration: "none" }}>
                          0984 421 580
                        </a>
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              {/* Email */}
              <Card className="mb-3" style={{ border: "none", backgroundColor: "#f8f9fa" }}>
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#f89b0a",
                      }}
                    >
                      <Envelope size={20} color="white" />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Email</h6>
                      <p className="text-muted mb-0">
                        <a href="mailto:craftsynest@gmail.com" style={{ color: "#1976d2", textDecoration: "none" }}>
                          craftsynest@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              {/* Facebook */}
              <Card className="mb-3" style={{ border: "none", backgroundColor: "#f8f9fa" }}>
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#fff",
                        border: "1px solid #f89b0a"
                      }}
                    >
                      <a
                        href="https://www.facebook.com/craftsynestvietnam"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "flex", alignItems: "center" }}
                        aria-label="Facebook"
                      >
                        <img
                          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                          alt="Facebook"
                          style={{ width: 24, height: 24, filter: "invert(36%) sepia(70%) saturate(400%) hue-rotate(170deg)" }}
                        />
                      </a>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Facebook</h6>
                      <a
                        href="https://www.facebook.com/craftsynestvietnam"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#1976d2", textDecoration: "none", fontSize: 15 }}
                      >
                        facebook.com/craftsynestvietnam
                      </a>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              {/* TikTok */}
              <Card className="mb-3" style={{ border: "none", backgroundColor: "#f8f9fa" }}>
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#fff",
                        border: "1px solid #8B5E3C"
                      }}
                    >
                      <a
                        href="https://www.tiktok.com/@craftsynestvietnam"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "flex", alignItems: "center" }}
                        aria-label="TikTok"
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png"
                          alt="TikTok"
                          style={{ width: 24, height: 24 }}
                        />
                      </a>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">TikTok</h6>
                      <a
                        href="https://www.tiktok.com/@craftsynestvietnam"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#1976d2", textDecoration: "none", fontSize: 15 }}
                      >
                        tiktok.com/@craftsynestvietnam
                      </a>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              {/* Giờ làm việc */}
              <Card style={{ border: "none", backgroundColor: "#f8f9fa" }}>
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#f89b0a",
                      }}
                    >
                      <Clock size={20} color="white" />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Giờ Làm Việc</h6>
                      <p className="text-muted mb-0">
                        Thứ 2 — Thứ 6: 08:00 — 18:00<br />
                        Thứ 7: 09:00 — 17:00
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Contact Form */}
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card style={{ border: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                <Card.Body className="p-5">
                  <h3 className="fw-bold mb-4" style={{ color: "#2c3e50" }}>
                    Gửi Tin Nhắn
                  </h3>

                  {showAlert && (
                    <Alert variant={alertType} className="mb-4">
                      <strong>
                        {alertType === "success" ? "Thành công!" : "Thông báo!"}
                      </strong>{" "}
                      {alertMessage}
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-bold">Họ và tên *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            disabled={isSubmitting}
                            style={{ borderRadius: "10px", padding: "12px" }}
                            placeholder="Nhập họ và tên của bạn"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-bold">Email *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            disabled={isSubmitting}
                            style={{ borderRadius: "10px", padding: "12px" }}
                            placeholder="Nhập địa chỉ email"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">Chủ đề</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        style={{ borderRadius: "10px", padding: "12px" }}
                        placeholder="Chủ đề tin nhắn"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">Tin nhắn *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        style={{ borderRadius: "10px", padding: "12px" }}
                        placeholder="Nhập nội dung tin nhắn của bạn..."
                      />
                    </Form.Group>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      style={{
                        background: isSubmitting
                          ? "linear-gradient(135deg, #6c757d 0%, #495057 100%)"
                          : "linear-gradient(135deg, #f89b0a 0%, #8B5E3C 100%)",
                        border: "none",
                        borderRadius: "25px",
                        padding: "12px 30px",
                        fontWeight: "600",
                        color: "white",
                        transition: "all 0.3s ease"
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <Spinner animation="border" size="sm" className="me-2" />
                          Đang gửi...
                        </>
                      ) : (
                        <>
                          <Send className="me-2" />
                          Gửi Tin Nhắn
                        </>
                      )}
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* Map Section */}
        <Row className="mt-5">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card style={{ border: "none", borderRadius: "15px", overflow: "hidden" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.097956030297!2d105.763661315447!3d21.035166392219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454bf279c7883%3A0x1e63a7c8e7dbd0d3!2zMTkgTmcuIDEyIFAuIEjDoG0gTmdoaSwgQ-G6p3UgRGnhu4VuLCBOYW0gVOG7qyBMacOqbSwgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1762057009890!5m2!1svi!2s"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Craftsy Nest - Địa chỉ Hà Nội"
                />
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact