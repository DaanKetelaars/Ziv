const cleanPercentage = (percentage) => {
    const tooLow = !Number.isFinite(+percentage) || percentage < 0;
    const tooHigh = percentage > 100;
    return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct }) => {
    const r = 70;
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - pct) * circ) / 100;
    return (
        <circle
            r={r}
            cx={150}
            cy={150}
            fill="transparent"
            stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
            strokeWidth={"1rem"}
            strokeDasharray={circ}
            strokeDashoffset={pct ? strokePct : 0}
        ></circle>
    );
};

const Text = ({ percentage }) => {
    return (
        <text
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            fontSize={"1.5em"}
        >
            {percentage.toFixed(0)}%
        </text>
    );
};

const Pie = ({ percentage, colour }) => {
    const pct = cleanPercentage(percentage);
    return (
        <svg width={300} height={300}>
            <g transform={`rotate(-90 ${"150 150"})`}>
                <Circle colour="lightgrey" />
                <Circle colour={colour} pct={pct} />
            </g>
            <Text percentage={pct} />
        </svg>
    );
};

export default Pie;
