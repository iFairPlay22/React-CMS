/*
    > IMPORT
    import { Grid, Row, Col, BreakPointOffset, BreakPointSize } from '../../components/alignment/container/Container'

    > EXAMPLE
    <Grid>
        <Row>
            <Col 
                sizes={[ BreakPointSize.of("small", 8) ]}
                offsets={[ BreakPointOffset.of("small", 4) ]}
            >
                <p className="bg-primary">1_1</p>
            </Col>
            <Col>
                <p className="bg-secondary">1_1</p>
            </Col>
        </Row>
        <Row>
            <Col>
                <p className="bg-success">2_1</p>
            </Col>
            <Col>
                <p className="bg-danger">2_2</p>
            </Col>
        </Row>
    </Grid> 
*/

import Grid from "./grid/Grid";
import Row from "./row/Row";
import Col from "./col/Col";
import { BreakPointOffset, BreakPointSize } from './breakpoint/BreakPoint';

export { Grid, Row, Col, BreakPointOffset, BreakPointSize };

