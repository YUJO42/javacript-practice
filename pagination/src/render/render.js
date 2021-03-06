import { renderButton } from './render-button.js';
import { renderTable } from './render-table.js';

export const render = (items, number) => {
  renderButton(items, number);
  renderTable(items, 0);
};
