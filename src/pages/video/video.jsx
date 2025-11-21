import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { PlayFill, CameraVideo } from "react-bootstrap-icons";

// Các video nhóm (YouTube IDs). Nhóm theo nội dung giống tên.
const groups = [
    {
        groupTitle: "Giới thiệu làng nghề",
        items: [
            {
                id: "29_LSk4wWJk",
                title: "Giới thiệu làng nghề Tò He Xuân La",
                description: "Tìm hiểu nghệ nhân và quy trình làm tò he truyền thống.",
            },
            {
                id: "mN2Wnp4rPRk",
                title: "Giới thiệu làng nghề Chuồn Chuồn Tre",
                description: "Giới thiệu tổng quan về làng nghề và sản phẩm đặc trưng.",
            },
        ],
    },
    {
        groupTitle: "Hướng dẫn bộ kit",
        items: [
            {
                id: "GGHbGmR-ZVw",
                title: "Hướng dẫn bộ kit Gốm Mosaic",
                description: "Bước từng bước sử dụng kit Gốm Mosaic.",
            },
            {
                id: "ALGfFpOmhoM",
                title: "Hướng dẫn bộ kit Gốm Bát Tràng",
                description: "Hướng dẫn tô và hoàn thiện bộ kit gốm Bát Tràng.",
            },
            {
                id: "wtrTC30q8ZY",
                title: "Hướng dẫn bộ kit Chuồn Chuồn Tre",
                description: "Hướng dẫn tạo và trang trí Chuồn Chuồn Tre bằng kit.",
            },
            {
                id: "4z5sykg8fPU",
                title: "Hướng dẫn bộ kit Tò He Xuân La",
                description: "Hướng dẫn hoàn thiện bộ kit Tò He cho người mới.",
            },
        ],
    },
];

const Videos = () => {
    const [playing, setPlaying] = useState(null);

    return (
        <div style={{ paddingTop: 200, paddingBottom: 80 }}>
            <Container>
                <div className="text-center mb-10">
                    <h1 className="display-5 fw-bold" style={{ color: "#2c3e50" }}>
                        <CameraVideo className="me-2" /> Hướng dẫn (Video)
                    </h1>
                    <p className="lead text-muted">Bốn video hướng dẫn chọn lọc để bạn bắt đầu.</p>
                </div>

                {groups.map((group) => (
                    <section key={group.groupTitle} className="mb-5">
                        <h3 className="h4 fw-bold mb-3">{group.groupTitle}</h3>
                        <Row className="g-4">
                            {group.items.map((v) => (
                                <Col key={v.id} md={6} lg={3}>
                                    <Card className="h-100 shadow-sm" style={{ borderRadius: 12, overflow: "hidden" }}>
                                        <div
                                            role="button"
                                            onClick={() => setPlaying(v.id)}
                                            style={{ position: "relative", cursor: "pointer" }}
                                        >
                                            <Card.Img
                                                variant="top"
                                                src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                                                alt={v.title}
                                                style={{ height: 180, objectFit: "cover" }}
                                            />
                                            <div style={{
                                                position: "absolute",
                                                inset: 0,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.35) 100%)"
                                            }}>
                                                <Button variant="light" className="rounded-circle p-2" style={{ opacity: 0.95 }}>
                                                    <PlayFill />
                                                </Button>
                                            </div>
                                        </div>

                                        <Card.Body className="d-flex flex-column">
                                            <Card.Title className="h6">{v.title}</Card.Title>
                                            <Card.Text className="text-muted small" style={{ flex: 1 }}>{v.description}</Card.Text>
                                            <div className="text-end">
                                                <Button variant="outline-primary" size="sm" onClick={() => setPlaying(v.id)}>
                                                    Xem ngay
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </section>
                ))}
            </Container>

            <Modal show={!!playing} onHide={() => setPlaying(null)} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Phát video hướng dẫn</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ minHeight: 360 }}>
                    {playing ? (
                        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                            <iframe
                                title="video-player"
                                src={`https://www.youtube.com/embed/${playing}?autoplay=1`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                            />
                        </div>
                    ) : null}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setPlaying(null)}>Đóng</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Videos;