import './Marker.css'

interface MarkerProps {
    color: string;
}

export default function Marker ({color}:MarkerProps) {
    return (
        <div className={`${color} marker`}>
            <div className="cap"></div>
            <div className="sleeve"></div>
        </div>
    )
}