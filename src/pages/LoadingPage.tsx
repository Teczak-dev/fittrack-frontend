export const LoadingPage = ()=> {
  return (
	<div style = {{
	    textAlign: 'center',
	    padding: '100px',
	    display: 'flex',
	    flexDirection: 'column',
	    alignItems: 'center',
	    gap: '20px'
	}}>
	    <div style={{
		border: '4px solid #f3f3f3',
		borderTop: '4px solid #3498db',
		borderRadius: '50%',
		width: '40px',
		height: '40px',
		animation: 'spin 2s linear infinite'
	    }}></div>
		<p>Loading...</p>
	</div>
  );
}
