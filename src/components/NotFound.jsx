import React from "react";
import { Link } from "react-router-dom";
import { Home, Search, ArrowLeft, Shield } from "lucide-react";

const NotFound = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #f59e0b 0, #f59e0b 1px, transparent 0, transparent 50%)`,
            backgroundSize: "10px 10px",
          }}
        ></div>
      </div>

      <div className="relative flex items-center justify-center min-h-screen px-6 pt-40 pb-10">
        <div className="max-w-4xl w-full text-center">
          {/* Large 404 */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Shield className="w-16 h-16 text-amber-500 animate-pulse" />
            </div>
            <h1 className="text-[150px] md:text-[100px] font-bold text-gray-900 leading-none mb-4">
              404
            </h1>
            <div className="h-1 w-32 bg-amber-500 mx-auto mb-8"></div>
          </div>

          {/* Message */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Sorry, we couldn't find the page you're looking for. The page
              might have been moved, deleted, or the URL might be incorrect.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="flex items-center gap-2 px-8 py-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition shadow-lg"
            >
              <Home className="w-5 h-5" />
              GO TO HOMEPAGE
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition shadow-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              GO BACK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
