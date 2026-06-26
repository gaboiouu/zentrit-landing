import type { ZentriAnimationConfig } from "../types/animations";
import type { ZentriConfig } from "../states/actions";
import type { SectionConfig } from "../types/sections";
import type { DialogBubbleConfig } from "../types/dialogs";

export const defaultAnimationConfig: ZentriAnimationConfig = {
  floating: {
    enabled: true,
    amplitude: 8,
    duration: 3.5,
    ease: "easeInOut",
  },
  breathing: {
    enabled: true,
    scaleMin: 1,
    scaleMax: 1.03,
    duration: 2.8,
    ease: "easeInOut",
  },
  blinking: {
    enabled: true,
    minInterval: 2500,
    maxInterval: 6000,
    blinkDuration: 150,
    closedScaleY: 0.1,
  },
  pupils: {
    enabled: true,
    maxOffset: 4,
    smoothing: 0.12,
  },
  arms: {
    enabled: true,
    left: {
      rotateMin: -8,
      rotateMax: 8,
      duration: 2.2,
      ease: "easeInOut",
      delay: 0,
    },
    right: {
      rotateMin: -8,
      rotateMax: 8,
      duration: 2.6,
      ease: "easeInOut",
      delay: 0.4,
    },
  },
  tail: {
    enabled: true,
    rotateMin: -12,
    rotateMax: 12,
    duration: 1.8,
    ease: "easeInOut",
    transformOrigin: "20px 85px",
  },
};

export const defaultDialogConfig: DialogBubbleConfig = {
  maxWidth: 260,
  showPointer: true,
  enterDuration: 0.35,
  exitDuration: 0.25,
  position: "top",
};

export const defaultSections: SectionConfig[] = [
  {
    id: "hero",
    selector: "#hero, [data-section='hero']",
    message: "¡Hola! Soy Zentri, tu guía digital 👋",
    emotion: "happy",
    threshold: 0.4,
    rootMargin: "0px",
    once: true,
  },
  {
    id: "servicios",
    selector: "#servicios, [data-section='servicios']",
    message: "Estos son los servicios que ofrecemos",
    emotion: "curious",
    threshold: 0.3,
    rootMargin: "-10% 0px",
    once: true,
  },
  {
    id: "contacto",
    selector: "#contacto, [data-section='contacto']",
    message: "¿Listo para empezar? ¡Escríbenos!",
    emotion: "excited",
    threshold: 0.3,
    rootMargin: "0px",
    once: true,
  },
];

export const defaultZentriConfig: ZentriConfig = {
  animations: defaultAnimationConfig,
  sections: defaultSections,
  dialog: defaultDialogConfig,
  position: "bottom-right",
  enabled: true,
};
