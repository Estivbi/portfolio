import React from 'react';

export default function Favicon() {
  return React.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: '32',
      height: '32',
    },
    React.createElement(
      'defs',
      null,
      React.createElement(
        'linearGradient',
        { id: 'grad', x1: '0%', y1: '0%', x2: '100%', y2: '100%' },
        React.createElement('stop', { offset: '0%', stopColor: '#4CAF50' }),
        React.createElement('stop', { offset: '100%', stopColor: '#2196F3' })
      )
    ),
    React.createElement('rect', { width: '32', height: '32', fill: '#000000', rx: '4', ry: '4' }),
    React.createElement(
      'text',
      {
        x: '50%',
        y: '50%',
        dominantBaseline: 'middle',
        textAnchor: 'middle',
        fontSize: '24',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        fill: 'url(#grad)',
      },
      '/c'
    )
  );
}