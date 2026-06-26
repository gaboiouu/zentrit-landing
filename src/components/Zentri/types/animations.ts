import type { CSSProperties } from "react";
import type { TargetAndTransition, Transition } from "framer-motion";

/** Configuración del movimiento flotante continuo */
export interface FloatingConfig {
  enabled: boolean;
  amplitude: number;
  duration: number;
  ease: Transition["ease"];
}

/** Configuración de la respiración suave */
export interface BreathingConfig {
  enabled: boolean;
  scaleMin: number;
  scaleMax: number;
  duration: number;
  ease: Transition["ease"];
}

/** Configuración del parpadeo automático */
export interface BlinkingConfig {
  enabled: boolean;
  /** Intervalo mínimo entre parpadeos (ms) */
  minInterval: number;
  /** Intervalo máximo entre parpadeos (ms) */
  maxInterval: number;
  /** Duración de cada parpadeo (ms) */
  blinkDuration: number;
  /** Escala Y del ojo al cerrarse (0 = cerrado) */
  closedScaleY: number;
}

/** Configuración del seguimiento de pupilas */
export interface PupilTrackingConfig {
  enabled: boolean;
  /** Radio máximo de desplazamiento de la pupila (px en viewBox) */
  maxOffset: number;
  /** Suavizado del movimiento (0–1, mayor = más suave) */
  smoothing: number;
}

/** Configuración de animación independiente de brazos */
export interface ArmAnimationConfig {
  enabled: boolean;
  left: LimbSwingConfig;
  right: LimbSwingConfig;
}

export interface LimbSwingConfig {
  rotateMin: number;
  rotateMax: number;
  duration: number;
  ease: Transition["ease"];
  /** Desfase inicial en segundos */
  delay: number;
}

/** Configuración de animación independiente de cola */
export interface TailAnimationConfig {
  enabled: boolean;
  rotateMin: number;
  rotateMax: number;
  duration: number;
  ease: Transition["ease"];
  /** Punto de origen de la rotación */
  transformOrigin: string;
}

/** Configuración global de animaciones del personaje */
export interface ZentriAnimationConfig {
  floating: FloatingConfig;
  breathing: BreathingConfig;
  blinking: BlinkingConfig;
  pupils: PupilTrackingConfig;
  arms: ArmAnimationConfig;
  tail: TailAnimationConfig;
}

/** Props de movimiento derivadas de un hook de animación */
export interface MotionAnimationProps {
  animate?: TargetAndTransition;
  transition?: TargetAndTransition["transition"];
  style?: CSSProperties;
}
