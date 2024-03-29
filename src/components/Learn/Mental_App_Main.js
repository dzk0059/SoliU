import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Brain from './Mental_App_Brain';

import '../../asset/css/style.css';

const Mental_App_Main = () => {
  return (
    <div>
      <div>
        <h1
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          How Are U?
        </h1>
        <h2
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          We are here to help you
        </h2>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Brain />
      </div>
      <div
        className='play-button-container'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <table>
          <tr>
            <button>
              <Link to='/research/mental_app/information'>LEARN</Link>
            </button>
            <button>
              <Link to='/research/mental_app/self_test'>SELF TEST</Link>
            </button>
          </tr>
          <tr>
            <button>
              <Link to='/research/mental_app/chat'>CHAT</Link>
            </button>
            <button>
              <Link to='/research/mental_app/resource_center'>
                RESOURCE CENTER
              </Link>
            </button>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Mental_App_Main;
