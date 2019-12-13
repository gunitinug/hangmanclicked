import React, { useState } from 'react';
import { number, func } from 'prop-types';
import AvailableLetter from './AvailableLetter/AvailableLetter';
import DisabledLetter from './DisabledLetter/DisabledLetter';
import classes from './Letters.module.css';

import { az } from './az.j'; // array of letters a-z

const propTypes = {
  solution: number.isRequired,
  correct: func.isRequired,
  incorrect: func.isRequired,
  setSolved: func.isRequired,
};

const Letters = ({ solution, correct, incorrect, setSolved }) => {
  const [lettersMap, setLettersMap] = useState(
    az.map(x => ({ letter: x, value: false })),
  );

  const updateClickedHandler = letter => {
    setLettersMap({
      ...lettersMap,
      [letter]: true,
    });
  };

  const playHandler = alphabet => !(solution.split('').indexOf(alphabet) < 0);

  const renderedLetters = lettersMap.map((letter, i) => {
    if (!lettersMap[letter]) {
      return (
        <AvailableLetter
          key={i}
          updateClicked={updateClickedHandler}
          setSolved={setSolved}
          play={() => playHandler(letter.value)}
          correct={() => correct(letter.value)}
          incorrect={() => incorrect(letter.value)}
          solution={solution}
          alphabet={letter.value}
        />
      );
    }
    return <DisabledLetter alphabet={letter} />;
  });

  return (
    <div className={classes.Letters}>
      <p>Solution: {solution}</p>
      <div className={classes.AvailableLetters}>{renderedLetters}</div>
    </div>
  );
};

Letters.propTypes = propTypes;

export default Letters;
