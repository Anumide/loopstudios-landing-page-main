module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        customalata: ['Alata', 'sans-serif'],
        customjosefin: ['Josefin Sans', 'sans-serif']
      },
      colors: {
        customwhite: 'hsl(0, 0%, 100%)',
        customblack: 'hsl(0, 0%, 0%)',
        customgray: {
          '100': 'hsl(0, 0%, 55%)',
          '200': 'hsl(0, 0%, 41%)',
        },
      },
      backgroundImage: {
        headbackmbl: 'linear-gradient(rgba(00, 00, 00, .3), rgba(00, 00, 00, .3)), url("./images/mobile/image-hero.jpg")',
        headbackdskp: 'linear-gradient(rgba(00, 00, 00, .3), rgba(00, 00, 00, .3)), url("./images/desktop/image-hero.jpg")',
        dpearthmbl: 'url("./images/mobile/image-deep-earth.jpg")',
        dpearthdskp: 'url("./images/desktop/image-deep-earth.jpg")',
        nghtarcmbl: 'url("./images/mobile/image-night-arcade.jpg")',
        nghtarcdskp: 'url("./images/desktop/image-night-arcade.jpg")',
        soctmbl: 'url("./images/mobile/image-soccer-team.jpg")',
        soctdskp: 'url("./images/desktop/image-soccer-team.jpg")',
        girdmbl: 'url("./images/mobile/images/image-grid.jpg")',
        girddskp: 'url("./images/desktop/images/image-grid.jpg")',
        frmabvmbl: 'url("./images/mobile/images/image-from-above.jpg")',
        frmabvdskp: 'url("./images/desktop/images/image-from-above.jpg")',
        pktmbl: 'url("./images/mobile/image-pocket-borealis.jpg")',
        pktdskp: 'url("./images/desktop/image-pocket-borealis.jpg")',
        curiousmbl: 'url("./images/mobile/image-curiosity.jpg")',
        curiousdskp: 'url("./images/desktop/image-curiosity.jpg")',
        madeitmbl: 'url("./images/mobile/image-fisheye.jpg")',
        madeitdskp: 'url("./images/desktop/image-fisheye.jpg")',
      },
      

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
