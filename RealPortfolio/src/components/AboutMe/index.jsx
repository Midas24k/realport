import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';





function AboutMe() {
    return (
        <div>
            
            <Container maxWidth="">
                <h1>About Me</h1>
                <Row>
                <Col>
                    <Image src="" alt="profile picture"/>
                </Col>
                <Col>
                    <p>
                            " I am a Full Stack Web Developer with a background in the
                        hospitality industry. I have a passion for creating and solving
                        problems. I am a graduate of the University of Minnesota's Full Stack
                        Web Development Bootcamp. I have experience with HTML, CSS,
                        JavaScript, React, Node.js, Express.js, MongoDB, MySQL, Handlebars, and
                        MERN. I am a quick learner and always looking to expand my
                        knowledge. I am excited to bring my skills to a company or venture that
                        values hard work and creativity ".
                    </p>
                </Col>

                </Row>
            </Container>
        </div>
    );
}

export default AboutMe;