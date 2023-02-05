import { useCallback } from 'react'
import type { Container, Engine } from 'tsparticles-engine'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import HeartParticleImage from 'public/particles-heart.svg'

export function ParticlesEffect() {
  //if dark mode is enabled, change the color of the particles to #69afff else change to #ff69ff

  const currentTheme = localStorage.getItem('theme')
  const particlesColor = currentTheme === 'dark' ? '#69afff' : '#ff69ff'
  console.log('🚀 ~ ParticlesEffect ~ currentTheme', currentTheme)

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine)

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container)
    },
    []
  )
  return (
    <Particles
      //set z-index to -1 to make particles appear behind the navbar
      style={{ zIndex: -22 }}
      className="particles"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        smooth: true,
        background: {
          color: {
            value: '',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'grab',
            },
            onHover: {
              enable: false,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 40,
              duration: 0.8,
            },
          },
        },
        particles: {
          color: {
            value: '#69afff',
          },
          links: {
            color: '#69afff',
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 17,
          },
          opacity: {
            value: 0.2,
          },

          shape: {
            type: 'image',
            image: {
              src: HeartParticleImage.src,

              width: 100,
              height: 100,
            },
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}
