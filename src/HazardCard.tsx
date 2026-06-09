interface Props {
    name: string;
    status: string;
    level: string;
    sections: number;
    used: number;
    color: string;
    summary: string;
}

export default function HazardCard({ name, status, level, sections, used, color, summary }: Props) {
    return (
        <div className={`hazard hazard--${status}`}>
            <div className="topcard">
                HAZARD
            </div>
            <div className="hazard-name">
                {name.toUpperCase()}
            </div>
            <div className={`hazard-risk${
                status === "active"
                    ? ` ${color}`
                    : ""
            }`}>
                {level.toUpperCase()}
            </div>
            <div className="hazard-summary">
                {summary}
            </div>
            <div className="meter-holder">
                <progress className={`meter meter--${color.toLowerCase()}`} value={used} max={sections}/>
            </div>
        </div>
    )
}