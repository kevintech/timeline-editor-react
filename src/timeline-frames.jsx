import React from 'react';
import TimelineRuler from "./timeline-ruler.jsx";
import TimelineFrame from "./timeline-frame.jsx";
import { SECONDS_LENGTH } from "./seconds-sizes";

export default class TimelineFrames extends React.Component {

    constructor(props) {
        super(props);
        this.state = {frames: props.frames, seconds: props.seconds, 
            layers: props.layers, draggable: null};
    }

    handleFrameDragStart(e, layerKey, frameIndex) {
        const clientX = e.clientX;
        this.setState({draggable:{
            currentLayer: layerKey,
            currentElementIndex: frameIndex,
            startX: clientX
        }});
    }

    handleFrameDraggin(e) {
        if(!this.state.draggable) return;
        const currentClientX = e.clientX;
        const moveMouseX = currentClientX - this.state.draggable.startX;
        //TODO: move elements by 10?
        // if ((Math.abs(moveMouseX)%10)!==0) return;
        const index = this.state.draggable.currentElementIndex;
        const layerKey = this.state.draggable.currentLayer;
        var frames = this.state.frames;
        frames[layerKey][index].second = frames[layerKey][index].second + moveMouseX;
        this.setState({frames: frames, draggable: {
            currentLayer: layerKey,
            currentElementIndex: index,
            startX: currentClientX,
        }});
        this.props.updateFrames(frames);
    }

    handleFrameDragEnd() {
        this.setState({draggable:null});
    }
    
    render() {
        return (
            <div className="timeline-editor__frames" 
                onMouseUp={() => this.handleFrameDragEnd()}>
                <TimelineRuler seconds={this.state.seconds}/>
                {this.state.layers.map((layer) =>
                    <div className="timeline-editor__frames-container" key={layer.id}>
                        <div className="timeline-editor__frames-layer"
                        style={{width:this.state.seconds*SECONDS_LENGTH}}
                        onMouseMove={(e) => this.handleFrameDraggin(e)}>
                        {this.state.frames[layer.id] && 
                        this.state.frames[layer.id].map((frame, index) =>
                            <TimelineFrame key={index} index={index} 
                            frame={frame} layerKey={layer.id} 
                            dragEvent={this.handleFrameDragStart.bind(this)} />
                        )}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}