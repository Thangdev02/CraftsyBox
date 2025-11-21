import { Container, Row, Col, Button, Card } from "react-bootstrap"
import { motion, useScroll, useTransform } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { ArrowRight, Star, Heart, Award } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getProducts } from "../../api/product"

import "./Home.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Home = () => {
    // State cho sản phẩm nổi bật
    const [featuredProducts, setFeaturedProducts] = useState([])
    const [loadingProducts, setLoadingProducts] = useState(true)

    // State cho shop


    // Scroll parallax cho shapes
    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 600], [0, 120])
    const y2 = useTransform(scrollY, [0, 600], [0, -90])
    const y3 = useTransform(scrollY, [0, 600], [0, 70])

    // Fetch sản phẩm nổi bật
    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                setLoadingProducts(true)
                const response = await getProducts({
                    pageSize: 20,
                    pageNumber: 1,
                    isActive: true
                })
                const products = response?.data?.items || []
                const topProducts = products
                    .filter(product => product.rating && product.rating > 0)
                    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
                    .slice(0, 6)
                const productsWithImages = topProducts.map(product => ({
                    ...product,
                    image: product.commonImage?.startsWith("http")
                        ? product.commonImage
                        : `${import.meta.env.VITE_API_URL?.replace("/swagger/index.html", "") || "https://weekly.eposh.io.vn"}/${product.commonImage}`
                }))
                setFeaturedProducts(productsWithImages)
                // eslint-disable-next-line no-unused-vars
            } catch (error) {
                setFeaturedProducts([])
            } finally {
                setLoadingProducts(false)
            }
        }
        fetchFeaturedProducts()
    }, [])

    // Fetch shops (lấy 6 shop đang hoạt động, chỉ lấy tên và logo)

    return (
        <div style={{ paddingTop: "130px" }}>
            {/* Hero Section */}
            <section className="hero-section position-relative overflow-hidden">
                {/* Shapes */}
                <motion.div className="shape shape-1" style={{ y: y1 }} />
                <motion.div className="shape shape-2" style={{ y: y2 }} />
                <motion.div className="shape shape-3" style={{ y: y3 }} />

                <Container>
                    <Row className="align-items-center min-vh-75">
                        <Col lg={6}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 className="display-4 fw-bold mb-4">
                                    Craftsy Box
                                    <br />
                                    <span style={{ color: "#ffffff" }}> Khi di sản gõ nhẹ cửa trái tim sáng tạo</span>
                                </h1>
                                <p className="lead mb-4" style={{ fontSize: "1.2rem", opacity: 0.9 }}>
                                    Khám phá bộ kit thủ công Craftsy Nest – nơi bạn cùng học, cùng tạo và kết nối với văn hoá Việt.

                                </p>
                                <div className="d-flex gap-3">
                                    <Link to="/products">
                                        <Button
                                            className="btn-primary-custom btn-f89b0a"
                                            size="lg"
                                            style={{
                                                backgroundImage: "none",
                                                backgroundColor: "#f89b0a",
                                                borderColor: "#f89b0a",
                                                color: "#fff"
                                            }}
                                        >
                                            Xem chi tiết<ArrowRight className="ms-2" />
                                        </Button>
                                    </Link>
                                    <Link to="/products">
                                        <Button variant="outline-light" size="lg" className="btn-outline-custom">
                                            Xem Bộ Sưu Tập
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        </Col>
                        <Col lg={6}>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-center"
                            >
                                {/* Right-side illustration removed per design request */}
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Features Section */}
            <section className="section-padding" style={{ backgroundColor: "#f8f9fa" }}>
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
                                    Tại Sao Chọn Chúng Tôi?
                                </h2>
                                <p className="lead text-muted">Những giá trị cốt lõi làm nên sự khác biệt</p>
                            </motion.div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4} className="mb-4">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div
                                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                                    style={{
                                        width: "80px",
                                        height: "80px",
                                        backgroundColor: "#f88eab",
                                    }}
                                >
                                    <Heart size={32} color="white" />
                                </div>
                                <h4 className="fw-bold mb-3">Trải nghiệm có câu chuyện</h4>
                                <p className="text-muted">
                                    Hộp kit biến người dùng thành người kể chuyện: bao bì chỉn chu, in màu sắc sống động, QR và nội dung đa giác quan.

                                </p>
                            </motion.div>
                        </Col>

                        <Col md={4} className="mb-4">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div
                                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                                    style={{
                                        width: "80px",
                                        height: "80px",
                                        backgroundColor: "#ec592e",
                                    }}
                                >
                                    <Award size={32} color="white" />
                                </div>
                                <h4 className="fw-bold mb-3">Hành trình trải nghiệm</h4>
                                <p className="text-muted">
                                    Khám phá → Hiểu nguồn gốc → Thực hành → Hoàn thiện → Bảo quản & Chia sẻ. Mỗi bước có video, vật liệu chất lượng và hướng dẫn rõ ràng.

                                </p>
                            </motion.div>
                        </Col>

                        <Col md={4} className="mb-4">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div
                                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                                    style={{
                                        width: "80px",
                                        height: "80px",
                                        backgroundColor: "#44a86f",
                                    }}
                                >
                                    <Star size={32} color="white" />
                                </div>
                                <h4 className="fw-bold mb-3">Giá trị bền vững & cá nhân hóa</h4>
                                <p className="text-muted">
                                    Sản phẩm là kỷ vật văn hóa: nguồn gốc minh bạch, tùy chọn khắc tên/phiên bản giới hạn, refill và hướng dẫn bảo quản

                                </p>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Featured Products Section */}
            <section className="section-padding">
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
                                    Sản Phẩm Nổi Bật
                                </h2>
                                <p className="lead text-muted">Top 6 sản phẩm có đánh giá cao nhất</p>
                            </motion.div>
                        </Col>
                    </Row>

                    {loadingProducts ? (
                        <div className="text-center py-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Đang tải...</span>
                            </div>
                        </div>
                    ) : featuredProducts.length > 0 ? (
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="featured-products-swiper"
                        >
                            {featuredProducts.map((product, index) => (
                                <SwiperSlide key={product.id}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Card className="product-card h-100 shadow-sm">
                                            <div className="position-relative">
                                                <Card.Img
                                                    variant="top"
                                                    src={product.image || "/images/placeholder.jpg"}
                                                    className="product-image"
                                                    style={{ height: "250px", objectFit: "cover" }}
                                                />
                                                {/* Rating badge */}
                                                <div
                                                    className="position-absolute top-0 end-0 m-2 bg-warning text-dark px-2 py-1 rounded"
                                                    style={{ fontSize: "0.8rem", fontWeight: "bold" }}
                                                >
                                                    ⭐ {product.rating}
                                                </div>
                                            </div>
                                            <Card.Body className="d-flex flex-column">
                                                <Card.Title className="fw-bold" style={{ color: "#2c3e50", fontSize: "1.1rem" }}>
                                                    {product.name}
                                                </Card.Title>
                                                <Card.Text className="text-muted flex-grow-1" style={{ fontSize: "0.9rem" }}>
                                                    <div dangerouslySetInnerHTML={{
                                                        __html: product.description?.substring(0, 100) + "..."
                                                    }} />
                                                </Card.Text>
                                                <div className="d-flex justify-content-between align-items-center mt-auto mb-2">
                                                    <span className="fw-bold" style={{ color: "#f89b0a", fontSize: "1.2rem" }}>
                                                        {product.price?.toLocaleString("vi-VN")}đ
                                                    </span>
                                                    <div className="d-flex align-items-center">
                                                        <Star fill="#ffc107" color="#ffc107" size={16} />
                                                        <span className="ms-1 text-muted fw-bold">{product.rating}</span>
                                                    </div>
                                                </div>
                                                {/* Shop info */}
                                                {product.shopName && (
                                                    <div className="mb-2">
                                                        <small className="text-muted">
                                                            Cửa hàng: <span className="fw-bold">{product.shopName}</span>
                                                        </small>
                                                    </div>
                                                )}
                                                <Link to={`/products/${product.id}`}>
                                                    <Button className="btn-primary-custom w-100">Xem Chi Tiết</Button>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className="text-center py-5">
                            <p className="text-muted">Chưa có sản phẩm nổi bật</p>
                        </div>
                    )}
                </Container>
            </section>

            {/* Testimonials Section */}
            <section className="section-padding" style={{ backgroundColor: "#f8f9fa" }}>
                <Container>
                    <Row className="text-center mb-5">
                        <Col>
                            <h2 className="display-5 fw-bold mb-3" style={{ color: "#2c3e50" }}>
                                Khách Hàng Nói Gì?
                            </h2>

                            <p className="lead text-muted">Cảm nhận từ những khách hàng thân thiết</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Card className="p-4 shadow-sm h-100">

                                <Card.Text>"Hoạt động cuối tuần tuyệt vời cho bé và ba mẹ — ý nghĩa và vui"</Card.Text>
                                <div className="d-flex align-items-center mt-3">
                                    <img
                                        src="https://i.pravatar.cc/60?img=12"
                                        alt="avatar"
                                        className="rounded-circle me-3"
                                        width="50"
                                        height="50"
                                    />
                                    <h6 className="fw-bold mb-0"> Minh An</h6>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="p-4 shadow-sm h-100">
                                <Card.Text>“Chất liệu an toàn, hướng dẫn dễ theo. Sản phẩm hoàn thiện đẹp.”</Card.Text>
                                <div className="d-flex align-items-center mt-3">
                                    <img
                                        src="https://i.pravatar.cc/60?img=20"
                                        alt="avatar"
                                        className="rounded-circle me-3"
                                        width="50"
                                        height="50"
                                    />
                                    <h6 className="fw-bold mb-0"> Lan Hương
                                    </h6>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="p-4 shadow-sm h-100">
                                <Card.Text>“Mua cho lớp học, trẻ thích và học được nhiều kỹ năng.”</Card.Text>
                                <div className="d-flex align-items-center mt-3">
                                    <img
                                        src="https://i.pravatar.cc/60?img=33"
                                        alt="avatar"
                                        className="rounded-circle me-3"
                                        width="50"
                                        height="50"
                                    />
                                    <h6 className="fw-bold mb-0"> Phạm Nam</h6>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Các Cửa Hàng Trên Hmall */}


            {/* Gallery Section */}
            <section className="section-padding">
                <Container>
                    <Row className="text-center mb-2">
                        <Col>
                            <h2 className="display-5 fw-bold mb-3" style={{ color: "#2c3e50" }}>
                                Bộ Sưu Tập Hình Ảnh
                            </h2>
                            <p className="lead text-muted">Một vài khoảnh khắc được yêu thích</p>
                        </Col>
                    </Row>

                    {/* Thay 6 ảnh bằng 1 ảnh lớn */}
                    <Row className=" justify-content-center">
                        <Col xs={12} md={10} lg={8} className="text-center">
                            <motion.img
                                src={`/images/abcde.jpg`} // đổi tên file nếu cần
                                alt="Gallery main"
                                className="img-fluid rounded-3"
                                style={{ width: "100%", height: "70%", maxHeight: "600px", objectFit: "cover" }}
                                whileHover={{ scale: 1.02 }}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Call to Action Section */}
            <section
                className="section-padding text-center text-white"
                style={{
                    background: "linear-gradient(135deg, #f89b0a 0%, #f2cb8eff 100%)",
                }}
            >
                <Container>
                    <Row>
                        <Col lg={8} className="mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="display-5 fw-bold mb-4">Kêu Gọi Hành Động (CTA)</h2>
                                <p className="lead mb-4">
                                    Sẵn sàng thử? Khám phá cùng Craftsy Nest chạm vào di sản Việt bằng đôi tay sáng tạo của bạn.

                                </p>
                                <Link to="/products">
                                    <Button variant="light" size="lg" className="fw-bold" style={{ color: "#f89b0a" }}>
                                        Xem Chi Tiết <ArrowRight className="ms-2" />
                                    </Button>
                                </Link>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Home