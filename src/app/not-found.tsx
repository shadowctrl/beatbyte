import Link from "next/link";

const NotFound = () => {
  return (
    <div className="notFoundParent">
      <div className="notFoundHead">
        <h1>404</h1>
        <div className="notFoundContainer">
          <h2>Oops! Page Not Found</h2>
          <p>The page you're looking for doesn't exist or has been moved.</p>
        </div>
        <Link href="/">Return to Homepage</Link>
      </div>
    </div>
  );
};

export default NotFound;
