import {
  DESKTOP_BAR_HEIGHT,
  MOBILE_BAR_HEIGHT,
  MOBILE_SIDE_PADDING,
  DESKTOP_SIDE_INSET,
} from "@/lib/layout";

interface ViewfinderFrameProps {
  isMobile: boolean;
}

export default function ViewfinderFrame({ isMobile }: ViewfinderFrameProps) {
  const sideWidth = isMobile ? `${MOBILE_SIDE_PADDING}px` : DESKTOP_SIDE_INSET;
  const barHeight = isMobile ? MOBILE_BAR_HEIGHT : DESKTOP_BAR_HEIGHT;

  return (
    <>
      <div
        className="fixed left-0 bg-white z-30 pointer-events-none"
        style={{
          top: barHeight,
          width: sideWidth,
          height: `calc(100dvh - ${barHeight} - ${barHeight})`,
        }}
      />
      <div
        className="fixed right-0 bg-white z-30 pointer-events-none"
        style={{
          top: barHeight,
          width: sideWidth,
          height: `calc(100dvh - ${barHeight} - ${barHeight})`,
        }}
      />
    </>
  );
}
