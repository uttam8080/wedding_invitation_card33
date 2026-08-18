import React, { useRef, useEffect, useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Calendar, Gift } from 'lucide-react';
import { SectionDivider } from '../components/SectionDivider';
import { scratchToReveal } from '../data/weddingData';

const SCRATCH_ITEMS = [
  {
    id: 'day',
    serialNumber: 1,
    label: 'DAY',
    value: '14th',
    subValue: 'Saturday',
    badge: 'Date #1',
  },
  {
    id: 'month',
    serialNumber: 2,
    label: 'MONTH',
    value: 'February',
    subValue: 'Wedding Month',
    badge: 'Date #2',
  },
  {
    id: 'year',
    serialNumber: 3,
    label: 'YEAR',
    value: '2027',
    subValue: 'Shubh Vivah',
    badge: 'Date #3',
  },
];


// Helper to draw star path on 2D canvas context
function drawStarPath(
  ctx,
  cx,
  cy,
  outerRadius,
  innerRadius,
  points = 5
) {
  let rot = (Math.PI / 2) * 3;
  let x = cx;
  let y = cy;
  const step = Math.PI / points;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);

  for (let i = 0; i < points; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
}

const SingleStarScratchCard = ({
  item,
  onCardRevealed,
  resetSignal,
  forceRevealSignal,
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const lastPosRef = useRef(null);

  const [isScratching, setIsScratching] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  // Draw Star Scratch Canvas Surface
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;
    const outerRadius = Math.min(width, height) * 0.46;
    const innerRadius = outerRadius * 0.42;

    // Dark maroon outer frame
    ctx.fillStyle = '#2A0808';
    ctx.fillRect(0, 0, width, height);

    // Golden Metallic Radial Gradient
    const goldGrad = ctx.createRadialGradient(cx, cy, 5, cx, cy, outerRadius);
    goldGrad.addColorStop(0, '#FFF3A7');
    goldGrad.addColorStop(0.3, '#F7D070');
    goldGrad.addColorStop(0.6, '#C59333');
    goldGrad.addColorStop(0.85, '#9A6B1F');
    goldGrad.addColorStop(1, '#5C3C0B');

    // Draw Golden Star
    drawStarPath(ctx, cx, cy, outerRadius, innerRadius, 5);
    ctx.fillStyle = goldGrad;
    ctx.fill();

    // Golden Outline
    ctx.strokeStyle = '#FFE885';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Inner Maroon Star Line
    drawStarPath(ctx, cx, cy, outerRadius * 0.88, innerRadius * 0.88, 5);
    ctx.strokeStyle = '#8B0000';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Text on Star Scratch Surface
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillStyle = '#8B0000';
    ctx.font = 'bold 12px "Playfair Display", Georgia, serif';
    ctx.fillText('SCRATCH', cx, cy - 4);

    ctx.fillStyle = '#4A1D1A';
    ctx.font = '600 10px "Poppins", sans-serif';
    ctx.fillText(`Star ${item.serialNumber}`, cx, cy + 12);



    setScratchPercent(0);
    setIsRevealed(false);
  }, [item.label, item.serialNumber]);

  useEffect(() => {
    initCanvas();
  }, [initCanvas, resetSignal]);

  useEffect(() => {
    if (forceRevealSignal > 0 && !isRevealed) {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      setScratchPercent(100);
      setIsRevealed(true);
      onCardRevealed(item.id);
    }
  }, [forceRevealSignal, isRevealed, item.id, onCardRevealed]);

  const updateScratchProgress = useCallback(() => {
    const canvas = canvasRef.current;
    if (isRevealed || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const imgData = ctx.getImageData(0, 0, width, height);
    const pixels = imgData.data;

    let cleared = 0;
    const totalSampled = pixels.length / 32;

    for (let i = 3; i < pixels.length; i += 32) {
      if (pixels[i] === 0) {
        cleared++;
      }
    }

    const percent = Math.min(100, Math.round((cleared / totalSampled) * 100));
    setScratchPercent(percent);

    if (percent >= 25 && !isRevealed) {
      setIsRevealed(true);
      ctx.clearRect(0, 0, width, height);
      onCardRevealed(item.id);
    }
  }, [isRevealed, item.id, onCardRevealed]);

  // Ultra-Smooth Continuous Line Scratching
  const scratchMove = useCallback(
    (clientX, clientY) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const currX = clientX - rect.left;
      const currY = clientY - rect.top;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineWidth = 36; // Generous smooth eraser width

      ctx.beginPath();
      if (lastPosRef.current) {
        ctx.moveTo(lastPosRef.current.x, lastPosRef.current.y);
        ctx.lineTo(currX, currY);
        ctx.stroke();
      } else {
        ctx.arc(currX, currY, 18, 0, Math.PI * 2);
        ctx.fill();
      }

      lastPosRef.current = { x: currX, y: currY };
      updateScratchProgress();
    },
    [updateScratchProgress]
  );

  const handleMouseDown = (e) => {
    setIsScratching(true);
    lastPosRef.current = null;
    scratchMove(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    if (!isScratching) return;
    scratchMove(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    setIsScratching(false);
    lastPosRef.current = null;
  };

  const handleTouchStart = (e) => {
    setIsScratching(true);
    lastPosRef.current = null;
    if (e.touches[0]) {
      scratchMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e) => {
    if (!isScratching) return;
    if (e.touches[0]) {
      scratchMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchEnd = () => {
    setIsScratching(false);
    lastPosRef.current = null;
  };

  return (
    <div className="flex flex-col items-center">
      {/* Label Badge */}
      <div className="mb-1.5 px-3 py-0.5 rounded-full bg-[#8B0000] text-[#FFF8EF] text-[10px] font-bold tracking-widest uppercase border border-[#D4AF37]/60 shadow-xs flex items-center gap-1">
        <span>{item.label}</span>
      </div>

      {/* Small Compact Star Card Frame */}
      <div
        ref={containerRef}
        className="relative w-[130px] min-[380px]:w-[145px] sm:w-[160px] md:w-[170px] h-[130px] min-[380px]:h-[145px] sm:h-[160px] md:h-[170px] rounded-xl shadow-lg overflow-hidden border-2 border-[#D4AF37] bg-gradient-to-b from-[#2A0808] to-[#4A0D0D] p-1.5 select-none flex items-center justify-center transition-transform hover:scale-[1.03]"
      >
        {/* UNDERLYING CLEAN REVEAL CARD - MINIMAL TEXT (DAY / MONTH / YEAR) */}
        <div className="w-full h-full rounded-lg bg-gradient-to-b from-[#FFFDF9] via-[#FAF0E6] to-[#FFF3E0] border border-[#D4AF37]/80 p-2 flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden">
          <span className="text-[9px] uppercase tracking-widest font-bold text-[#8B0000] bg-amber-100/90 px-2 py-0.5 rounded-full border border-[#D4AF37]/30 mb-1">
            {item.label}
          </span>

          <h4 className="font-serif text-xl min-[380px]:text-2xl sm:text-3xl font-extrabold text-[#3A2E2A] my-0.5 tracking-tight text-center">
            {item.value}
          </h4>

          <p className="text-[10px] sm:text-xs font-serif italic text-[#8B0000] mt-0.5">
            {item.subValue}
          </p>
        </div>

        {/* TOP CANVAS STAR SCRATCH LAYER */}
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full cursor-crosshair transition-opacity duration-500 z-10 touch-none ${
            isRevealed ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
      </div>
    </div>
  );
};

export const StarScratchSection = () => {
  const [revealedCards, setRevealedCards] = useState({});
  const [resetSignal, setResetSignal] = useState(0);
  const [forceRevealSignal, setForceRevealSignal] = useState(0);

  const handleCardRevealed = useCallback((id) => {
    setRevealedCards((prev) => {
      const next = { ...prev, [id]: true };
      if (Object.keys(next).length === SCRATCH_ITEMS.length) {
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#8B0000', '#FFD700', '#FFF8EF', '#E6C280'],
        });
      }
      return next;
    });
  }, []);

  const handleResetAll = () => {
    setRevealedCards({});
    setResetSignal((prev) => prev + 1);
  };

  const handleRevealAll = () => {
    setForceRevealSignal((prev) => prev + 1);
  };

  const revealedCount = Object.keys(revealedCards).length;

  return (
    <section id="scratch-section" className="py-12 sm:py-16 px-3 sm:px-4 bg-[#FFF8EF] relative overflow-hidden">
      {/* Background Decorative Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-[#D4AF37]/15 rounded-full pointer-events-none animate-spin-slow"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8B0000]/10 border border-[#8B0000]/20 text-[#8B0000] text-xs font-semibold mb-2.5 shadow-xs">
          <Gift className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Interactive Wedding Date Reveal</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#8B0000] font-bold mb-2 tracking-wide drop-shadow-xs">
          Scratch The Wedding Date
        </h2>

        <p className="text-gray-700 max-w-md mx-auto text-xs sm:text-sm mb-6 leading-relaxed">
          Scratch the 3 gold stars below to reveal the Day, Month, and Year of our Shubh Vivah!
        </p>

        {/* 3 SMALL STAR CARDS SERIALLY IN A LINE (DAY, MONTH, YEAR) */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-3 min-[400px]:gap-5 sm:gap-8 md:gap-10 mb-6">
          {SCRATCH_ITEMS.map((item) => (
            <SingleStarScratchCard
              key={item.id}
              item={item}
              onCardRevealed={handleCardRevealed}
              resetSignal={resetSignal}
              forceRevealSignal={0}
            />
          ))}
        </div>

        {/* Revealed Blessing Details */}
        {revealedCount === 3 && (
          <div 
            className="mt-8 p-6 rounded-2xl border-2 border-[#D4AF37] max-w-lg mx-auto shadow-xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF0E6] to-[#FFF3E0] animate-pulse-soft pointer-events-auto"
            style={{
              boxShadow: '0 20px 40px -10px rgba(139,30,63,0.15), 0 0 25px rgba(212,175,55,0.2)'
            }}
          >
            <span className="font-cinzel text-xs font-bold text-[#AA771C] uppercase tracking-[0.2em] block mb-2">
              {scratchToReveal.secretHeading || "Secret Wedding Blessing"}
            </span>
            <h4 className="font-great-vibes text-4xl text-[#8B0000] font-bold mb-2">
              {scratchToReveal.groomName} & {scratchToReveal.brideName}
            </h4>
            <p className="font-poppins text-xs font-semibold text-[#3A2E2A]/85 mb-2 leading-relaxed">
              {scratchToReveal.dateStr}
            </p>
            <p className="font-poppins text-xs text-[#3A2E2A]/70 mb-4">
              📍 {scratchToReveal.venueStr}
            </p>
            <div className="w-16 h-[1.5px] bg-[#D4AF37] mx-auto my-3" />
            <p className="font-cormorant italic text-base sm:text-lg text-[#8B0000] font-bold leading-relaxed">
              "{scratchToReveal.surpriseNote}"
            </p>
          </div>
        )}

        <div className="mt-10">
          <SectionDivider />
        </div>
      </div>
    </section>
  );
};
