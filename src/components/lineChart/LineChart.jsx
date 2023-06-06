// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from "@nivo/line";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const LineChart = () => {
  const data = [
    {
      id: "Users",
      color: "hsl(63, 70%, 50%)",
      data: [
        {
          x: "Jan",
          y: 0,
        },
        {
          x: "Feb",
          y: 3,
        },
        {
          x: "March",
          y: 192,
        },
        {
          x: "April",
          y: 71,
        },
        {
          x: "May",
          y: 92,
        },
        {
          x: "June",
          y: 187,
        },
        {
          x: "July",
          y: 100,
        },
        {
          x: "Aug",
          y: 69,
        },
        {
          x: "Sep",
          y: 115,
        },
        {
          x: "Oct",
          y: 93,
        },
        {
          x: "Nov",
          y: 126,
        },
        {
          x: "Dec",
          y: 34,
        },
      ],
    },
  ];

  return (
    <ResponsiveLine
      theme={{
        axis: {
          domain: {
            line: {
              stroke: "#A9DFD8",
            },
          },
          legend: {
            text: {
              fill: "#FFFFFF",
            },
          },
          ticks: {
            line: {
              stroke: "#A9DFD8",
              strokeWidth: 1,
            },
            text: {
              fill: "#FFFFFF",
            },
          },
        },
        legends: {
          text: {
            fill: "#FFFFFF",
          },
        },
        tooltip: {
          container: {
            color: "#000",
          },
        },
      }}
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Month",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      colors={{ scheme: "nivo" }}
      lineWidth={3}
      enablePoints={false}
      pointSize={18}
      pointColor="#618f98"
      pointBorderWidth={2}
      pointBorderColor={{ from: "color", modifiers: [] }}
      pointLabel="xFormatted"
      pointLabelYOffset={-12}
      enableArea={true}
      areaOpacity={0.4}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};
export default LineChart;
