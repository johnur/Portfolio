import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import '../style/Who.css';


const Dream = () => {
    return (
        <Container>
            <Row>
                <Col sm><p>
                    <hr/>
                  "Olisi hulluutta rekrytoida junnu neljän kuukauden kokemuksella, vai olisiko? Minulla on paljon annettavaa ja intoa oppia enemmän kuin monella kokeneella ohjelmoijalla."</p>
                </Col>
            </Row>
            <div className="container">
                        <div className="neon">Let me dev </div>
                        <div className="flux">and feed me tacos </div>
                    </div>
        </Container>
    );
}

export default Dream;