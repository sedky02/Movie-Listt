import React from 'react';
import { useDispatch } from 'react-redux';
import {darker} from "../actions"
function DarkSwitcher(){
    const dispatch = useDispatch();
    return(
        <div class="theme-switch-wrapper">
          <h3>dark Mode </h3>
          <label   class="theme-switch" for="checkbox">
            <input type="checkbox" id="checkbox" />
            <div onClick={()=>dispatch(darker())} class="slider round"></div>
          </label>
        </div>
    );
}
export default DarkSwitcher;