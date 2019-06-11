import React from 'react'

export default function Jest() {
  return (
    <section id="jest">
      <h1>Jest</h1>
      <p>Le framework de tests unitaires créée par Facebook utilisable sur n'importe quel projet JS.<br />Tests de snapshots, couverture, mocks</p>

      <div style={{display: "inline-block", width: "50%" }} >
      <p>Code</p>
      <pre><code className="hljs" data-trim contentEditable>{`
  
  export function sum(a, b) {
    return a + b;
  }

        `}
      </code></pre>
    </div>
    <div style={{display: "inline-block", width: "50%" }} >
      <p>Test</p>
      <pre><code className="hljs" data-trim contentEditable>{`
  import sum from './sum';

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
            `}
      </code></pre>
    </div>

    <div style={{display: "inline-block", width: "50%", margin: "0 auto" }} >
      <p>Run</p>
      <pre><code className="hljs" data-trim contentEditable>{`
    $> npm run test
    
    PASS  ./sum.test.js
    ✓ adds 1 + 2 to equal 3 (5ms)
            `}
      </code></pre>
    </div>
    </section>
  )
}
