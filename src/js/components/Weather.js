import React, { Fragment, useEffect, useState } from 'react';
import Axios from 'axios';
import {
    Jumbotron,
    Button,
    Container,
    Row,
    Col,
    Tab,
    Nav,
    Tabs,
} from 'react-bootstrap/';
import { Bar } from 'react-chartjs-2';
import tempConvert from '../helpers/temperatureConverter';
import timeConvert from '../helpers/dateTimeHelper';
export default function Weather() {
    const [weatherData, updateWeatherData] = useState(null);
    const endPoint = `http://localhost:8000/getWeather`;
    const [key, setKey] = useState(null);
    let init = async () => {
        await Axios({
            method: 'get',
            url: endPoint,
        })
            .then((response) => {
                console.log(response.data);
                updateWeatherData(response.data);
            })
            .catch((e) => {
                console.log('error', e);
            });
    };

    let renderChart = (weatherData) => {
        const data = {
            labels: [],
            datasets: [
                {
                    label: 'Temperature',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [],
                },
            ],
        };

        for (let index = 0; index < weatherData.list.length; index++) {
            const weatherStamp = weatherData.list[index];
            data.labels.push(timeConvert(weatherStamp.dt));
            data.datasets[0].data.push(tempConvert(weatherStamp.main.temp));
        }

        return (
            <Bar
                data={data}
                options={{
                    title: {
                        display: true,
                        text: 'Average temperature',
                        fontSize: 20,
                    },
                    legend: {
                        display: true,
                        position: 'right',
                    },
                }}
            />
        );
    };

    let renderWeatherData = () => {
        if (weatherData) {
            return (
                <Fragment>
                    <Jumbotron>
                        <Container>
                            <Row>
                                <Col xs={12}>
                                    <h1> Data Visualization</h1>
                                </Col>
                                <Col xs={12}>
                                    <p>{weatherData.city.name}</p>
                                </Col>
                                <Col xs={12}>
                                    <p>{weatherData.city.country}</p>
                                </Col>
                            </Row>
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                            >
                                <Tab eventKey="Bar" title="Bar">
                                    <Row>{renderChart(weatherData)}</Row>
                                </Tab>
                                <Tab eventKey="pie" title="Pie">
                                    <p>lorem</p>
                                </Tab>
                                <Tab eventKey="Other" title="Other" disabled>
                                    <p>lorem</p>
                                </Tab>
                            </Tabs>
                        </Container>
                    </Jumbotron>
                </Fragment>
            );
        }
    };

    useEffect(() => {
        init();
    }, []);

    return <Fragment>{renderWeatherData()}</Fragment>;
}
