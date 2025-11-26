import React, { useState, useEffect, useRef } from 'react';
import { MOCK_STUDENT } from '../constants';

interface ThreeDCardProps {
  student?: {
    name: string;
    id: string;
    major: string;
    imageUrl: string;
  };
  variant?: 'default' | 'gold' | 'platinum' | 'obsidian';
  className?: string;
  disableDrag?: boolean;
}

const ThreeDCard: React.FC<ThreeDCardProps> = ({ 
  student = MOCK_STUDENT, 
  variant = 'default',
  className = '',
  disableDrag = false
}) => {
  // Rotation state in degrees
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Refs for drag physics
  const lastMousePos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>(0);

  // Constants
  const DRAG_SENSITIVITY = 0.5;
  const AUTO_ROTATE_SPEED = 0.5;
  const DAMPING = 0.95;

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (disableDrag) return;
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    lastMousePos.current = { x: clientX, y: clientY };
    velocity.current = { x: 0, y: 0 };
  };

  const handleMouseMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;

    const deltaX = clientX - lastMousePos.current.x;
    const deltaY = clientY - lastMousePos.current.y;

    lastMousePos.current = { x: clientX, y: clientY };

    // Update velocity
    velocity.current = { x: deltaY * DRAG_SENSITIVITY, y: deltaX * DRAG_SENSITIVITY };

    setRotation(prev => ({
      x: Math.max(-60, Math.min(60, prev.x - deltaY * DRAG_SENSITIVITY)), // Limit vertical tilt
      y: prev.y + deltaX * DRAG_SENSITIVITY
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Animation Loop
  useEffect(() => {
    const animate = () => {
      if (isDragging) {
        // While dragging, we just update via mouse move
      } else {
        // When released, apply momentum or auto-rotation
        if (!isHovered && Math.abs(velocity.current.y) < 0.01 && Math.abs(velocity.current.x) < 0.01) {
            // Auto rotate indefinitely if idle
            setRotation(prev => ({
                x: prev.x * 0.95, // Return to 0 tilt
                y: (prev.y + AUTO_ROTATE_SPEED) 
            }));
        } else {
            // Apply momentum damping
            velocity.current.x *= DAMPING;
            velocity.current.y *= DAMPING;
            
            setRotation(prev => ({
                x: Math.max(-60, Math.min(60, prev.x - velocity.current.x)),
                y: prev.y + velocity.current.y
            }));
        }
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [isDragging, isHovered]);

  // Global event listeners for drag
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleMouseMove);
      window.addEventListener('touchend', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  // Variant Styling
  const getVariantStyles = () => {
    switch (variant) {
      case 'gold':
        return {
          front: 'bg-gradient-to-br from-[#FFD700] to-[#B8860B]',
          back: 'bg-gradient-to-tl from-[#B8860B] to-[#DAA520]',
          text: 'text-white',
          accent: 'text-white'
        };
      case 'platinum':
        return {
          front: 'bg-gradient-to-br from-[#E5E4E2] to-[#71797E]',
          back: 'bg-gradient-to-tl from-[#71797E] to-[#B2B2B2]',
          text: 'text-black',
          accent: 'text-prism-primary'
        };
      case 'obsidian':
        return {
          front: 'bg-gradient-to-br from-[#1a1a1a] to-[#000000]',
          back: 'bg-gradient-to-tl from-[#000000] to-[#1a1a1a]',
          text: 'text-white',
          accent: 'text-gray-400'
        };
      default:
        return {
          front: 'bg-gradient-to-br from-prism-primary to-prism-dark',
          back: 'bg-gradient-to-tl from-prism-dark to-[#1a2342]',
          text: 'text-white',
          accent: 'text-prism-accent'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div 
      className={`perspective-1000 w-[340px] h-[215px] group ${disableDrag ? '' : 'cursor-grab active:cursor-grabbing'} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={!disableDrag ? handleMouseDown : undefined}
      onTouchStart={!disableDrag ? handleMouseDown : undefined}
    >
        {!disableDrag && (
          <div className="absolute -top-12 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="text-xs text-prism-accent font-montserrat tracking-widest bg-black/40 px-3 py-1 rounded-full border border-prism-accent/30">
                  DRAG TO ROTATE
              </span>
          </div>
        )}

      <div 
        className="relative w-full h-full transform-style-3d will-change-transform"
        style={{ 
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: isDragging ? 'none' : 'transform 0.1s linear'
        }}
      >
        {/* FRONT */}
        <div className={`absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-2xl border border-white/20 ${styles.front}`}>
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-20"></div>
          
          {/* Texture */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className={`relative z-10 p-5 flex flex-col h-full justify-between select-none ${styles.text}`}>
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <svg className={`w-5 h-5 ${styles.accent}`} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
                 </div>
                 <span className="font-alice font-bold tracking-wider text-xl drop-shadow-md">PRISM</span>
              </div>
              <div className="w-10 h-10 bg-white p-1 rounded-md shadow-inner">
                 <div className="w-full h-full bg-black pattern-dots"></div>
              </div>
            </div>

            <div className="flex items-end gap-4">
              <img 
                src={student.imageUrl} 
                alt="Student" 
                draggable={false}
                className={`w-20 h-20 rounded-lg border-2 object-cover shadow-lg ${variant === 'default' ? 'border-prism-accent' : 'border-white/50'}`}
              />
              <div className="font-montserrat">
                <h3 className="text-lg font-bold leading-tight text-shadow">{student.name}</h3>
                <p className="text-xs opacity-80 font-mono tracking-wide">{student.id}</p>
                <p className={`text-[10px] uppercase tracking-widest mt-1 font-bold ${styles.accent}`}>{student.major}</p>
              </div>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div 
          className={`absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-gray-900 ${styles.back}`}
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-tl from-black/40 to-transparent"></div>
          
          <div className="relative z-10 flex flex-col h-full py-6 select-none">
            <div className="w-full h-12 bg-black/90 mb-4 shadow-sm relative">
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full"></div>
            </div> 
            
            <div className="px-6 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                  <div className="w-2/3 h-8 bg-white/90 flex items-center px-2 relative overflow-hidden">
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-30"></div>
                  </div>
                  <div className="text-right">
                      <span className="block text-[8px] text-gray-400 uppercase">CVC</span>
                      <span className="block text-xs font-mono text-white">884</span>
                  </div>
              </div>
              
              <div className="text-[9px] text-white/60 font-montserrat mt-3 leading-relaxed text-justify">
                This card is the property of the University. Use of this card constitutes acceptance of the terms and conditions. If found, please return to the Campus Security Office immediately.
                <br />
                <span className={`${styles.accent} mt-1 block`}>Emergency Contact: +1 (555) 019-2834</span>
              </div>
              
              <div className="mt-auto pt-1 flex justify-between items-end">
                 <div className="text-[8px] text-gray-400">ISSUED: 09/24</div>
                 <span className="text-white font-bold text-xs tracking-widest font-mono shadow-black drop-shadow-md">VALID THRU 12/26</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDCard;