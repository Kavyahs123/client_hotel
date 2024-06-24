import React, { useState } from 'react';
import container from '../src/image/container.jpg';
const Banquets = () => {
 
  const [dropdownVisible, setDropdownVisible] = useState({
     'ATTIDE BANQUET': true,
    'ATTIDE BIZ': false,
    'SWATHI RESTAURANT': false,
    'SWATHI GARDENIA': false,
    'SWATHI RING VIEW': false,
  });

  const toggleDropdown = (columnName) => {
    setDropdownVisible((prevState) => ({
      ...prevState,
      [columnName]: !prevState[columnName],
    }));
  };
 const columnNames = ['ATTIDE BANQUET', 'ATTIDE BIZ', 'SWATHI RESTAURANT', 'SWATHI GARDENIA', 'SWATHI RING VIEW'];
  return (
    <div className="d-md-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' ,backgroundColor:"#f3fbf3"}}>
      <div style={{margin:'50px',backgroundColor:"#f3fbf3"}}>
        {columnNames.map((columnName) => (
          <div
            key={columnName}
            style={{
              border: '1px solid #eee',
              backgroundColor:'#e0dddd',
              padding: '10px',
              margin: '2px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p style={{ marginRight: '12px' }}> {columnName}</p>
              <span
                role="img"
                aria-label="Dropdown Icon"
                style={{ cursor: 'pointer' }}
                onClick={() => toggleDropdown(columnName)}
              >
                ▼
              </span>
            </div>

            {dropdownVisible[columnName] && (
              <div
                style={{
                  marginTop: '2px',
                  backgroundColor: '#e2cccc',
                  padding: '10px',
                }}
              >
                <p>
                  The decor is luxurious and the service and facilities are everything you need to make your event or party a flawless success.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <img
          src={container}
          alt="Banquet Image"
         style={{width:"100%"}}
        />
      </div>
    </div>
  );
};

export default Banquets;
