import React from 'react';
import { Label, DropdownButton, MenuItem, Form, Row, Col } from 'react-bootstrap'
import Navigation from './Navigation'
class Person extends React.Component {
    render() {
        return ( <Row className="show-grid">
                    <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
                    <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                </Row>
        )
    }
}

export default Person;
