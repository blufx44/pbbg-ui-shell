import React, { useState } from 'react';
import "beercss";
import "material-dynamic-colors";

import { useRemoveQuestMutation, useGetQuestsQuery } from '../../redux/api';
import { SkillTree } from './skill-tree';
/**
 * Base UI component for the Inventory.
 * 
 * @returns 
 */
export function Skills() {
  //const { data, error, isLoading } = useGetQuestsQuery();
  const categories = [{ name: 'Assassin' }, { name: 'Stealth' }];
  const data = { name: 'Stealth', description: '', locked: false, cost: 0, subs: [] };


  return (
    <div style={{ height: '100%', width: '100%', alignSelf: 'start' }}>
      {/** Skill tree navigation **/}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {
          categories.map(_ => {
            return <div>/
              <select class="chip small-elevate">
                <option>{_.name}</option>
                </select>
              </div>;
          })
        }
      </div>
      {/** This is the card containing the selected skill information **/}
      {/* <article>
        <div class="row">
          <img class="circle large" src="/beer-and-woman.svg" alt='x' />
          <div class="max">
            <h5>{data.name}</h5>
            <p>{data.description}</p>
          </div>
        </div>
        <nav>
          {data.cost !== 0 &&
            <button disabled={data.locked}>Upgrade</button>
          }
        </nav>
      </article> */}
      <SkillTree/>
    </div>
  );
}