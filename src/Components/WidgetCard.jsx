import React, { useState } from "react";

function WidgetCard({ widgetData }) {
  const { widgetName, widgetId } = widgetData;
  return (
    <div className="border">
      <h2>{widgetName}</h2>
    </div>
  );
}

export default WidgetCard;
{
}
