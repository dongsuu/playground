import { FocusCounter } from "./pure/FocusCounter";
import { FocusCounterV1 } from "./pure/FocusCounterV1";
import { FocusCounterV2 } from "./pure/FocusCounterV2";
import { FocusCounterV3 } from "./pure/FocusCounterV3";
import { FocusCounterV4 } from "./pure/FocusCounterV4";

export function FocusCounterRoot() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <FocusCounter />
      <FocusCounterV1 />
      <FocusCounterV2 />
      <FocusCounterV3 />
      <FocusCounterV4 />
    </div>
  );
}
