import React from "react";
import { Cloud, Sun, CloudRain, Wind, Thermometer } from "lucide-react";
export default function WeatherIcon({
  code = "01d",
  size = 24,
  className
}) {
  if (code.startsWith("01")) return <Sun size={size} className={className} color="#FDB813" />;
  if (code.startsWith("02") || code.startsWith("03") || code.startsWith("04")) return <Cloud size={size} className={className} color="#fff" />;
  if (code.startsWith("09") || code.startsWith("10")) return <CloudRain size={size} className={className} color="#60A5FA" />;
  if (code.startsWith("11")) return <Wind size={size} className={className} color="#9CA3AF" />;
  if (code.startsWith("13")) return <Thermometer size={size} className={className} color="#fff" />;
  return <Sun size={size} className={className} color="#FDB813" />;
}