"use client"

import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { motion } from "framer-motion"
import {
    Heart,
    Shield,
    Leaf,
    Bullseye,
    PeopleFill,
    Lightbulb
} from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"

const AboutUs = () => {
    const navigate = useNavigate()

    const founders = [
        { name: "Hoàng Thị Hồng Lan", role: "CEO" },
        { name: "Nguyễn Thu Trang", role: "CPO / COO" },
        { name: "Phạm Đức Thế", role: "CMO" },
        { name: "Đặng Tuấn Vũ", role: "CFO" },
        { name: "Bùi Thị Huế", role: "CXO" }, // Đã sửa: Huê → Huế
    ]

    const values = [
        {
            icon: Shield,
            title: "Chất lượng & An toàn",
            description: "Chúng tôi cam kết mang đến sản phẩm đạt chuẩn – từ vật liệu được chứng nhận, hướng dẫn rõ ràng, đến kết quả bền đẹp và thẩm mỹ.",
        },
        {
            icon: Heart,
            title: "Lấy khách hàng làm trọng tâm",
            description: "Craftsy Nest luôn lắng nghe, đồng hành và hỗ trợ kịp thời trong suốt hành trình trải nghiệm của khách hàng, cùng chính sách đổi trả minh bạch và thân thiện.",
        },
        {
            icon: Leaf,
            title: "Bền vững & Trách nhiệm xã hội",
            description: "Chúng tôi ưu tiên thiết kế bao bì thân thiện với môi trường, hợp tác công bằng cùng nghệ nhân, và luôn tôn trọng giá trị di sản cũng như thiên nhiên.",
        },
        {
            icon: Bullseye,
            title: "Minh bạch & Công bằng",
            description: "Chính trực trong cách kể chuyện di sản, rõ ràng về giá cả và điều khoản, đồng thời tôn trọng quyền hình ảnh và đóng góp của từng đối tác.",
        },
        {
            icon: Lightbulb,
            title: "Tinh gọn & Hiệu quả",
            description: "Vận hành tối ưu – tiết kiệm chi phí, thời gian và nguồn lực, không ngừng cải thiện để mang đến trải nghiệm tốt nhất cho khách hàng.",
        },
        {
            icon: PeopleFill,
            title: "Gắn kết & Phát triển đội ngũ",
            description: "Chúng tôi xây dựng môi trường làm việc ấm áp, hợp tác và hướng đến học hỏi, nơi mỗi cá nhân được trao quyền, ghi nhận và cùng lớn lên cùng thương hiệu.",
        },
    ]

    return (
        <div style={{ paddingTop: "100px", minHeight: "100vh" }}>
            <Container>
                {/* Banner Section */}
                <section className="banner-section about-banner position-relative overflow-hidden rounded-4 mb-5">
                    <div className="banner-overlay position-absolute w-100 h-100" style={{ zIndex: 1 }} />
                    <div
                        className="position-absolute w-100 h-100"
                        style={{
                            backgroundImage: "url('/images/craftsy-banner.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            filter: "brightness(0.7)",
                        }}
                    />
                    <Container className="h-100 position-relative " style={{ zIndex: 2 }}>
                        <Row className="h-100 align-items-center justify-content-center text-center">
                            <Col lg={10}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <h1 className="display-3 fw-bold mb-4 text-white">
                                        Về Chúng Tôi
                                    </h1>
                                    <h2 className="display-5 fw-semibold mb-3 text-white">
                                        Craftsy Nest - Khi di sản chạm vào đôi tay sáng tạo
                                    </h2>
                                    <p className="lead text-white mb-2" style={{ maxWidth: "800px", margin: "0 auto" }}>
                                        Craftsy Nest ra đời để kết nối lại sợi dây giữa truyền thống và sáng tạo, để mỗi người trẻ hay mỗi em nhỏ đều có thể “chạm tay vào di sản” theo cách của riêng mình.
                                    </p>
                                    <div className="d-flex gap-3 justify-content-center flex-wrap mb-4">
                                        <Button
                                            variant="light"
                                            size="lg"
                                            className="fw-semibold px-4"
                                            onClick={() => navigate("/products")}
                                        >
                                            Khám Phá Craftsy Box
                                        </Button>
                                        <Button
                                            variant="outline-light"
                                            size="lg"
                                            className="fw-semibold px-4"
                                            onClick={() => navigate("/products")}
                                        >
                                            Mua ngay
                                        </Button>
                                    </div>
                                </motion.div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Our Story Section */}
                <Row className="mb-5 align-items-center">
                    <Col lg={6}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="fw-bold mb-4" style={{ color: "#2c3e50" }}>
                                Câu Chuyện Của Chúng Tôi
                            </h2>
                            <h3 className="h5 fw-semibold mb-3" style={{ color: "#84B4C8" }}>
                                Khi di sản chạm vào đôi tay sáng tạo
                            </h3>
                            <p className="text-muted mb-4" style={{ lineHeight: "1.8" }}>
                                Trong nhịp sống hiện đại, chúng ta dễ quên mất rằng văn hoá không chỉ nằm trong sách, mà ở ngay quanh ta - trong sắc men gốm, trong cánh chuồn chuồn tre, trong khối bột tò he mềm mại. Craftsy Nest ra đời để kết nối lại sợi dây giữa truyền thống và sáng tạo, để mỗi người trẻ hay mỗi em nhỏ đều có thể “chạm tay vào di sản” theo cách của riêng mình.
                            </p>
                            <p className="text-muted mb-4" style={{ lineHeight: "1.8" }}>
                                Từ cảm hứng đến hành động, chúng tôi bắt đầu với một câu hỏi giản dị: làm sao để thế hệ trẻ có thể yêu và hiểu di sản Việt Nam – không qua bài học, mà qua trải nghiệm?
                            </p>
                            <p className="text-muted" style={{ lineHeight: "1.8" }}>
                                Và từ đó, <strong>Craftsy Box</strong> ra đời: những bộ trải nghiệm nhỏ gọn, gần gũi, dễ làm ngay từ lần đầu, nhưng chứa đựng bên trong cả một hành trình văn hoá Việt Nam sống động và đầy cảm hứng.
                            </p>
                        </motion.div>
                    </Col>
                    <Col lg={6}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="/images/abcde.jpg"
                                alt="Craftsy Story"
                                className="img-fluid rounded-3 shadow-lg"
                                style={{ boxShadow: "0 15px 35px rgba(0,0,0,0.1)" }}
                            />
                        </motion.div>
                    </Col>
                </Row>

                {/* Vision & Mission */}
                <Row className="mb-5 g-4">
                    <Col md={6}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="h-100 p-4 bg-light rounded-3"
                        >
                            <h4 className="fw-bold text-primary mb-3">Tầm Nhìn</h4>
                            <p className="text-muted">
                                Đến năm 2035, Craftsy Nest hướng tới lan toả trải nghiệm thủ công mang cảm hứng di sản – an toàn, sáng tạo và bền vững đến với <strong>mọi trái tim yêu sáng tạo</strong>.
                            </p>
                        </motion.div>
                    </Col>
                    <Col md={6}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="h-100 p-4 bg-light rounded-3"
                        >
                            <h4 className="fw-bold text-success mb-3">Sứ Mệnh</h4>
                            <p className="text-muted">
                                Craftsy Nest tạo nên trải nghiệm thủ công sáng tạo và bền vững, kết nối con người với văn hoá và cảm hứng Việt trong nhịp sống hiện đại.
                            </p>
                        </motion.div>
                    </Col>
                </Row>

                {/* Core Values */}
                <section className="mb-5" style={{ backgroundColor: "#f8f9fa", margin: "0 -15px", padding: "80px 15px" }}>
                    <Container>
                        <Row className="text-center mb-5">
                            <Col>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="display-5 fw-bold mb-3" style={{ color: "#2c3e50" }}>
                                        Giá Trị Cốt Lõi
                                    </h2>
                                    <p className="lead text-muted">Những nguyên tắc định hướng mọi hoạt động của chúng tôi</p>
                                </motion.div>
                            </Col>
                        </Row>

                        <Row>
                            {values.map((value, index) => (
                                <Col lg={4} md={6} className="mb-4" key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="text-center h-100"
                                    >
                                        <Card className="h-100 border-0 shadow-sm">
                                            <Card.Body className="p-4">
                                                <div
                                                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                                                    style={{
                                                        width: "70px",
                                                        height: "70px",
                                                        backgroundColor: "#84B4C8",
                                                    }}
                                                >
                                                    <value.icon size={28} color="white" />
                                                </div>
                                                <h5 className="fw-bold mb-3" style={{ color: "#2c3e50" }}>
                                                    {value.title}
                                                </h5>
                                                <p className="text-muted small" style={{ lineHeight: "1.6" }}>
                                                    {value.description}
                                                </p>
                                            </Card.Body>
                                        </Card>
                                    </motion.div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

                {/* Founding Team */}
                <Row className="mb-5">
                    <Col>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-5"
                        >
                            <h2 className="display-5 fw-bold mb-3" style={{ color: "#2c3e50" }}>
                                Đội Ngũ Sáng Lập và Quản Trị
                            </h2>
                            <p className="lead text-muted">Những người thắp lửa cho hành trình sáng tạo - Craftsy Nest</p>
                        </motion.div>
                    </Col>
                </Row>

                <Row className="g-4 justify-content-center">
                    {founders.map((member, index) => (
                        <Col md={6} lg={4} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div
                                    className="bg-light rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                                    style={{ width: "100px", height: "100px" }}
                                >
                                    <PeopleFill size={40} color="#84B4C8" />
                                </div>
                                <h5 className="fw-bold">{member.name}</h5>
                                <p className="text-primary fw-semibold">{member.role}</p>
                            </motion.div>
                        </Col>
                    ))}
                </Row>

                {/* Call to Action */}
                <section
                    className="text-center text-white py-5 rounded-4 mt-5"
                    style={{
                        background: "linear-gradient(135deg, #84B4C8 0%, #B2D9EA 100%)",
                    }}
                >
                    <Container>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="fw-bold mb-3">Khám phá bộ kit phù hợp cho gia đình bạn</h3>
                            <p className="lead mb-4">
                                Xem video hướng dẫn mẫu hoặc liên hệ để hợp tác cùng nghệ nhân
                            </p>
                            <Button
                                variant="light"
                                size="lg"
                                className="fw-semibold px-5"
                                onClick={() => navigate("/products")}
                            >
                                Xem chi tiết
                            </Button>
                        </motion.div>
                    </Container>
                </section>
            </Container>
        </div>
    )
}

export default AboutUs