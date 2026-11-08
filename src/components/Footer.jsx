export function Footer({ brandName }) {
  return (
    <footer className="profile-footer">
      <p className="footer-credit">
        POWERED BY <span>{brandName}</span>
      </p>
    </footer>
  );
}