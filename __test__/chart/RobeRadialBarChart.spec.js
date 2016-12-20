import React from "react"; // eslint-disable-line
import chai from "chai";// eslint-disable-line
import { RadialBarChart, RadialBar } from "recharts";
import { mount } from "enzyme";// eslint-disable-line
import RobeRadialBarChart from "chart/RobeRadialBarChart";// eslint-disable-line

let data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400, fill: "#8884d8" },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210, fill: "#83a6ed" },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290, fill: "#8dd1e1" },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000, fill: "#82ca9d" },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181, fill: "#a4de6c" },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500, fill: "#d0ed57" },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100, fill: "#ffc658" },
];

describe("chart/RobeRadialBarChart", () => {
    const getComponent = (props: Object): Object => {
        return (
            <RobeRadialBarChart {...props} />// eslint-disable-line
        );
    };

    it("render", () => {
        let props = { propsOfChart: { width: 600, height: 400, data: data, cx: 150, cy: 150, innerRadius: 20, outerRadius: 140, barSize: 10 },
            propsOfChildrens: [
                 { dataKey: "uv", startAngle: 90, endAngle: -270, minAngle: 15, label: true, background: true, clockWise: true },
                 { dataKey: "pv", startAngle: 90, endAngle: 270, minAngle: 15, label: true, background: true, clockWise: true }
            ]
        };
        let wrapper = mount(getComponent(props));
        chai.assert.equal(wrapper.find(RobeRadialBarChart).length, 1);
        chai.assert.equal(wrapper.find(RadialBarChart).length, 1);
        chai.assert.equal(wrapper.find(RadialBar).length, 2);
    });
});
