import React from 'react'

export default () => {
  return (
    <form class="black-80">
      <div class="measure">
        <label for="name" class="f3 b db mb2">Find a case file</label>
        <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
     </div>
    </form>
      );
}