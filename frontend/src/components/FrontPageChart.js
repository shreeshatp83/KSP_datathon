import React, { useEffect } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CombinedChartComponent = () => {
    useEffect(() => {
        const accusedChart = new CanvasJSReact.CanvasJS.Chart("accusedChartContainer", {
            animationEnabled: true,
            theme: "light2",
            title: {
                text: "Accused Count"
            },
            axisX: {
                valueFormatString: "YYYY",
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true
                }
            },
            axisY: {
                title: "Count",
                includeZero: true,
                crosshair: {
                    enabled: true
                }
            },
            toolTip: {
                shared: true
            },
            legend: {
                cursor: "pointer",
                verticalAlign: "bottom",
                horizontalAlign: "left",
                dockInsidePlotArea: true,
                itemclick: toogleDataSeries
            },
            data: [{
                type: "line",
                showInLegend: true,
                name: "Male accused",
                markerType: "square",
                xValueFormatString: "YYYY",
                color: "#F08080",
                dataPoints: [
                    { x: new Date(2016, 0, 3), y: 142468 },
                    { x: new Date(2017, 0, 4), y: 152846 },
                    { x: new Date(2018, 0, 5), y: 133645 },
                    { x: new Date(2019, 0, 6), y: 109656 },
                    { x: new Date(2020, 0, 7), y: 97108 },
                    { x: new Date(2021, 0, 8), y: 107865 },
                    { x: new Date(2022, 0, 9), y: 122625 },
                    { x: new Date(2023, 0, 9), y: 154370 },
                    { x: new Date(2024, 0, 9), y: 27992 }
                ]
            },
            {
                type: "line",
                showInLegend: true,
                name: "Female accused",
                lineDashType: "dash",
                dataPoints: [
                    { x: new Date(2016, 0, 3), y: 71234 },
                    { x: new Date(2017, 0, 4), y: 76423 },
                    { x: new Date(2018, 0, 5), y: 66822 },
                    { x: new Date(2019, 0, 6), y: 54828 },
                    { x: new Date(2020, 0, 7), y: 48554 },
                    { x: new Date(2021, 0, 8), y: 53932 },
                    { x: new Date(2022, 0, 9), y: 61312 },
                    { x: new Date(2023, 0, 9), y: 77185 },
                    { x: new Date(2024, 0, 9), y: 13996 }
                ]
            }]
        });
        accusedChart.render();

        const victimChart = new CanvasJSReact.CanvasJS.Chart("victimChartContainer", {
            animationEnabled: true,
            theme: "light2",
            title: {
                text: "Victim Count"
            },
            axisX: {
                valueFormatString: "YYYY",
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true
                }
            },
            axisY: {
                title: "Count",
                includeZero: true,
                crosshair: {
                    enabled: true
                }
            },
            toolTip: {
                shared: true
            },
            legend: {
                cursor: "pointer",
                verticalAlign: "bottom",
                horizontalAlign: "left",
                dockInsidePlotArea: true,
                itemclick: toogleDataSeries
            },
            data: [{
                type: "line",
                showInLegend: true,
                name: "Male accused",
                markerType: "square",
                xValueFormatString: "YYYY",
                color: "#F08080",
                dataPoints: [
                    { x: new Date(2016, 0, 3), y: 35719 },
                    { x: new Date(2017, 0, 4), y: 54944 },
                    { x: new Date(2018, 0, 5), y: 64725 },
                    { x: new Date(2019, 0, 6), y: 66641 },
                    { x: new Date(2020, 0, 7), y: 70457},
                    { x: new Date(2021, 0, 8), y: 70547 },
                    { x: new Date(2022, 0, 9), y: 78491 },
                    { x: new Date(2023, 0, 9), y: 89475 },
                    { x: new Date(2024, 0, 9), y:  16298 }
                ]
            },
            {
                type: "line",
                showInLegend: true,
                name: "Female accused",
                lineDashType: "dash",
                dataPoints: [
                    { x: new Date(2016, 0, 3), y: 16910 },
                    { x: new Date(2017, 0, 4), y: 24252 },
                    { x: new Date(2018, 0, 5), y: 26839 },
                    { x: new Date(2019, 0, 6), y: 28542 },
                    { x: new Date(2020, 0, 7), y: 26751 },
                    { x: new Date(2021, 0, 8), y: 28879 },
                    { x: new Date(2022, 0, 9), y: 35320 },
                    { x: new Date(2023, 0, 9), y: 43158 },
                    { x: new Date(2024, 0, 9), y: 8181 }
                ]
                },
                {
                    type: "line",
                    showInLegend: true,
                    name: "male child victim",
                    lineDashType: "dash",
                    dataPoints: [
                        { x: new Date(2016, 0, 3), y: 3144 },
                        { x: new Date(2017, 0, 4), y: 3167 },
                        { x: new Date(2018, 0, 5), y: 3307 },
                        { x: new Date(2019, 0, 6), y: 3385 },
                        { x: new Date(2020, 0, 7), y: 2508 },
                        { x: new Date(2021, 0, 8), y:  2837},
                        { x: new Date(2022, 0, 9), y: 3442 },
                        { x: new Date(2023, 0, 9), y: 3858},
                        { x: new Date(2024, 0, 9), y: 770 }
                    ]
                },
                {
                    type: "line",
                    showInLegend: true,
                    name: "Female child victims",
                    lineDashType: "dash",
                    dataPoints: [
                        { x: new Date(2016, 0, 3), y: 3776 },
                        { x: new Date(2017, 0, 4), y: 4314 },
                        { x: new Date(2018, 0, 5), y: 4523 },
                        { x: new Date(2019, 0, 6), y: 4523 },
                        { x: new Date(2020, 0, 7), y: 4759 },
                        { x: new Date(2021, 0, 8), y: 4086 },
                        { x: new Date(2022, 0, 9), y: 5167 },
                        { x: new Date(2023, 0, 9), y: 5962 },
                        { x: new Date(2024, 0, 9), y: 1271 }
                    ]
                }
            ]
        });
        victimChart.render();

        function toogleDataSeries(e) {
            if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            } else {
                e.dataSeries.visible = true;
            }
            accusedChart.render();
            victimChart.render();
        }
    }, []);

    return (
        <div>
            <div id="accusedChartContainer" style={{ height: '370px', maxWidth: '920px', margin: '0 auto' }}></div>
            <br></br>
            <div id="victimChartContainer" style={{ height: '370px', maxWidth: '920px', margin: '0 auto' }}></div>
        </div>
    );
}

export default CombinedChartComponent;
