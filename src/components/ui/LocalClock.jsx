"use client";

import { useEffect, useState } from "react";

export default function LocalClock({
  timezone = "Asia/Jakarta",
  label = "WIB",
  className = "",
}) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timezone]);

  return (
    <span
      className={className}
      style={{ fontVariantNumeric: "tabular-nums" }}
      suppressHydrationWarning
    >
      {time || "--:--:--"} {label}
    </span>
  );
}

