<template>
  <div>
    <iframe id="pdf-iframe" :src="pdfLink"></iframe>
  </div>
</template>


<script>
export default {
    data () {
      return {
        pdfLink : './Avi-Dave-Resume.pdf'
      }
    }
}
</script>