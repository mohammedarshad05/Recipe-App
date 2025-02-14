function Home(){
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.1/font/bootstrap-icons.min.css"></link>
        <header className="jumbotron text-center mt-4">
            <h1 className="display-4">Welcome to My React App</h1>
            <p className="lead">Experience the power and flexibility of our dynamic React application.</p>
        </header>

        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6">
                    <h2>About Our React App</h2>
                    <p>Our React app is designed to provide a seamless user experience with the latest in web technology. It offers robust performance, dynamic content, and an intuitive interface.</p>
                </div>
                <div className="col-lg-6">
                    <h2>Features</h2>
                    <ul className="list-unstyled">
                        <li><i className="bi bi-speedometer2" style={{ color: 'red' }}></i> <strong>Fast Performance:</strong> Optimized for speed and efficiency.</li>
                        <li><i className="bi bi-arrow-repeat" style={{ color: 'blue' }}></i> <strong>Dynamic Content:</strong> Real-time updates and interactive features.</li>
                        <li><i className="bi bi-phone" style={{ color: 'green' }}></i> <strong>Responsive Design:</strong> Looks great on all devices.</li>
                        <li><i className="bi bi-shield-lock" style={{ color: 'purple' }}></i> <strong>Secure:</strong> Built with security in mind.</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-lg-6">
                    <h2>Latest Updates</h2>
                    <p>Stay tuned for the latest updates and features. We are constantly improving our app to provide the best experience for our users.</p>
                </div>
                <div className="col-lg-6">
                    <h2>Contact Us</h2>
                    <p>If you have any questions or need support, feel free to reach out to us:</p>
                    <ul className="list-unstyled">
                        <li><i className="bi bi-envelope" style={{ color: 'orange' }}></i> <strong>Email:</strong> arshff005@gmail.com</li>
                        <li><i className="bi bi-telephone" style={{ color: 'teal' }}></i> <strong>Phone:</strong> +91 8792536150</li>
                    </ul>
                </div>
            </div>
        </div>

        <footer className="text-center mt-5 py-4 bg-light">
            <p>&copy; 2025 React App. All Rights Reserved.</p>
        </footer>
    </>
);
}

export default Home;