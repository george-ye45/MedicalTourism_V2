import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_option";
import { Typewriter } from "react-simple-typewriter";

export const ContactUs = () => {
    const [formData, setFormdata] = useState({
        email: "",
        name: "",
        message: "",
        loading: false,
        show: false,
        alertmessage: "",
        variant: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormdata({ loading: true });

        const templateParams = {
            from_name: formData.email,
            user_name: formData.name,
            to_name: contactConfig.YOUR_EMAIL,
            message: formData.message,
        };

        emailjs
            .send(
                contactConfig.YOUR_SERVICE_ID,
                contactConfig.YOUR_TEMPLATE_ID,
                templateParams,
                contactConfig.YOUR_USER_ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setFormdata({
                        loading: false,
                        alertmessage: "SUCCESS! ,Thankyou for your messege",
                        variant: "success",
                        show: true,
                    });
                },
                (error) => {
                    console.log(error.text);
                    setFormdata({
                        alertmessage: `Faild to send!,${error.text}`,
                        variant: "danger",
                        show: true,
                    });
                    document.getElementsByClassName("co_alert")[0].scrollIntoView();
                }
            );
    };

    const handleChange = (e) => {
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <HelmetProvider>
            <Container>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{meta.title} | Contact</title>
                    <meta name="description" content={meta.description} />
                </Helmet>
                <Row className="mb-1 mt-2 pt-md-2">
                    <Col lg="12">
                        <h6 className="display-6 mb-6">
                            <Typewriter
                                words={["Please select the treatmets you would be interested in:"]}
                                typeSpeed={50}
                            />
                        </h6>
                        <hr className="t_border my-4 ml-0 text-left" />
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="12">
                        <h3 className="color_sec py-4">Get in touch</h3>
                        <address>
                            <strong>Email:</strong>{" "}
                            <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                                {contactConfig.YOUR_EMAIL}
                            </a>
                            <br />
                            <br />
                            {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                                <p>
                                    <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                                </p>
                            ) : (
                                ""
                            )}
                        </address>
                        <p>{contactConfig.description}</p>
                    </Col>
                </Row>
            </Container>
            <div className={formData.loading ? "loading-bar" : "d-none"}></div>
        </HelmetProvider>
    );
};
