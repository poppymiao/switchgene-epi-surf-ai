
import { useEffect, useRef } from "react";

export const GenomicVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = 300 * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Clear canvas
    ctx.clearRect(0, 0, canvas.offsetWidth, 300);

    // Draw genomic track background
    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(0, 0, canvas.offsetWidth, 300);

    // Draw accessibility heatmap
    const width = canvas.offsetWidth;
    const height = 200;
    const numBins = 100;
    const binWidth = width / numBins;
    const baselineY = 250; // Baseline at the bottom of the chart area

    for (let i = 0; i < numBins; i++) {
      // Generate sample accessibility data with some patterns
      const x = i / numBins;
      const accessibility = Math.sin(x * Math.PI * 3) * 0.3 + 0.5 + Math.random() * 0.2;
      
      // Color based on accessibility score
      const hue = accessibility * 240; // Blue to red spectrum
      const saturation = 70;
      const lightness = 50 + accessibility * 30;
      
      ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      
      // Draw bars extending upward from baseline
      const barHeight = height * accessibility;
      ctx.fillRect(i * binWidth, baselineY - barHeight, binWidth, barHeight);
    }

    // Draw reference line (baseline)
    ctx.strokeStyle = "#64748b";
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(0, baselineY);
    ctx.lineTo(width, baselineY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Add labels
    ctx.fillStyle = "#475569";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("High Accessibility", 10, 30);
    ctx.fillText("Position (bp)", width / 2 - 40, 290);
    
    ctx.save();
    ctx.translate(15, baselineY - 50);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText("Accessibility Score", 0, 0);
    ctx.restore();

  }, []);

  return (
    <div className="w-full">
      <canvas
        ref={canvasRef}
        className="w-full h-[300px] border border-slate-200 rounded-lg bg-white"
        style={{ imageRendering: "pixelated" }}
      />
      <div className="mt-4 flex justify-between text-sm text-slate-600">
        <span>chr1:1,000,000</span>
        <span>Predicted Chromatin Accessibility</span>
        <span>chr1:1,010,000</span>
      </div>
    </div>
  );
};
