import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `escuelait-feedback` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class EscuelaitFeedback extends PolymerElement {
  static get properties() {
    return {
      msg: String,
      msgType: {
        type: String,
        value: 'neutral'
      } 
    }
  }

  static get template() {
    return html`
    <style>
    .error {
      color: red;
      border-color: red;
    }
    .neutral {
      color: blue;
      border-color: blue;
    }
    .success {
      color: green;
      border-color: green;
    }
    p {
      border: 9px solid #ddd;
      padding: 50px 50px;
      text-align: center;
      border-radius: 10px;
    }
    </style>
    <p class$="[[msgType]]">[[msg]]</p>
    `;
  }

}

customElements.define('escuelait-feedback', EscuelaitFeedback);