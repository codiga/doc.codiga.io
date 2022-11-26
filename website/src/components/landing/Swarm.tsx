import React, { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { gsap } from "gsap";
import { Application, ParticleContainer, Sprite } from "pixi.js";
import { Fade } from "@chakra-ui/react";

const sceneWidth = 1280;
const sceneHeight = 959;
const spriteWidth = 593;

export function defineScale() {
  if (Object.prototype.hasOwnProperty.call(Sprite.prototype, "scaleX")) {
    return;
  }

  Object.defineProperties(Sprite.prototype, {
    scaleX: {
      get: function () {
        return this.scale.x;
      },
      set: function (v) {
        this.scale.x = v;
      },
    },
    scaleY: {
      get: function () {
        return this.scale.y;
      },
      set: function (v) {
        this.scale.y = v;
      },
    },
  });
}

const Swarm = () => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let app: Application;
    const node = sceneRef.current;

    function createScene() {
      defineScale();

      app = new Application({
        width: sceneWidth,
        height: sceneHeight,
        backgroundAlpha: 0,
      });

      node.appendChild(app.view);

      const particles = new ParticleContainer(100, {
        scale: true,
        position: true,
        rotation: true,
        alpha: true,
      });

      particles.alpha = 0.5;

      app.stage.addChild(particles);

      const sprites = [];

      let posX = 50 + spriteWidth / 2;
      let alpha = 1;
      let rotation = 0;
      let scale = 1;

      for (let i = 0; i < 100; i++) {
        const sprite = Sprite.from("img/landing/hero-asset.png");
        sprite.anchor.set(0.5);
        sprite.x = posX;
        sprite.y = app.view.height / 2;
        sprite.scale.x = scale;
        sprite.scale.y = scale;
        sprite.alpha = alpha;
        sprite.rotation = rotation;

        sprites.push(sprite);
        particles.addChild(sprite);

        posX = posX + 3;
        alpha = alpha - 0.01;
        rotation = rotation - 0.015;
        scale = scale + 0.004;
      }

      gsap.to([...sprites.reverse()], {
        x: "+=20",
        y: "+=20",
        scaleX: "+=0.1",
        scaleY: "+=0.1",
        alpha: 0.1,
        stagger: {
          yoyo: true,
          repeat: -1,
          each: 0.05,
        },
        duration: 3,
        ease: "power",
      });
    }

    createScene();

    return () => {
      node.removeChild(app.view);
      app.destroy();
    };
  }, []);

  return (
    <Fade in transition={{ enter: { duration: 1, delay: 0.1 } }}>
      <Box
        ref={sceneRef}
        position="absolute"
        top={-10}
        left={0}
        right={0}
        display={{ base: "none", md: "block" }}
        pointerEvents="none"
        w="100%"
        h="100%"
        minW="640px"
        maxW="1280px"
        marginInline="auto"
        height="max(480px, min(calc((480 / 640) * 100%), 959px))"
        opacity={0.5}
      />
    </Fade>
  );
};

export default Swarm;
