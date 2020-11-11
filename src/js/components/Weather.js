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
import { Bar, Line, Doughnut, Bubble } from 'react-chartjs-2';
import tempConvert from '../helpers/temperatureConverter';
import timeConvert from '../helpers/dateTimeHelper';
export default function Weather() {
    const [weatherData, updateWeatherData] = useState(null);
    const endPoint = `http://localhost:8000/getWeather`;
    const [key, setKey] = useState('Bar');

    // pull in mock data from api
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
    // define data model
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

    // populate data object
    (() => {
        if (weatherData) {
            for (let index = 0; index < weatherData.list.length; index++) {
                const weatherStamp = weatherData.list[index];
                data.labels.push(timeConvert(weatherStamp.dt).getMinutes());
                data.datasets[0].data.push(tempConvert(weatherStamp.main.temp));
            }
        }
    })();
    // render charts
    let renderBarChart = () => {
        return (
            <Bar
                data={data}
                options={{
                    title: {
                        display: true,
                        text: 'Temperature',
                        fontSize: 20,
                    },
                    legend: {
                        display: true,
                        position: 'bottom',
                    },
                }}
            />
        );
    };

    let renderLineChart = () => {
        {
            /** TO DO: need to fix loopimg animation */
        }
        return (
            <Line
                data={data}
                options={{
                    animation: {
                        tension: {
                            duration: 1000,
                            easing: 'linear',
                            from: 1,
                            to: 0,
                            loop: true,
                        },
                    },
                    scales: {
                        y: {
                            min: 0,
                            max: 100,
                        },
                    },
                    title: {
                        display: true,
                        text:
                            'Temperature (fahrenheit) over a small period of time',
                        fontSize: 20,
                    },
                    legend: {
                        display: true,
                        position: 'bottom',
                    },
                }}
            />
        );
    };

    let renderBubbleChart = () => {
        return (
            <Bubble
                data={data}
                options={{
                    title: {
                        display: true,
                        text:
                            'Temperature (fahrenheit) over a small period of time',
                        fontSize: 20,
                    },
                    legend: {
                        display: true,
                        position: 'bottom',
                    },
                }}
            ></Bubble>
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
                                    <h2> Data Visualization</h2>
                                </Col>
                                <Col xs={12}>
                                    <p>
                                        City:{' '}
                                        <strong>{weatherData.city.name}</strong>
                                    </p>
                                </Col>
                                <Col xs={12}>
                                    <p>
                                        Country:{' '}
                                        <strong>
                                            {weatherData.city.country}
                                        </strong>
                                    </p>
                                </Col>

                                <Col xs={12}>
                                    {timeConvert(
                                        weatherData.list[0].dt
                                    ).toUTCString()}
                                </Col>
                                <Col>
                                    {timeConvert(
                                        weatherData.list[0].dt
                                    ).getHours()}
                                    :
                                    {timeConvert(
                                        weatherData.list[0].dt
                                    ).getMinutes()}{' '}
                                    AM, central time
                                </Col>
                            </Row>
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                            >
                                <Tab eventKey="Bar" title="Bar">
                                    <Row>{renderBarChart()}</Row>
                                </Tab>
                                <Tab eventKey="Line" title="Line">
                                    {renderLineChart()}
                                </Tab>
                                <Tab eventKey="Bubble" title="Bubble" disabled>
                                    {/** TO DO: fix this chart not rendering data */}
                                    {renderBubbleChart()}
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
