import React from 'react';

import Joke from './joke';

function Joke1() {
    return(
        <div>
              <Joke question = "" 
              answer="something better today" />

            <Joke question= "hai, what is your name?" 
                  answer="hai, my name is chetan" />

            <Joke question= "how is going on lockdown at your side" 
                  answer="mostley closed all, only available emergency needs " />
            
        </div>
    )
}

export default Joke1;