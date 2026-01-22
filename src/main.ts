// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'



// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

import mermaid from "mermaid";
import type { DiagramDefinition, DiagramDB,  } from "mermaid/dist/diagram-api/types.js";

const loader = async () => {
  const diagramDefinition: DiagramDefinition = {
      parser,
      db,
      renderer,
      styles,
      init: (cnf) => {
        /*
        renderer.setConf(cnf.journey);
        db.clear();*/
      },
  }
  return { id: "zenuml", diagram: diagramDefinition };
};

/*

export interface DiagramDefinition {
    db: DiagramDB;
    renderer: DiagramRenderer;
    parser: ParserDefinition;
    styles?: any;
    init?: (config: MermaidConfig) => void;
    injectUtils?: (_log: InjectUtils['_log'], _setLogLevel: InjectUtils['_setLogLevel'], _getConfig: InjectUtils['_getConfig'], _sanitizeText: InjectUtils['_sanitizeText'], _setupGraphViewbox: InjectUtils['_setupGraphViewbox'], _commonDb: InjectUtils['_commonDb'], 
}
*/

mermaid.registerExternalDiagrams([{  id: "zenuml", detector: (t) => !!t.match(/^\s*zenuml/), loader: loader }]);


/*
import parser from './parser/journey.jison';
import db from './journeyDb.js';
import styles from './styles.js';
import renderer from './journeyRenderer.js';

export const diagram: DiagramDefinition = {
  parser,
  db,
  renderer,
  styles,
  init: (cnf) => {
    renderer.setConf(cnf.journey);
    db.clear();
  },
};
*/