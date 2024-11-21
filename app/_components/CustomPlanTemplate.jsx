export default function CustomPlanTemplate({ name, email, state, message, agents, dataTeam, recipientType }) {
  return (
    <div style={{ background: '#f7f7f7', padding: '40px 20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ maxWidth: '600px', margin: 'auto', background: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', padding: '35px', textAlign: 'center' }}>
        
        {/* Header Section */}
        <div style={{ borderBottom: '2px solid #e0be40', paddingBottom: '20px', marginBottom: '20px' }}>
          <img src="https://www.ankhcallcenter.com/favicon.ico" alt="Ankh Logo" style={{ width: '80px', height: '80px', marginBottom: '10px' }} />
          <h1 style={{ color: '#333333', fontSize: '36px', margin: '0', fontWeight: '600' }}>ANKH</h1>
          <h2 style={{ color: '#e0be40', fontSize: '24px', margin: '0', fontWeight: '400' }}>
            Custom Plan Request
          </h2>
        </div>

        {/* Client Message for recipientType 'client' */}
        {recipientType === 'client' ? (
          <div style={{ textAlign: 'left', marginBottom: '20px' }}>
            <p style={{ color: '#333', fontSize: '18px', margin: '0 0 20px' }}>
              Dear {name}, we have received your custom plan details and will contact you soon.
            </p>
          </div>
        ) : (
          /* Client Info for recipientType 'company' */
          <div style={{ textAlign: 'left', marginBottom: '20px' }}>
            <h3 style={{ color: '#333', fontSize: '20px', margin: '0 0 10px' }}>Client Information</h3>
            <p style={{ color: '#555', margin: '5px 0', fontSize: '16px' }}>
              <strong>Name:</strong> {name}
            </p>
            <p style={{ color: '#555', margin: '5px 0', fontSize: '16px' }}>
              <strong>Email:</strong> <span style={{ color: '#e0be40' }}>{email}</span>
            </p>
            <p style={{ color: '#555', margin: '5px 0', fontSize: '16px' }}>
              <strong>State:</strong> {state == 'Select Your State' ? 'No state Selected' : state}
            </p>
          </div>
        )}

        {/* Plan Details */}
        <div style={{ textAlign: 'left' }}>
          <h3 style={{ color: '#333', fontSize: '20px', margin: '0 0 10px' }}>Plan Details</h3>
          <p style={{ color: '#555', fontSize: '16px' }}>
            <strong>Number of Agents:</strong> <span style={{ color: '#e0be40', fontWeight: '700', fontSize: '20px' }}>{agents}</span>
          </p>
          <p style={{ color: '#555', fontSize: '16px' }}>
            <strong>DataRecords:</strong> <span style={{ color: '#e0be40', fontWeight: '700', fontSize: '20px' }}>{dataTeam}</span>
          </p>
          {recipientType === 'company' && (
            <p style={{ color: '#555', fontSize: '16px' }}>
              <strong>Message:</strong> {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
