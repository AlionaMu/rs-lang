import React from 'react';
import GameSettings from '../GameSettings/GameSettings';
import AnswerButton from '../AnswerButton/AnswerButton';
// Styles
import './AudiocallPage.css'

function AudiocallPage() {
  const numbers = JSON.parse(localStorage.getItem('wordsArr'));
  const answer = localStorage.getItem('answer');
  

  console.log(answer, numbers, typeof(numbers))
  const buttons = numbers.map((item, i) => 
     <AnswerButton key={i} i={i} item={item} />
  );

  return (
    <div className="container">
      <section className='audiocall section'>
        <GameSettings />
        <div className='audiocall__wrapper'>
          <div className='voice'>
            <button className='voice__button' type='button' aria-hidden='true'>
              <svg className='voice__icon' viewBox='0 0 24 24'>
                <path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z'></path>
              </svg>
            </button>
          </div>
          <div className='audiocall__words'>
            <div className='audiocall__buttons'>
              {buttons}
            </div>
          </div>
          <div className='audiocall__help'>
            <button className='audiocall__button'>Не знаю</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AudiocallPage;