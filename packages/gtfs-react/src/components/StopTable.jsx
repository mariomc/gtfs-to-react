import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import AutoSizer from "react-virtualized/dist/es/AutoSizer";
import Grid from "react-virtualized/dist/es/Grid";

const stopPropTypes = {
  stop_id: PropTypes.string,
  stop_name: PropTypes.string,
  stop_lat: PropTypes.number,
  stop_lon: PropTypes.number
};

const StopTable = ({ stop, timetable }) => {
  if (!timetable) return null;
  const cellRenderer = ({ style, key, rowIndex, columnIndex }) => {
    const isEven = !!(rowIndex % 2);
    return (
      <div
        key={key}
        style={style}
        className={cx("cell", { even: isEven, odd: !isEven })}
      >
        {rowIndex} - {columnIndex}
      </div>
    );
  };

  return <h1>Accepting Pull Requests :P</h1>

  return (
    <AutoSizer>
      {({ width, height }) => (
        <Grid
          fixedRowCount={1}
          cellRenderer={cellRenderer}
          columnWidth={() => 120}
          columnCount={1}
          height={height}
          noContentRenderer={this._noContentRenderer}
          rowHeight={({ index }) => (!index ? 80 : 40)}
          rowCount={20}
          width={width}
        />
      )}
    </AutoSizer>
  );
};

StopTable.propTypes = {
  route: PropTypes.shape({
    route_long_name: PropTypes.string
  }),
  stops: PropTypes.arrayOf(PropTypes.shape(stopPropTypes))
};

export default StopTable;
