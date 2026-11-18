module.exports = {
  content: ['../**/*.{html,js}', '!../_fuente/**'],
  safelist: ['object-cover', 'object-contain', 'p-0', 'overflow-hidden'],
  theme: { extend: {
    colors: { azulOceano:'#653a82', verdeEsperanza:'#42c3d9', doradoSuave:'#fcc352', grisAntracita:'#2b1045',
      moradoMedio:'#8e62b1', azulCielo:'#53a0cc', turquesaClaro:'#5dcad4', lavandaSuave:'#afb0de', fondoPagina:'#f8f6fb' },
    fontFamily: { titulo1:['"Playfair Display"','serif'], subtitulo:['Montserrat','sans-serif'], texto:['"Source Sans Pro"','sans-serif'] }
  } }
};
