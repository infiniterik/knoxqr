<template>
  <div class="hello">
    <section class="hero">
      <div class="hero-body">
        <p class="title">
          Knox College QR Code Builder
        </p>
  </div>
</section>
    <input class="input has-text-centered is-size-1 is-size-5-mobile" v-model="options.data" placeholder="Add data">
    <div id="qr-code" ref="qrCode"> </div>
    <label class="label">
      <div class="control">
      <div class="select">
        <select v-model="extension">
          <option value="svg">SVG</option>
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="webp">WEBP</option>
        </select>
      </div>
      <button class="button is-primary" v-on:click="download">Download</button>
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import QRCodeStyling, {
  DrawType,
  TypeNumber,
  Mode,
  ErrorCorrectionLevel,
  DotType,
  CornerSquareType,
  CornerDotType,
  Extension
} from 'qr-code-styling';

@Options({
  mounted : function() {
    this.qrCode.append(this.$refs["qrCode"]);
  },
  watch: {
    ['options.data']: function() {
      this.qrCode.update(this.options);
    }
  },
  methods: {
    download() {
      this.qrCode.download({ extension: this.extension as Extension })
    }
  },
  data: () => {
    const options = {
      width: 300,
      height: 300,
      type: 'svg' as DrawType,
      data: 'http://knox.edu/',
      image: 'favicon.jpg',
      margin: 0,
      qrOptions: {
        typeNumber: 0 as TypeNumber,
        mode: 'Byte' as Mode,
        errorCorrectionLevel: 'H' as ErrorCorrectionLevel
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.5,
        margin: 0,
        crossOrigin: 'anonymous',
      },
      dotsOptions: {
        color: '#330066',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 0,
        //   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
        // },
        type: 'classy' as DotType
      },
      backgroundOptions: {
        color: '#ffffff',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 0,
        //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
        // },
      },
      cornersSquareOptions: {
        color: '#000000',
        type: 'square' as CornerSquareType,
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 180,
        //   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
        // },
      },
      cornersDotOptions: {
        color: '#000000',
        type: 'dot' as CornerDotType,
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 180,
        //   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
        // },
      }
    };
    return {
      options,
      extension: 'svg',
      qrCode: new QRCodeStyling(options)
    }
  }
})
export default class QRCodeStylingComponent extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
