const Header = () => {
    return (
        <header className="header">
            <h1>Buat Header Menggunakan JSX</h1>
            <p>Tutorial JSX Sederhana</p>
        </header>
    );
};

const Table = () => {
    return (
        <table border="1" cellPadding="10" style={{width: "100%", textAllign: "center"}}>
            <thead>
                <tr>
                    <th>Kolom 1</th>
                    <th>Kolom 2</th>
                    <th>Kolom 3</th>
                    <th>Kolom 4</th>
                    <th>Kolom 5</th>
                </tr>
            </thead>
            <tbody>
                {[...Array(5)].map((_, rowIndex) => (
                    <tr key={rowIndex}>
                        {[...Array(5)].map((_, colIndex) => (
                            <td key={colIndex}>Baris {rowIndex + 1} Kolom {colIndex + 1}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const App = () => {
    return (
        <div>
            <Header/>
            <Table/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById("App"));
