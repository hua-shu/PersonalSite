var app = new Vue({
  el: "#app",
  data: {
    verVal: 1,
    horVal: 1,
    url: "https://res.cloudinary.com/dx5fumr16/image/upload/v1596076572/svg/duck_vmitpz.svg",
    importedPath: null
  },

  mounted: function () {
    canvas = document.getElementById("canvas");
    paper.setup(canvas);
    this.loadSvg(this.url);
  },

  watch: {
    horVal: function (horVal) {
      this.importedPath.matrix = new paper.Matrix(1, 0, 0, 1, 0, 0);     
      this.importedPath.scale(parseFloat(this.horVal)/10 + 1, parseFloat(this.verVal)/10 + 1);
      
    },
    verVal: function (verVal) {
      this.importedPath.matrix = new paper.Matrix(1, 0, 0, 1, 0, 0); 
      this.importedPath.scale(parseFloat(this.horVal)/10 + 1, parseFloat(this.verVal)/10 + 1);
    }
  },

  methods: {
    loadSvg: function (url) {
      var self = this; 
      paper.project.importSVG(this.url, function (item) {
        self.importedPath = item;
        self.importedPath.position = item.view.center;
        self.importedPath.position.y = item.view.center.y - 100;
        self.importedPath.scale(0.5);
        self.importedPath.selected = true;
        self.importedPath.applyMatrix = false;
      });
      
    }
  }
});