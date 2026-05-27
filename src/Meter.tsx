interface MeterProps {
    total: number;
    active: number;
    color: string;
}

export default function Meter({total, active, color}: MeterProps) {
    return (
        <div className="meter-holder">
            {Array.from({ length: total }).map(
                (_, index) => (
                    <div
                        key={index}
                        className={`meter${
                            index < active
                                ? ` meter--${color}`
                                : ""
                        }`}
                    />
                )
            )}
        </div>
    )
}