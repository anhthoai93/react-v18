export const  describeArc = (x: any, y: any, radius: any, startAngle: any, endAngle: any) => {

    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    const d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
    return d;
}

export const polarToCartesian = (centerX: any, centerY: any, radius: any, angleInDegrees: any) => {
    const angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}

export const mapNumber = (number: any, in_min: any, in_max: any, out_min: any, out_max: any)  => {
    return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}