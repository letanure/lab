class demoPaintWorklet {
  static get inputProperties() {
    return [`--some-width`, `--some-length`, `--some-color`];
  }
  paint(ctx, size, props) {
    const lineBox = parseInt(props.get(`--some-length`));
    const lineBoxwidth = parseInt(props.get(`--some-width`));
    const colorBox = props.get(`--some-color`).toString().trim();
    if (lineBox != 0) {
      ctx.lineWidth = lineBox;
      ctx.beginPath();

      /* UP Left */
      ctx.moveTo(0, 0);
      ctx.lineTo(0, lineBoxwidth);
      ctx.moveTo(0, 0);
      ctx.lineTo(lineBoxwidth, 0);

      /* Up Right */
      ctx.moveTo(size.width - lineBoxwidth, 0);
      ctx.lineTo(size.width, 0);
      ctx.moveTo(size.width, 0);
      ctx.lineTo(size.width, lineBoxwidth);

      /* Down Left */
      ctx.moveTo(0, size.height - lineBoxwidth);
      ctx.lineTo(0, size.height);
      ctx.moveTo(0, size.height);
      ctx.lineTo(lineBoxwidth, size.height);

      /* Down Right */
      ctx.moveTo(size.width, size.height - lineBoxwidth);
      ctx.lineTo(size.width, size.height);
      ctx.moveTo(size.width, size.height);
      ctx.lineTo(size.width - lineBoxwidth, size.height);

      ctx.strokeStyle = colorBox;
      ctx.stroke();
    }
  }
}

// Register our class under a specific name
registerPaint("demoPaintWorklet", demoPaintWorklet);
