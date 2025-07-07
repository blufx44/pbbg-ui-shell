import React from 'react';
import "beercss";
import "material-dynamic-colors";

/**
 * Base UI component for the Inventory Item.
 * 
 * @param {*} props 
 * @returns 
 */
export function InventoryItem(props) {

  return (
    <article class='no-padding'>
      <img class='responsive small' src='/beer-and-woman.svg' alt='' />
      <div class='tooltip max left'>
        <b>Title</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <nav>
          <a class='inverse-link'>Action</a>
        </nav>
      </div>
    </article>
  );
}