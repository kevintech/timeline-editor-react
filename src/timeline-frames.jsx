import React from 'react';
import TimelineRuler from "./timeline-ruler.jsx";

export default class TimelineFrames extends React.Component {
    constructor(props) {
        super(props);
        this.state = {frames: props.frames};
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
    }

    handleFrameDragEnd() {
        this.setState({draggable:null});
    }
    
    //TODO: seconds should be calculated or have a init value
    render() {
        return (
            <div className="timeline-editor__frames" 
                onMouseUp={() => this.handleFrameDragEnd()}>
                <TimelineRuler seconds="200"/>
                {Object.keys(this.state.frames).map((layerKey, layerIndex) => 
                    <div className="timeline-editor__frames-container">
                        <div className="timeline-editor__frames-layer"
                        onMouseMove={(e) => this.handleFrameDraggin(e)}>
                        {this.state.frames[layerKey].map((frame, index) =>
                            <span className="timeline-editor__frames-layer__item" 
                                style={{width:frame.duration, left:frame.second}}
                                onMouseDown={(e) => this.handleFrameDragStart(e, layerKey, index)}>
                                {frame.name}
                            </span>
                        )}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}