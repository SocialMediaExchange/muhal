import React from 'react'

export default () => {
  return (
    <form class="pa4 black-80">
      <div class="measure">
        <label for="name" class="f3 b db mb2">Search</label>
        <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
          <small id="name-desc" class="f5 black-60 db mb2">Find a case file</small>
     </div>
    </form>
      );
}