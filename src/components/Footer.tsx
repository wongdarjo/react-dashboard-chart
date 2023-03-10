import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border border-t-blue-100 bg-blue-50 p-4">
      <div className="container">
        <div className="flex justify-between">
          <p className="text-xs">Simple React Dashboard</p>
          <p className="text-xs">
            &copy; 2023 |{" "}
            <Link
              href="https://bimaindra.com"
              target="_blank"
              className="hover:underline"
            >
              @bimaindra
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
