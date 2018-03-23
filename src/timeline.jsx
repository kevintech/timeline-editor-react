import React from "react";
import ReactDOM from "react-dom";
import TimelineFrames from "./timeline-frames.jsx";
import "./timeline.scss";

export default class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            layers:[
                {
                    id: "3d1df1b4-4d9d-45a4-bf14-cb580ee74675",
                    name: "Left"
                },
                {
                    id: "7d8c4210-0cfa-4a10-8b21-01e6601e00bf",
                    name: "Top"
                },
                {
                    id: "65079f30-47a8-4469-833e-4f0eea04d233",
                    name: "Bottom Right"
                }
            ],
            frames: {
                "3d1df1b4-4d9d-45a4-bf14-cb580ee74675": [{
                    name: "Hello.png",
                    second: 0,
                    duration: 70
                },
                {
                    name: "Wellcome.png",
                    second: 130,
                    duration: 200
                }],
                "7d8c4210-0cfa-4a10-8b21-01e6601e00bf": [{
                    name: "Goodbye.png",
                    second: 10,
                    duration: 150
                }],
                "65079f30-47a8-4469-833e-4f0eea04d233": []
            },
            draggable: null
        };
    }

    render() {
        return <div className="timeline-editor">
            <div className="timeline-editor__container">
                <div className="timeline-editor__layers">
                    <div className="timeline-editor__layers-header">Layers</div>
                    <ul>
                    {this.state.layers.map((layer)=>
                        <li>{layer.name}</li>
                    )}
                    </ul>
                </div>
                <TimelineFrames frames={this.state.frames} />
            </div>
        </div>
    }
}