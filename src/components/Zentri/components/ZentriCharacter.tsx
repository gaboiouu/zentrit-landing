import { useRef } from "react";
import { motion } from "framer-motion";
import { useZentriContext } from "../../states/ZentriContext";
import {
  useFloating,
  useBreathing,
  useBlinking,
  usePupilTracking,
  useArmAnimation,
  useTailAnimation,
  useEmotion,
} from "../../hooks";
import { getEyeScaleY } from "../../animations/blinking";
import {
  ZentriTail,
  ZentriBody,
  ZentriArm,
  ZentriHead,
  ZentriEyes,
  ZentriPupils,
  ZentriMouth,
} from "./parts";

const LEFT_EYE_CENTER = { x: 40, y: 36 };
const RIGHT_EYE_CENTER = { x: 60, y: 36 };

export function ZentriCharacter() {
  const svgRef = useRef<SVGSVGElement>(null);
  const { state, config } = useZentriContext();
  const { animations } = config;

  const floating = useFloating(animations.floating);
  const breathing = useBreathing(animations.breathing);
  const { isBlinking } = useBlinking(animations.blinking);
  const { leftOffset, rightOffset } = usePupilTracking(
    animations.pupils,
    svgRef,
    LEFT_EYE_CENTER,
    RIGHT_EYE_CENTER,
  );
  const arms = useArmAnimation(animations.arms);
  const tail = useTailAnimation(animations.tail);
  const { variants, transition: emotionTransition } = useEmotion(state.emotion.current);

  const blinkScaleY = getEyeScaleY(isBlinking, animations.blinking);

  const baseTransition = emotionTransition ?? { type: "spring", stiffness: 260, damping: 22 };

  return (
    <motion.svg
      ref={svgRef}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-lg"
      aria-label="Zentri, asistente virtual"
      role="img"
      animate={{
        ...floating.animate,
        ...variants.root,
      }}
      transition={{
        ...floating.transition,
        ...baseTransition,
      }}
    >
      <ZentriTail
        animate={{ ...tail.animate, ...variants.tail }}
        transition={{ ...tail.transition, ...baseTransition }}
        style={tail.style}
      />

      <ZentriBody
        animate={{ ...breathing.animate, ...variants.body }}
        transition={{ ...breathing.transition, ...baseTransition }}
      />

      <ZentriArm
        side="left"
        animate={{ ...arms.left.animate, ...variants.armLeft }}
        transition={{ ...arms.left.transition, ...baseTransition }}
      />
      <ZentriArm
        side="right"
        animate={{ ...arms.right.animate, ...variants.armRight }}
        transition={{ ...arms.right.transition, ...baseTransition }}
      />

      <ZentriHead
        animate={variants.head}
        transition={baseTransition}
      />

      <ZentriEyes
        animate={variants.eyes}
        transition={baseTransition}
        blinkScaleY={blinkScaleY}
      />

      <ZentriPupils leftOffset={leftOffset} rightOffset={rightOffset} />

      <ZentriMouth
        animate={variants.mouth}
        transition={baseTransition}
      />
    </motion.svg>
  );
}
