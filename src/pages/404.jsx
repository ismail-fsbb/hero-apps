import { Link } from "react-router";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

export default function NotFound() {

    return (
        <>
            <Navbar />

            <section>
                <div className="container">
                    <div className="text-center space-y-4">
                        <img
                            src="/error-404.png"
                            alt="Error image"
                            className="mx-auto"
                        />

                        <h2 className="text-5xl font-bold capitalize">
                            Oops, page not found!
                        </h2>

                        <p>The page you are looking for is not available.</p>

                        <Link
                            to="/all-apps"
                            className="text-white font-semibold text-base bg-gradient-to-br from-violet-700 to-purple-500 py-3 px-6 rounded capitalize inline-block mt-8"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
