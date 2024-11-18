/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shake:{
         '0%':{transform : "translateX(0)"},
         '50%':{transform :"translateX(20px)"},
         '100%':{transform :"translateX(0)"},
        },
        shakeLeft:{
          '0%':{transform : "translateX(0)"},
          '50%':{transform :"translateX(-20px)"},
          '100%':{transform :"translateX(0)"},
         },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0) ' },
          '50%': { transform: 'translateY(-20px)  ' },
        },
        skew:{
          '0%':{transform : "skew(5deg,5deg)"},
          '50%':{transform : "skew(-5deg,-5deg)"},
          '100%':{transform : 'skew(5deg,5deg)'}
        },
        skewFast:{
          '0%':{transform : "skew(5deg,5deg)"},
          '50%':{transform : "skew(-5deg,-5deg)"},
          '100%':{transform : 'skew(5deg,5deg)'}
        },
        rotateHorizontal:{
          '0%':{transform : "rotateY(0deg)"},
          '100%':{transform : "rotateY(360deg)"}
        },
        rotateCW:{
          '0%':{transform : "rotateX(0deg)" },
          '100%':{transform : "rotateX(90deg)"}
        },
        rotateCCW:{
          '0%':{transform : "rotateX(-90deg)" },
          '100%':{transform : "rotateX(0deg)"}
        },
        rotateDeg:{
          '0%':{transform : "rotate(45deg)"},
          '100%':{transform : "rotate(0deg)"}
        }
        ,
        slideDown:{
          '0%':{transform : "translateY(0)"},
          '100%':{transform : "translateY(50%)"}
        },
        slideUpDown:{
          '0%':{transform : "translateY(0)" , color:"red"},
          '50%':{transform : "translateY(100px)" , color:"white"},
          '100%':{transform : "translateY(0)" , color:"red"}
        },
        slideUpToCurrent:{
          '0%':{transform : "translateY(100%)"},
          '100%':{transform : "translateY(0)"}
        },
        slideUpToCurrentSlow:{
          '0%':{transform : "translateY(100%)"},
          '100%':{transform : "translateY(0)"}
        },
        slideBL:{
          '0%':{transform : "translateY(-100%) translateX(100%)", opacity:"0"},
          '80%':{opacity : "0.2"},
          '100%':{transform : "translateY(0) translateX(0)", opacity:"1"},
        },
        slideTR:{
          '0%':{transform : "translateY(100%) translateX(-100%)", opacity:"0"},
          '80%':{opacity : "0.2"},
          '100%':{transform : "translateY(0) translateX(0)", opacity:"1"},
        },
        slideTL:{
          '0%':{transform : "translateY(100%) translateX(100%)", opacity:"0"},
          '80%':{opacity : "0.2"},
          '100%':{transform : "translateY(0) translateX(0)", opacity:"1"},
        },
        slideBR:{
          '0%':{transform : "translateY(-100%) translateX(-100%)", opacity:"0"},
          '80%':{opacity : "0.2"},
          '100%':{transform : "translateY(0) translateX(0)", opacity:"1"},
        }
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
        bounce: 'bounce 5s ease-in-out infinite',
        skew:'skew 7s ease-in-out infinite',
        skewFast:'skewFast 2s ease-in-out infinite',
        rotateHorizontal:"rotateHorizontal 20s ease-in-out infinite",
        rotateCW:"rotateCW 3s ease-in forwards",
        fadeOut:"fadeOut 2s ease-in forwards",
        rotateDeg:"rotateDeg 3s ease-in forwards",
        slideDown:"slideDown 3s ease-in forwards",
        slideUpDown:"slideUpDown 10s ease-in-out infinite",
        slideUpToCurrent:"slideUpToCurrent 2s ease-in-out forwards",
        slideUpToCurrentSlow:"slideUpToCurrentSlow 20s ease-in-out forwards",
        rotateCCW:"rotateCCW 3s ease-in forwards",
        shake:"shake 0.4s ease-in infinite",
          shakeSlow:"shake 5s ease-in infinite",
          shakeSlowLeft:"shakeLeft 5s ease-in infinite",
          slideBL:"slideBL 1.5s ease-in-out forwards",
          slideTL:"slideTL 1.5s ease-in-out forwards",
          slideTR:"slideTR 1.5s ease-in-out forwards",
          slideBR:"slideBR 1.5s ease-in-out forwards"
      },
    },
  },
  plugins: [],
}