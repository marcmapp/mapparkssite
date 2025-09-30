// utils/screenContent.ts
export const createScreenContent = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    
    // Gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#001a33');
    gradient.addColorStop(1, '#000000');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Code text
    const codeLines = [
      'function initFuture() {',
      '  const tech = new Innovation();',
      '  tech.enhance("reality");',
      '  return tech.connect(world);',
      '}',
      '',
      '// Next-gen systems online',
      'const future = initFuture();',
      'future.upgrade(humanity);'
    ];
    
    ctx.font = '24px monospace';
    ctx.fillStyle = '#00ffaa';
    
    codeLines.forEach((line, i) => {
      ctx.fillText(line, 50, 100 + i * 40);
    });
    
    // Blinking cursor
    if (Math.random() > 0.3) {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(300, 100 + (codeLines.length - 1) * 40, 15, 30);
    }
    
    return canvas;
  };