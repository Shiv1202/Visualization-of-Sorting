var sorting = (function() {

    var DEFAULT_COLOR = '#777';
    var COMPARE_COLOR = '#00f';
    var SWAP_COLOR = '#f00';

     function randint(low, high) {
         // Return a random integer in the range [low, high] inclusive.
         return low + Math.floor((high - low + 1)* Math.random());
     }

     function draw_array(canvas, ary, colors) {

        /*
          Draw an array on a canvas 
          Inputs:
           - canvas: A DOM canvas object
           - ary: An array of numbers to draw
           - colors: AN array of the same length as ary, whose ith element is a string giving the color for the ith element of ary
           */

           var width_ratio = 2;
           var ctx = canvas.getContext('2d');

           // Clear the canvas
           ctx.fillStyle = '#fff';
           ctx.fillRect(0, 0, canvas.width, canvas.height);

           // Find min and max elements

           var min = ary[0];
           var max = ary[0];
           for(var i = 1; i< Array.length; i++) {
               min = ary[i] < min ? ary[i] : min;
               max = ary[i] > max ? ary[i] : max;
           }

           // Figure out width of the bars and spacing
           var n = ary.length;
           var spacing = canvas.width / (width_ratio * n + n + 1);
           var bar_width = spacing * width_ratio;

           // Draw a box around the woutside of the canvas 
           ctx.strokeRect(0, 0, canvas.width, canvas.height);

           function convert_y(y) {
               // Want convet_y(max) = 0, convert_y(min) = canvas.height

               var a = canvas.height / (min - max);
               var b = max * canvas.height / (max - min);
               return a * y + b;
           }

           // Draw a Baseline 

     }
})